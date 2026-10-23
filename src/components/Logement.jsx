import { useParams } from 'react-router-dom'
import logements from '../data/logements.json'
import Gallery from './Gallery'
import LogementInfo from './LogementInfo'
import Collapse from './Collapse'
import './Logement.scss'
import Error404 from './Error404'

function Logement() {
  const { id } = useParams()

  const logement = logements.find((logement) => logement.id === id)
  if (!logement) {
    return <Error404 />
  }

  return (
    <div className="logement-page">
      <Gallery pictures={logement.pictures} title={logement.title} />

      <LogementInfo
        title={logement.title}
        location={logement.location}
        tags={logement.tags}
        host={logement.host}
        rating={logement.rating}
      />

      <div className="logement-collapse">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  )
}

export default Logement