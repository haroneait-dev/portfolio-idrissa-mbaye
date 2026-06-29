import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Idrissa",
  lastName: "MBAYE",
  name: `Idrissa MBAYE`,
  role: "Technicien Réseau — BTS SIO SISR",
  avatar: "/images/avatar.jpg",
  email: "id.mbaye@ecole-ipssi.net",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Français", "Anglais (B2)", "Espagnol (B1)"],
  locale: "fr",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Newsletter</>,
  description: <></>,
};

const social: Social = [
  {
    name: "CV",
    icon: "document",
    link: "/cv/Idrissa-MBAYE-CV.pdf",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `Portfolio — ${person.name}`,
  description: `Portfolio d'${person.name}, étudiant en BTS SIO option SISR à l'IPSSI`,
  headline: <>Concevoir et sécuriser des infrastructures réseau</>,
  featured: {
    display: true,
    title: (
      <>
        <strong>BTS SIO · SISR</strong> — Épreuve E5 · Tableau de synthèse
      </>
    ),
    href: "/synthese",
  },
  subline: (
    <>
      Je suis Idrissa, étudiant en <strong>BTS SIO option SISR</strong> à l'IPSSI
      Val d'Europe. Je conçois, déploie et sécurise des infrastructures réseau —
      du VLAN au pare-feu.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `Idrissa MBAYE, technicien réseau en formation BTS SIO option SISR`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Profil",
    description: (
      <>
        Actuellement étudiant en BTS SIO (Services Informatiques aux Organisations)
        option SISR à l'IPSSI Val d'Europe, je me passionne pour les réseaux et
        l'administration systèmes. De la conception d'architectures segmentées par
        VLAN sous Cisco Packet Tracer à la mise en place de services réseau et à la
        sécurisation des accès, j'aime concevoir et déployer des infrastructures
        fiables. Je recherche un stage de 5 à 8 semaines ainsi qu'une alternance dès
        septembre 2026 (1 semaine en formation / 1 semaine en entreprise).
      </>
    ),
  },
  work: {
    display: true,
    title: "Expériences",
    experiences: [
      {
        company: "IT One",
        timeframe: "Depuis mai 2026",
        role: "Stage — Technicien réseau",
        achievements: [
          <>
            Recherche de ressources pour le changement d'un pare-feu et migration
            vers le nouvel équipement (type Fortinet) en respectant les étapes.
          </>,
          <>
            Étude de solutions pour la fibre et la téléphonie mobile, mise en place
            d'un système de supervision et conception d'un schéma d'infrastructure
            réseau (STP, NAT, ACL).
          </>,
        ],
        images: [],
      },
      {
        company: "Laboratoire GSB — IPSSI",
        timeframe: "Depuis janvier 2026",
        role: "Projet — Conception d'infrastructure réseau",
        achievements: [
          <>
            Analyse des besoins, architecture segmentée par VLAN et plan d'adressage
            IP, maquettée sous Cisco Packet Tracer.
          </>,
          <>
            Routage inter-VLAN, configuration des services (DHCP) et mise en place de
            mesures de sécurisation des accès réseau.
          </>,
        ],
        images: [],
      },
      {
        company: "Banque de France",
        timeframe: "Mars 2021",
        role: "Stagiaire d'observation",
        achievements: [
          <>
            Découverte des métiers de l'informatique bancaire et observation d'une
            équipe technique.
          </>,
          <>Initiation aux outils de gestion et de sécurité des données.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formation",
    institutions: [
      {
        name: "IPSSI Val d'Europe",
        description: (
          <>
            BTS SIO option SISR (Solutions d'Infrastructures, Systèmes et Réseaux) —
            depuis octobre 2025.
          </>
        ),
      },
      {
        name: "Lycée Martin Luther King",
        description: (
          <>Baccalauréat technologique STMG, option Gestion &amp; Finance — 2024-2025.</>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Compétences techniques",
    skills: [
      {
        title: "Réseaux",
        description: (
          <>
            Modélisation et configuration sous Cisco Packet Tracer : VLAN, adressage
            IP, routage (RIP, OSPF) et inter-VLAN, services DHCP &amp; DNS.
          </>
        ),
        tags: [
          { name: "Cisco Packet Tracer", icon: "rocket" },
          { name: "VLAN", icon: "globe" },
          { name: "Routage", icon: "globe" },
        ],
        images: [],
      },
      {
        title: "Systèmes & Virtualisation",
        description: (
          <>
            Serveur Windows, machines virtuelles (VMware, VirtualBox), environnement
            de gestion de parc GLPI et autorité de certification (PKI).
          </>
        ),
        tags: [
          { name: "VMware", icon: "rocket" },
          { name: "VirtualBox", icon: "rocket" },
          { name: "GLPI", icon: "globe" },
        ],
        images: [],
      },
      {
        title: "Sécurité & Télécom",
        description: (
          <>
            Sécurisation des accès réseau (Port-security, ACL), pare-feu Fortinet,
            DHCP Snooping, RADIUS, Syslog, conformité CNIL, ANSSI &amp; RGPD.
          </>
        ),
        tags: [
          { name: "Fortinet", icon: "rocket" },
          { name: "CNIL", icon: "document" },
          { name: "ANSSI", icon: "document" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog",
  description: `Articles de ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projets – ${person.name}`,
  description: `Projets réseau et systèmes réalisés par ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Galerie – ${person.name}`,
  description: `Galerie photo de ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
