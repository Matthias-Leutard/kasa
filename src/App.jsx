import logements from './data/logements.json'
import Header from './components/Header'
import Banner from './components/Banner'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Banner />

      <Routes>
        <Route path="/" element={<h2>{logements[0].title}</h2>} />
      </Routes>
    </>
  )
}

export default App