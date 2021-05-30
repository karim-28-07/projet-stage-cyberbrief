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
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Articles