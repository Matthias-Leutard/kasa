import { Link } from 'react-router-dom'
import './Card.scss'

function Card({ logement }) {
  return (
    <li className="card">
      <Link to={`/logement/${logement.id}`}>
        <img src={logement.cover} alt={logement.title} />
        <h2>{logement.title}</h2>
      </Link>
    </li>
  )
}

export default Card