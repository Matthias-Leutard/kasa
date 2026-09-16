import logements from '../data/logements.json'
import Card from './Card'
import './CardList.scss'

function CardList() {
  return (
    <ul className="card-list">
      {logements.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </ul>
  )
}

export default CardList