import Navbar from './components/Navbar'
import Home from './components/Home'
import Categories from './components/Categories'
import TopSellers from './components/TopSellers'
import Ikea from './components/Ikea'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <Home />
        <Categories />
        <TopSellers />
        <Ikea />
      </div>
    </>
  )
}

export default App
