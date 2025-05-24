import './navigation.css';
import hignFlag from '../../assets/images/GB.png';
export default function Navigation() {
  return (
    <div className='main-nav'>
    <div className='userinfo-container'>
    <div className='user-avater'>
        <img src={`https://avatar.iran.liara.run/public`} alt='user'/>
        <div className='active'></div>
    </div>
    </div>
    <div className='country-container'>
        <p>Norman Hing</p>
        <img src={hignFlag} className='flag' alt='hing flag'/>
    </div>
    </div>
  )
}
