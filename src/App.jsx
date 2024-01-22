import Home from './pages/Home'
import Delivery from './pages/Delivery'
import DiningOut from './pages/DiningOut'
import NightLife from './pages/NightLife'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/delivery' element={<Delivery/>} />
      <Route path='/diningout' element={<DiningOut/>} />
      <Route path='/nightlife' element={<NightLife/>} />
    </Routes>
    </>
  )
}

export default App
