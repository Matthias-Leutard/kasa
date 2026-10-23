
import { useState } from 'react'
import './Collapse.scss'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className={`collapse ${isOpen ? 'open' : ''}`}>
      <button
        className="collapse-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className="collapse-arrow">⌃</span>
      </button>

      {isOpen && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </section>
  )
}

export default Collapse