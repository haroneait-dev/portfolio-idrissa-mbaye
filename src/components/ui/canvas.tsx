"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive neon trail canvas (adapté de designali / 21st.dev).
 * Réécrit en TypeScript typé, scopé à son conteneur parent, avec nettoyage
 * complet et respect de `prefers-reduced-motion`.
 * À placer sur un fond sombre (le rendu utilise le blending additif "lighter").
 */

type TrailConfig = {
  friction: number;
  trails: number;
  size: number;
  dampening: number;
  tension: number;
};

const CONFIG: TrailConfig = {
  friction: 0.5,
  trails: 80,
  size: 50,
  dampening: 0.025,
  tension: 0.99,
};

class Oscillator {
  private phase: number;
  private offset: number;
  private frequency: number;
  private amplitude: number;
  private val = 0;

  constructor(options: {
    phase?: number;
    offset?: number;
    frequency?: number;
    amplitude?: number;
  } = {}) {
    this.phase = options.phase ?? 0;
    this.offset = options.offset ?? 0;
    this.frequency = options.frequency ?? 0.001;
    this.amplitude = options.amplitude ?? 1;
  }

  update(): number {
    this.phase += this.frequency;
    this.val = this.offset + Math.sin(this.phase) * this.amplitude;
    return this.val;
  }
}

class TrailNode {
  x = 0;
  y = 0;
  vx = 0;
  vy = 0;
}

type Point = { x: number; y: number };

class Line {
  private spring: number;
  private friction: number;
  private nodes: TrailNode[] = [];

  constructor(spring: number, pos: Point) {
    this.spring = spring + 0.1 * Math.random() - 0.05;
    this.friction = CONFIG.friction + 0.01 * Math.random() - 0.005;
    for (let i = 0; i < CONFIG.size; i++) {
      const node = new TrailNode();
      node.x = pos.x;
      node.y = pos.y;
      this.nodes.push(node);
    }
  }

  update(pos: Point): void {
    let spring = this.spring;
    const head = this.nodes[0];
    head.vx += (pos.x - head.x) * spring;
    head.vy += (pos.y - head.y) * spring;

    for (let i = 0, len = this.nodes.length; i < len; i++) {
      const node = this.nodes[i];
      if (i > 0) {
        const prev = this.nodes[i - 1];
        node.vx += (prev.x - node.x) * spring;
        node.vy += (prev.y - node.y) * spring;
        node.vx += prev.vx * CONFIG.dampening;
        node.vy += prev.vy * CONFIG.dampening;
      }
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= CONFIG.tension;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    let x = this.nodes[0].x;
    let y = this.nodes[0].y;
    let a: TrailNode;
    let b: TrailNode;

    ctx.beginPath();
    ctx.moveTo(x, y);

    let i = 1;
    const max = this.nodes.length - 2;
    for (; i < max; i++) {
      a = this.nodes[i];
      b = this.nodes[i + 1];
      x = 0.5 * (a.x + b.x);
      y = 0.5 * (a.y + b.y);
      ctx.quadraticCurveTo(a.x, a.y, x, y);
    }
    a = this.nodes[i];
    b = this.nodes[i + 1];
    ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);

    ctx.stroke();
    ctx.closePath();
  }
}

export function InteractiveCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const pos: Point = { x: 0, y: 0 };
    let lines: Line[] = [];
    let running = true;
    let rafId = 0;
    let started = false;

    const oscillator = new Oscillator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });

    const parent = canvas.parentElement;

    const resize = () => {
      const width = parent?.clientWidth ?? window.innerWidth;
      const height = parent?.clientHeight ?? window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const initLines = () => {
      lines = [];
      for (let i = 0; i < CONFIG.trails; i++) {
        lines.push(new Line(0.45 + (i / CONFIG.trails) * 0.025, pos));
      }
    };

    const setPos = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      pos.x = clientX - rect.left;
      pos.y = clientY - rect.top;
    };

    const handleMouse = (e: MouseEvent) => {
      setPos(e.clientX, e.clientY);
      if (!started) {
        started = true;
        initLines();
      }
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        setPos(e.touches[0].clientX, e.touches[0].clientY);
        if (!started) {
          started = true;
          initLines();
        }
      }
    };

    const render = () => {
      if (!running) return;
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = `hsla(${Math.round(oscillator.update())},100%,60%,0.045)`;
      ctx.lineWidth = 10;
      for (let i = 0; i < lines.length; i++) {
        lines[i].update(pos);
        lines[i].draw(ctx);
      }
      rafId = window.requestAnimationFrame(render);
    };

    resize();
    // Démarre les traînées au centre tant que le pointeur n'a pas bougé.
    pos.x = canvas.width / 2;
    pos.y = canvas.height / 2;
    initLines();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => resize())
        : null;
    if (resizeObserver && parent) resizeObserver.observe(parent);
    window.addEventListener("resize", resize);

    if (!reduceMotion) {
      window.addEventListener("mousemove", handleMouse);
      window.addEventListener("touchmove", handleTouch, { passive: true });
      window.addEventListener("touchstart", handleTouch, { passive: true });
      render();
    }

    return () => {
      running = false;
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("touchstart", handleTouch);
      resizeObserver?.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

export default InteractiveCanvas;
