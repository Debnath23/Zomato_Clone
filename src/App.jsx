import Home from './pages/Home'
import ProductsList from './pages/ProductsList'
import DiningOut from './pages/DiningOut'
import NightLife from './pages/NightLife'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/productlist' element={<ProductsList/>} />
      <Route path='/productlist/diningout' element={<DiningOut/>} />
      <Route path='/productlist/nightlife' element={<NightLife/>} />
    </Routes>
    </>
  )
}

export default App
