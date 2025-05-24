import { useEffect } from 'react'
import Navigation from '../../Components/pricelist/Navigation'
import SideNav from '../../Components/pricelist/SideNav'
import MainControl from '../../Components/pricelist/MainControl'
export default function PriceList() {
  useEffect(()=>{

  },[])
  return (
    <div>
      <Navigation/>
      <div className='main-container'>
        <SideNav/>
        <MainControl/>
      </div>
      
    </div>
  )
}
