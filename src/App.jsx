import logements from './data/logements.json'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'
import CardList from './components/CardList'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Banner />

      <Routes>
        <Route path="/" element={<CardList />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App