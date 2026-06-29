"use client";

import { motion } from "motion/react";

const items = [
  "Cisco Packet Tracer",
  "VLAN",
  "Routage inter-VLAN",
  "OSPF / RIP",
  "DHCP",
  "DNS",
  "ACL",
  "Adressage IP",
  "Fortinet",
  "Port-security",
  "GLPI",
  "PKI",
  "Windows Server",
  "VMware",
  "VirtualBox",
  "Cybersécurité",
];

export function TechMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-muted/30 py-5">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent sm:w-32" />

      <motion.div
        className="flex w-max gap-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 32 }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
