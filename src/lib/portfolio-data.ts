/**
 * Source unique de vérité pour tout le contenu du portfolio.
 * Modifie ce fichier pour mettre à jour le site (les sections lisent ces données).
 */

export const profile = {
  firstName: "Idrissa",
  lastName: "MBAYE",
  fullName: "Idrissa MBAYE",
  title: "Technicien Réseau",
  subtitle: "Étudiant BTS SIO — option SISR",
  location: "Chanteloup-en-Brie, France",
  email: "id.mbaye@ecole-ipssi.net",
  phone: "07 82 37 07 64",
  phoneHref: "+33782370764",
  cvPath: "/cv/Idrissa-MBAYE-CV.pdf",
  availability:
    "Étudiant en BTS SIO option SISR à l'IPSSI, je recherche un stage de 5 à 8 semaines (à partir du 27 avril) ainsi qu'une alternance dès septembre 2026 — rythme 1 semaine en formation / 1 semaine en entreprise.",
  pitch:
    "Passionné par les réseaux et l'administration systèmes, je me forme en BTS SIO option SISR à l'IPSSI Val d'Europe. De la conception d'architectures segmentées par VLAN sous Cisco Packet Tracer à la mise en place de services réseau et à la sécurisation des accès, j'aime concevoir, déployer et sécuriser des infrastructures fiables.",
  badges: ["Administration réseau", "Réseau IP", "Sécurité des données", "Travail d'équipe", "Permis"],
};

export const socials = {
  email: `mailto:${profile.email}`,
  phone: `tel:${profile.phoneHref}`,
};

export type SkillCategory = {
  title: string;
  icon: "network" | "server" | "shield" | "tools" | "users" | "languages";
  description: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Réseaux",
    icon: "network",
    description: "Conception et configuration d'infrastructures réseau.",
    items: [
      "Modélisation & configuration sous Cisco Packet Tracer",
      "Adressage IP & sous-réseaux",
      "Routage (RIP, OSPF) & routage inter-VLAN",
      "Segmentation par VLAN",
      "Services réseau : DHCP & DNS",
    ],
  },
  {
    title: "Systèmes & Virtualisation",
    icon: "server",
    description: "Administration et virtualisation.",
    items: [
      "Serveur Windows en machine virtuelle",
      "Virtualisation VMware & VirtualBox",
      "Environnement de gestion de parc GLPI",
      "Autorité de certification (PKI)",
    ],
  },
  {
    title: "Sécurité & Télécom",
    icon: "shield",
    description: "Sécurisation des accès et conformité.",
    items: [
      "Sécurisation des accès réseau (Port-security, ACL)",
      "Pare-feu Fortinet",
      "DHCP Snooping, RADIUS, Syslog",
      "Conformité CNIL / ANSSI / RGPD",
    ],
  },
  {
    title: "Outils & Bureautique",
    icon: "tools",
    description: "Outils techniques et bureautique.",
    items: [
      "Cisco Packet Tracer",
      "VMware & VirtualBox",
      "Word & Excel",
      "Supervision de parc informatique",
    ],
  },
];

export const softSkills: string[] = [
  "Travail en équipe",
  "Bon relationnel",
  "Sérieux et motivé",
  "Organisé et méthodique",
  "Curieux et autonome",
];

