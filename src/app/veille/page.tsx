import { Column, Heading, Text, Row, Tag, Meta, Schema } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

const meta = {
  path: "/veille",
  title: `Veille technologique : ChatGPT – ${person.name}`,
  description:
    "Veille technologique sur ChatGPT et l'IA générative : fonctionnement, évolutions, usages en support informatique et enjeux de sécurité.",
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

const sections: { title: string; paragraphs: string[] }[] = [
  {
    title: "Qu'est-ce que ChatGPT ?",
    paragraphs: [
      "ChatGPT est un assistant conversationnel développé par OpenAI et lancé publiquement en novembre 2022. Il repose sur des grands modèles de langage (LLM) de la famille GPT, entraînés sur de très grandes quantités de textes pour prédire la suite la plus probable d'une phrase.",
      "Concrètement, l'utilisateur pose une question en langage naturel et l'outil génère une réponse rédigée : explication, résumé, traduction, code, script, procédure… Il ne « comprend » pas au sens humain : il produit du texte statistiquement cohérent, ce qui explique à la fois sa puissance et ses erreurs.",
    ],
  },
  {
    title: "Les grandes évolutions",
    paragraphs: [
      "2022 : lancement de ChatGPT (GPT-3.5), plus de 100 millions d'utilisateurs en deux mois.",
      "2023 : GPT-4, plus fiable et capable d'analyser des images ; arrivée des plugins, de la navigation web et de ChatGPT Enterprise.",
      "2024 : GPT-4o, multimodal en temps réel (texte, voix, image), puis les modèles de « raisonnement » (o1) qui réfléchissent avant de répondre.",
      "2025 et après : agents capables d'enchaîner des actions (recherche, navigation, exécution de tâches), mémoire entre conversations et intégration croissante dans les outils de travail. La concurrence s'intensifie aussi (Claude d'Anthropic, Gemini de Google, Mistral en France, Copilot de Microsoft).",
    ],
  },
  {
    title: "Usages pour un technicien SISR / helpdesk",
    paragraphs: [
      "Diagnostic : décrire un message d'erreur Windows, un problème DNS/DHCP ou un souci réseau et obtenir des pistes de résolution.",
      "Scripts : générer ou corriger des scripts PowerShell ou Bash (création d'utilisateurs AD, sauvegardes, automatisation de tâches).",
      "Documentation : rédiger des procédures, des fiches d'incident ou des guides utilisateurs clairs à partir de notes brutes.",
      "Apprentissage : se faire expliquer une notion (VLAN, GPO, RAID, Kerberos…) avec des exemples adaptés à son niveau.",
    ],
  },
  {
    title: "Limites et enjeux de sécurité",
    paragraphs: [
      "Hallucinations : l'IA peut inventer une commande ou une option qui n'existe pas. Toute réponse doit être vérifiée et testée avant d'être appliquée en production.",
      "Confidentialité : il ne faut jamais coller de mots de passe, d'adresses IP internes, de données clients ou de configurations sensibles dans un outil public. Le RGPD s'applique, et certaines entreprises (ex. Samsung en 2023) ont restreint son usage après des fuites.",
      "Cybersécurité : l'IA est aussi utilisée par les attaquants (phishing plus crédible, aide à l'écriture de code malveillant). Cela renforce l'importance de la sensibilisation des utilisateurs.",
      "Cadre légal : l'AI Act européen, adopté en 2024, encadre progressivement les usages de l'IA selon leur niveau de risque.",
    ],
  },
  {
    title: "Mon avis",
    paragraphs: [
      "ChatGPT est un très bon assistant pour gagner du temps sur la recherche, la rédaction et les scripts, mais il ne remplace pas les compétences du technicien. Bien l'utiliser, c'est savoir poser la bonne question, vérifier la réponse et ne jamais lui confier de données sensibles. Pour un futur technicien support, c'est un outil incontournable à maîtriser de façon responsable.",
    ],
  },
];

const sources = [
  "Blog officiel OpenAI (openai.com/news)",
  "Le Monde Informatique, 01net, Numerama",
  "CNIL – recommandations sur l'IA générative",
  "Commission européenne – AI Act",
];

export default function Veille() {
  return (
    <Column maxWidth="s" gap="xl" paddingY="12">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={meta.path}
        title={meta.title}
        description={meta.description}
        image={`/api/og/generate?title=${encodeURIComponent(meta.title)}`}
        author={{ name: person.name, url: baseURL, image: `${baseURL}${person.avatar}` }}
      />
      <Column gap="16">
        <Heading variant="display-strong-s">Veille technologique : ChatGPT</Heading>
        <Text onBackground="neutral-weak" variant="body-default-l">
          L'IA générative transforme les métiers de l'informatique. Voici ce que je retiens de
          ma veille sur ChatGPT : son fonctionnement, son évolution et ce qu'il change pour le
          support et l'administration systèmes.
        </Text>
        <Row gap="8" wrap>
          <Tag>IA générative</Tag>
          <Tag>OpenAI</Tag>
          <Tag>Cybersécurité</Tag>
          <Tag>Support IT</Tag>
        </Row>
      </Column>
      {sections.map((s) => (
        <Column key={s.title} gap="12">
          <Heading as="h2" variant="heading-strong-l">
            {s.title}
          </Heading>
          {s.paragraphs.map((p) => (
            <Text key={p} onBackground="neutral-medium" variant="body-default-m">
              {p}
            </Text>
          ))}
        </Column>
      ))}
      <Column gap="8">
        <Heading as="h2" variant="heading-strong-l">
          Sources
        </Heading>
        {sources.map((src) => (
          <Text key={src} onBackground="neutral-weak" variant="body-default-s">
            • {src}
          </Text>
        ))}
      </Column>
    </Column>
  );
}
