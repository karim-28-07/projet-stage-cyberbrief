import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Articles = () => (
  <Layout>
    <Seo title="Articles" />

    <h1>L’US Navy veut créer une archive mondiale des médias sociaux, avec
      350 milliards d'enregistrements de données numériques.</h1>

    <p>Les messages de 200 millions d'utilisateurs d'au moins 100 pays
    seront ajoutés aux archives mondiales des médias sociaux de la Marine.
    L’équipe de recherche militaire souhaite «acquérir une archive historique
    mondiale à grande échelle de données de médias sociaux, fournissant le texte
    intégral de tous les messages de médias sociaux publics, dans tous les pays
    et dans toutes les langues couvertes par la plateforme de médias sociaux».
    Les données seront utilisées à des fins pédagogiques pour offrir aux étudiants
    de nouvelles possibilités de thèse et de développement
      des compétences analytiques «Big Data». </p>

    <h2>Le logiciel malveillant enregistreur de touches HawkEye a ciblé
    des entreprises
    dans le monde entier au
    cours des deux derniers mois.</h2>

    <p> Selon un rapport d'IBMXForce,les assaillants ont utilisé des serveurs de
    spam basés en Estonie pour cibler des entreprises du transport et de la logistique,
    de la santé, d’import export, de marketing et encore d’agriculture.
    Leur mode opératoire était simple: ils transformaient leurs spams en messages émanant
    de banques espagnoles,ou d'entreprises légitimes.</p>

    <h2>Apple accusé de partager des données clients d'iTunes et Apple Music avec des tiers.</h2>

    <p>Trois Américains ont récemment intenté un recours collectif contre la multinationale.
    Selon eux, Apple vendrait les données d’utilisateur iTunes à des entreprises.
    Ces données divulguées incluent les noms, l'adresse ainsi que l'historique
    d'achat iTunes des utilisateurs.</p>

    <h2>RGPD: face à face entre le régulateur de données irlandais et Facebook.</h2>

    <p>La commission irlandaise de protection des données a annoncé l'ouverture de 19 enquêtes
    statutaires(ça mériterait une ligne de plus pour expliquer ce terme),dont 11 sur Facebook,
    WhatsApp et Instagram depuis l'entrée en vigueur dans l’Union européenne il y a un an,
    du Règlement Général
    sur la Protection des Données.</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Articles