export type Project = {
  slug: string;
  title: string;
  context: string;
  period: string;
  summary: string;
  highlights: string[];
  tags: string[];
  category: "Réseau" | "Stage" | "Web";
  link?: { href: string; label: string };
  detailHref?: string;
  featured?: boolean;
  gallery?: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "labo-gsb",
    title: "Infrastructure réseau — Laboratoire GSB",
    context: "Projet pédagogique · BTS SIO SISR · IPSSI Val d'Europe",
    period: "Depuis janvier 2026",
    summary:
      "Conception et mise en place d'une infrastructure réseau segmentée pour le laboratoire pharmaceutique GSB, maquettée sous Cisco Packet Tracer, du recueil des besoins à la sécurisation des accès.",
    highlights: [
      "Identification et analyse des besoins spécifiques de l'entreprise",
      "Architecture réseau basée sur le découpage en VLAN",
      "Conception d'un plan d'adressage IP adapté",
      "Rédaction d'un devis technique (équipements & solutions)",
      "Maquette fonctionnelle sous Cisco Packet Tracer",
      "Routage inter-VLAN & configuration des services (DHCP)",
      "Application de mesures de sécurisation des accès réseau",
    ],
    tags: ["Cisco Packet Tracer", "VLAN", "Routage", "DHCP", "Adressage IP", "Sécurité"],
    category: "Réseau",
    featured: true,
  },
  {
    slug: "stage-it-one",
    title: "Stage réseau — IT One",
    context: "Technicien réseau · Migration & étude",
    period: "Depuis mai 2026",
    summary:
      "Stage technique articulé autour du changement d'un pare-feu, d'une étude sur la fibre et la téléphonie mobile et de la mise en place d'une infrastructure réseau pour un parc informatique.",
    highlights: [
      "Recherche de ressources pour le changement d'un pare-feu",
      "Migration vers un nouvel équipement pare-feu (type Fortinet)",
      "Étude de solutions pour la fibre et la téléphonie mobile",
      "Mise en place d'un système de supervision dans un parc informatique",
      "Conception du schéma d'une infrastructure réseau (STP, NAT, ACL)",
    ],
    tags: ["Pare-feu", "Fortinet", "Supervision", "Téléphonie mobile", "STP", "NAT", "ACL"],
    category: "Stage",
    featured: true,
  },
  {
    slug: "travaux-ecole",
    title: "Travaux pratiques réseau & systèmes — IPSSI",
    context: "Formation BTS SIO 1ʳᵉ année",
    period: "2025 – 2026",
    summary:
      "Ensemble des travaux pratiques réalisés en formation : serveur Windows virtualisé, services réseau, environnement GLPI, autorité de certification et protocoles Cisco.",
    highlights: [
      "Serveur Windows en machine virtuelle + configuration des services réseau",
      "Création d'un réseau LAN de simulation & environnement GLPI",
      "Configuration des services DNS et DHCP",
      "Mise en place d'une autorité de certification (PKI)",
      "TP Cisco : RIP, OSPF, SSH, Port-security, DHCP Snooping, RADIUS, Syslog, NTP",
    ],
    tags: ["Windows Server", "GLPI", "DNS", "DHCP", "PKI", "OSPF", "RADIUS"],
    category: "Réseau",
    featured: true,
  },
];

export type Certification = {
  name: string;
  issuer: string;
  status: "obtenue" | "en cours";
  description: string;
};

export const certifications: Certification[] = [
  {
    name: "CNIL",
    issuer: "Commission Nationale de l'Informatique et des Libertés",
    status: "obtenue",
    description:
      "Sensibilisation à la protection des données personnelles et au RGPD.",
  },
  {
    name: "ANSSI — SecNumacadémie",
    issuer: "Agence Nationale de la Sécurité des Systèmes d'Information",
    status: "obtenue",
    description:
      "Fondamentaux de la cybersécurité : sécurité des postes, des réseaux et des données.",
  },
];

export type TimelineEntry = {
  title: string;
  place: string;
  period: string;
  description: string;
  kind: "formation" | "experience";
};

export const timeline: TimelineEntry[] = [
  {
    title: "Stage Technicien Réseau — Changement de pare-feu",
    place: "IT One",
    period: "Depuis mai 2026",
    description:
      "Migration d'un pare-feu, étude fibre & téléphonie mobile, supervision et conception d'une infrastructure réseau pour un parc informatique.",
    kind: "experience",
  },
  {
    title: "BTS SIO — option SISR",
    place: "IPSSI Val d'Europe",
    period: "Depuis octobre 2025",
    description:
      "Solutions d'Infrastructures, Systèmes et Réseaux. Formation orientée vers les métiers des systèmes et réseaux.",
    kind: "formation",
  },
  {
    title: "Baccalauréat STMG — option Gestion & Finance",
    place: "Lycée Martin Luther King",
    period: "2024 – 2025",
    description:
      "Baccalauréat technologique en Sciences et Technologies du Management et de la Gestion, enseignement spécifique « Gestion et finance ».",
    kind: "formation",
  },
  {
    title: "Stagiaire d'observation",
    place: "Banque de France",
    period: "Mars 2021",
    description:
      "Découverte des métiers de l'informatique bancaire, observation d'une équipe technique et initiation aux outils de gestion et de sécurité des données.",
    kind: "experience",
  },
];

export const languages = [
  { name: "Français", level: "Langue maternelle", value: 100 },
  { name: "Anglais", level: "B2", value: 75 },
  { name: "Espagnol", level: "B1", value: 55 },
];

export const interests = ["Sport d'équipe (basket-ball, football)", "Réseaux & nouvelles technologies"];

