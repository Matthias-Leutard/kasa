import './Rating.scss'

function Rating({ rating }) {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? 'active' : ''}>
          ★
        </span>
      ))}
    </div>
  )
}

export default Rating