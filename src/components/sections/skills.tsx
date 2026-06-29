"use client";

import { Network, Server, ShieldCheck, Wrench } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const skillsTimeline = [
  {
    id: 1,
    title: "Réseaux",
    date: "Cœur de métier",
    content:
      "Modélisation & configuration sous Cisco Packet Tracer, adressage IP & sous-réseaux, routage (RIP, OSPF) et inter-VLAN, segmentation par VLAN.",
    category: "Réseau",
    icon: Network,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 2,
    title: "Systèmes & Virtualisation",
    date: "Administration",
    content:
      "Serveur Windows, machines virtuelles (VMware, VirtualBox), environnement GLPI, autorité de certification (PKI), services DHCP & DNS.",
    category: "Système",
    icon: Server,
    relatedIds: [1, 3],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 3,
    title: "Sécurité & Télécom",
    date: "Sécurisation",
    content:
      "Sécurisation des accès réseau (Port-security, ACL), pare-feu Fortinet, DHCP Snooping, RADIUS, Syslog, conformité CNIL, ANSSI & RGPD.",
    category: "Sécurité",
    icon: ShieldCheck,
    relatedIds: [1, 2, 4],
    status: "in-progress" as const,
    energy: 65,
  },
  {
    id: 4,
    title: "Projet & Outils",
    date: "Mode projet",
    content:
      "Analyse des besoins, rédaction de devis technique, supervision de parc informatique, schéma d'infrastructure (STP, NAT, ACL), bureautique (Word, Excel).",
    category: "Projet",
    icon: Wrench,
    relatedIds: [3],
    status: "completed" as const,
    energy: 80,
  },
];

export function Skills() {
  return (
    <section id="competences" className="scroll-mt-20">
      <RadialOrbitalTimeline
        eyebrow="Compétences"
        title="Un socle technique réseaux & systèmes"
        description="Des compétences acquises en formation, en stage et sur le terrain."
        timelineData={skillsTimeline}
      />
    </section>
  );
}