export const navLinks = [
  { href: "#a-propos", label: "À propos" },
  { href: "#competences", label: "Compétences" },
  { href: "#synthese", label: "Synthèse" },
  { href: "#projets", label: "Projets" },
  { href: "#certifications", label: "Certifs" },
  { href: "#veille", label: "Veille" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

/** Tableau de synthèse officiel (Annexe — Épreuve E5), reproduit fidèlement. */
export const syntheseMeta = {
  diplome: "BTS Services Informatiques aux Organisations",
  session: "Session 2026",
  titre: "Tableau de synthèse des réalisations professionnelles",
  nom: "MBAYE Idrissa",
  centre: "IPSSI Serris",
  option: "SISR",
};

export type SyntheseColumn = { key: string; title: string; bullets: string[] };
export type SyntheseRow = {
  group: string;
  items: { label: string; marks: string[] }[];
};

export const syntheseColumns: SyntheseColumn[] = [
  {
    key: "C",
    title: "Gérer le patrimoine informatique",
    bullets: [
      "Recenser et identifier les ressources numériques",
      "Exploiter des référentiels, normes et standards",
      "Mettre en place et vérifier les niveaux d'habilitation",
      "Vérifier la continuité d'un service informatique",
      "Gérer des sauvegardes",
      "Vérifier le respect des règles d'utilisation",
    ],
  },
  {
    key: "D",
    title: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    bullets: [
      "Collecter, suivre et orienter des demandes",
      "Traiter des demandes (réseau, système, applicatifs)",
      "Traiter des demandes concernant les applications",
    ],
  },
  {
    key: "E",
    title: "Développer la présence en ligne de l'organisation",
    bullets: [
      "Valoriser l'image de l'organisation sur les médias numériques",
      "Référencer les services en ligne et mesurer leur visibilité",
      "Participer à l'évolution d'un site Web",
    ],
  },
  {
    key: "F",
    title: "Travailler en mode projet",
    bullets: [
      "Analyser les objectifs et l'organisation d'un projet",
      "Planifier les activités",
      "Évaluer les indicateurs de suivi et analyser les écarts",
    ],
  },
  {
    key: "G",
    title: "Mettre à disposition des utilisateurs un service informatique",
    bullets: [
      "Réaliser les tests d'intégration et d'acceptation",
      "Déployer un service",
      "Accompagner les utilisateurs dans la mise en place d'un service",
    ],
  },
  {
    key: "H",
    title: "Organiser son développement professionnel",
    bullets: [
      "Mettre en place son environnement d'apprentissage",
      "Mettre en œuvre une veille informationnelle",
      "Gérer son identité professionnelle",
      "Développer son projet professionnel",
    ],
  },
];

export const syntheseRows: SyntheseRow[] = [
  {
    group: "Réalisations en cours de première année",
    items: [
      {
        label:
          "Mise en place d'un serveur Windows en machine virtuelle avec configuration des services réseau",
        marks: ["C", "G"],
      },
      {
        label:
          "Création d'un réseau LAN de simulation et mise en place d'un environnement GLPI",
        marks: ["C", "D", "G"],
      },
      {
        label: "Configuration des services DNS et DHCP",
        marks: ["C", "G"],
      },
      {
        label: "Mise en place d'une autorité de certification (PKI)",
        marks: ["C", "G"],
      },
      {
        label:
          "Travaux pratiques Cisco Packet Tracer : RIP, OSPF, SSH, Port-security, DHCP Snooping, RADIUS, Syslog, NTP",
        marks: ["C", "D"],
      },
    ],
  },
  {
    group: "Réalisations en milieu professionnel — 1ʳᵉ année",
    items: [
      {
        label:
          "Travail de recherche d'information pour le projet de changement d'un pare-feu",
        marks: ["C", "F"],
      },
      {
        label: "Mise en place d'un système de supervision dans un parc informatique",
        marks: ["D", "F"],
      },
      {
        label:
          "Travail de recherche de solution pour la fibre et la téléphonie mobile",
        marks: ["C"],
      },
      {
        label: "Changement d'un équipement pare-feu type Fortinet",
        marks: ["C", "F"],
      },
      {
        label:
          "Mise en place du schéma d'une infrastructure réseau (STP, NAT, Sécurité, ACL)",
        marks: ["C"],
      },
    ],
  },
];

/** Veille technologique (attendu E5) — réseaux & cybersécurité. */
export const veille = {
  subject: "Réseaux & cybersécurité",
  intro:
    "Ma veille porte sur les réseaux et la cybersécurité : un domaine en évolution permanente (nouvelles menaces, équipements, bonnes pratiques de sécurisation). Suivre cette actualité est indispensable pour concevoir et maintenir des infrastructures fiables et sécurisées.",
  points: [
    "Sécurisation des réseaux (pare-feu, VLAN, ACL, segmentation)",
    "Bonnes pratiques de l'ANSSI et conformité CNIL / RGPD",
    "Nouveaux équipements & protocoles réseau (Cisco, Fortinet)",
    "Téléphonie mobile, fibre et évolutions des infrastructures télécom",
  ],
  sources: [
    "Site et publications de l'ANSSI",
    "Site de la CNIL",
    "Documentation Cisco & Fortinet",
    "Médias spécialisés réseaux & cybersécurité",
  ],
  contribution:
    "J'applique cette veille dans mes projets de formation et de stage : sécurisation des accès, choix d'équipements et conception d'architectures réseau conformes aux bonnes pratiques.",
};
