import { Column, Heading, Text, Row, Tag, Button, Icon, Meta, Schema } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import React from "react";

const meta = {
  path: "/synthese",
  label: "Synthèse",
  title: `Tableau de synthèse E5 – ${person.name}`,
  description:
    "Tableau de synthèse officiel de l'épreuve E5 (BTS SIO) — réalisations professionnelles mises en regard des compétences du référentiel SISR.",
};

export async function generateMetadata() {
  return Meta.generate({
    title: meta.title,
    description: meta.description,
    baseURL,
    path: meta.path,
    image: `/api/og/generate?title=${encodeURIComponent(meta.title)}`,
  });
}

const columns: { key: string; title: string; bullets: string[] }[] = [
  {
    key: "C",
    title: "Gérer le patrimoine informatique",
    bullets: [
      "Recenser et identifier les ressources numériques",
      "Exploiter des référentiels, normes et standards",
      "Mettre en place et vérifier les habilitations",
      "Vérifier la continuité d'un service",
      "Gérer des sauvegardes",
    ],
  },
  {
    key: "D",
    title: "Répondre aux incidents et demandes d'assistance et d'évolution",
    bullets: [
      "Collecter, suivre et orienter des demandes",
      "Traiter des demandes (réseau, système, applicatifs)",
    ],
  },
  {
    key: "E",
    title: "Développer la présence en ligne de l'organisation",
    bullets: [
      "Valoriser l'image sur les médias numériques",
      "Référencer les services en ligne",
      "Participer à l'évolution d'un site Web",
    ],
  },
  {
    key: "F",
    title: "Travailler en mode projet",
    bullets: [
      "Analyser les objectifs et l'organisation",
      "Planifier les activités",
      "Évaluer les indicateurs de suivi",
    ],
  },
  {
    key: "G",
    title: "Mettre à disposition un service informatique",
    bullets: [
      "Réaliser les tests d'intégration et d'acceptation",
      "Déployer un service",
      "Accompagner les utilisateurs",
    ],
  },
  {
    key: "H",
    title: "Organiser son développement professionnel",
    bullets: [
      "Mettre en place son environnement d'apprentissage",
      "Mettre en œuvre une veille informationnelle",
      "Gérer son identité professionnelle",
    ],
  },
];

const groups: { group: string; items: { label: string; marks: string[] }[] }[] = [
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
      { label: "Configuration des services DNS et DHCP", marks: ["C", "G"] },
      { label: "Mise en place d'une autorité de certification (PKI)", marks: ["C", "G"] },
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
        label: "Travail de recherche de solution pour la fibre et la téléphonie mobile",
        marks: ["C"],
      },
      { label: "Changement d'un équipement pare-feu type Fortinet", marks: ["C", "F"] },
      {
        label: "Mise en place du schéma d'une infrastructure réseau (STP, NAT, Sécurité, ACL)",
        marks: ["C"],
      },
    ],
  },
];

const headBg = "var(--brand-solid-strong)";
const headColor = "var(--neutral-on-solid-strong)";
const borderColor = "var(--neutral-border-medium)";

export default function Synthese() {
  return (
    <Column maxWidth="l" gap="l" paddingY="24" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.title}
        description={meta.description}
        path={meta.path}
        image={`/api/og/generate?title=${encodeURIComponent(meta.title)}`}
        author={{ name: person.name, url: `${baseURL}${meta.path}`, image: `${baseURL}${person.avatar}` }}
      />

      <Column fillWidth gap="m" horizontal="center" align="center">
        <Heading variant="display-strong-l" wrap="balance">
          Tableau de synthèse
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          Document officiel de l'épreuve E5 (BTS SIO) — mes réalisations
          professionnelles mises en regard des compétences du référentiel SISR.
        </Text>
      </Column>

      <Row fillWidth wrap gap="8" horizontal="center" vertical="center">
        <Tag size="l" prefixIcon="rocket">BTS SIO</Tag>
        <Tag size="l">Session 2026</Tag>
        <Tag size="l">Candidat : MBAYE Idrissa</Tag>
        <Tag size="l">Centre : IPSSI Serris</Tag>
        <Tag size="l" prefixIcon="check">Option SISR</Tag>
      </Row>

      {/* Matrice compétences */}
      <Column
        fillWidth
        radius="l"
        border="neutral-medium"
        overflow="hidden"
        style={{ overflowX: "auto" }}
      >
        <table
          style={{
            width: "100%",
            minWidth: "60rem",
            borderCollapse: "collapse",
            textAlign: "left",
            fontSize: "0.8rem",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  position: "sticky",
                  left: 0,
                  zIndex: 2,
                  width: "20rem",
                  background: headBg,
                  color: headColor,
                  padding: "12px",
                  verticalAlign: "bottom",
                  fontWeight: 600,
                }}
              >
                Réalisations professionnelles
              </th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  title={col.bullets.join(" • ")}
                  style={{
                    background: headBg,
                    color: headColor,
                    borderLeft: "1px solid rgba(255,255,255,0.15)",
                    padding: "10px 8px",
                    verticalAlign: "top",
                    minWidth: "9rem",
                  }}
                >
                  <p style={{ fontWeight: 700, fontSize: "0.7rem", lineHeight: 1.2 }}>
                    {col.title}
                  </p>
                  <ul style={{ margin: "6px 0 0", paddingLeft: "12px" }}>
                    {col.bullets.map((b) => (
                      <li
                        key={b}
                        style={{ fontSize: "0.56rem", lineHeight: 1.25, opacity: 0.8 }}
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {groups.map((grp) => (
              <React.Fragment key={grp.group}>
                <tr>
                  <td
                    colSpan={1 + columns.length}
                    style={{
                      background: "var(--brand-alpha-weak)",
                      color: "var(--brand-on-background-strong)",
                      borderTop: `1px solid ${borderColor}`,
                      padding: "8px 12px",
                      fontWeight: 600,
                      fontSize: "0.78rem",
                    }}
                  >
                    {grp.group}
                  </td>
                </tr>
                {grp.items.map((item, i) => (
                  <tr
                    key={item.label}
                    style={{
                      background:
                        i % 2 === 0 ? "transparent" : "var(--neutral-alpha-weak)",
                    }}
                  >
                    <td
                      style={{
                        position: "sticky",
                        left: 0,
                        zIndex: 1,
                        background: "var(--page-background)",
                        borderTop: `1px solid ${borderColor}`,
                        padding: "10px 12px",
                        verticalAlign: "top",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.label}
                    </td>
                    {columns.map((col) => {
                      const active = item.marks.includes(col.key);
                      return (
                        <td
                          key={col.key}
                          style={{
                            borderLeft: `1px solid ${borderColor}`,
                            borderTop: `1px solid ${borderColor}`,
                            padding: "10px 8px",
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          {active ? (
                            <Row horizontal="center" vertical="center">
                              <Icon name="check" size="s" onBackground="brand-strong" />
                            </Row>
                          ) : null}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </Column>

      <Text variant="body-default-s" onBackground="neutral-weak">
        Chaque ✓ indique une compétence du référentiel SISR mobilisée par la
        réalisation. Le détail des activités figure sous chaque compétence (en-têtes
        de colonnes).
      </Text>

      <Row horizontal="center" paddingTop="8">
        <Button href="/cv/Idrissa-MBAYE-CV.pdf" prefixIcon="download" variant="primary" size="m">
          Télécharger mon CV
        </Button>
      </Row>
    </Column>
  );
}
