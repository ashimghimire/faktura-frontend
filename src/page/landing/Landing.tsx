
import './Landing.css';
import TermAndCondn from '../../Components/TermAndCondn';
import Navigation from '../../Components/Navigation/Navigation';
const Landing = () => {
  return (
    <div>
        <div className="wrapper">
        <div className='scrollable'>
        <Navigation /><TermAndCondn/>
        </div></div></div>
  )
}

export default Landing;