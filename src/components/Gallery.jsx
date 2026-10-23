import { useState } from 'react'
import './Gallery.scss'

function Gallery({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  function previousImage() {
    setCurrentIndex(
      currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
    )
  }

  function nextImage() {
    setCurrentIndex(
      currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
    )
  }

  return (
    <div className="gallery">
      <img src={pictures[currentIndex]} alt={title} />

      {pictures.length > 1 && (
        <>
          <button onClick={previousImage}>‹</button>
          <button onClick={nextImage}>›</button>

          <p className="gallery-counter">
            {currentIndex + 1}/{pictures.length}
          </p>
        </>
      )}
    </div>
  )
}

export default Gallery