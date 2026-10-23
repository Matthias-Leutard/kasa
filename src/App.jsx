import Error404 from './components/Error404'
import logements from './data/logements.json'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'
import CardList from './components/CardList'
import Logement from './components/Logement'
import About from './components/About'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <CardList />
            </>
          }
        />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App