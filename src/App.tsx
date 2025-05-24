import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import './i18n'
import './App.css'
import './Components/Navigation/term.condn.css'
import Landing from './page/landing/Landing'
import PriceList from './page/pricelist/PriceList'


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/pricelist' element={<PriceList/>}></Route>
        </Routes>
    
    </Router>
  )
}

export default App
