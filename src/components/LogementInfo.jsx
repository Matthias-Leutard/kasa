import './LogementInfo.scss'
import Rating from './Rating'

function LogementInfo({ title, location, tags, host, rating }) {
  return (
    <div className="logement-info">
      <div>
        <h1>{title}</h1>
        <p>{location}</p>

        <div className="tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="host">
        <div className="host-info">
          <p>{host.name.split(' ')[0]}</p>
          <p>{host.name.split(' ').slice(1).join(' ')}</p>
        </div>

        <img src={host.picture} alt={host.name} />

        <Rating rating={rating} />
      </div>
    </div>
  )
}

export default LogementInfo