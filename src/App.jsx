import Home from './pages/Home'
import ProductsList from './pages/ProductsList'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/productlist' element={<ProductsList title="Kolkata"/>} />
    </Routes>
    </>
  )
}

export default App
