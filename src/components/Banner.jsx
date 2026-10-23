import './Banner.scss'

function Banner({ title = 'Chez vous, partout et ailleurs', variant = 'home' }) {
  return (
    <section className={`banner banner--${variant}`}>
      {title && <h1>{title}</h1>}
    </section>
  )
}

export default Banner