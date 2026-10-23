
import Banner from './Banner'
import Collapse from './Collapse'
import './About.scss'

function About() {
  return (
    <main className="about-page">
      <Banner title={null} variant="about" />

      <div className="about-collapses">
        <Collapse title="Fiabilité">
          Les annonces proposées par Kasa sont vérifiées avec soin.
        </Collapse>

        <Collapse title="Respect">
          La bienveillance et le respect sont au cœur de l'expérience Kasa.
        </Collapse>

        <Collapse title="Service">
          Kasa accompagne ses utilisateurs pour leur offrir une expérience de qualité.
        </Collapse>

        <Collapse title="Sécurité">
          La sécurité de nos utilisateurs et de leurs logements est une priorité.
        </Collapse>
      </div>
    </main>
  )
}

export default About