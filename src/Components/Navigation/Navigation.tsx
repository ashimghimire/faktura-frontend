import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navigation.css';
import logo from '../../assets/images/diamond.png';
import enflag from '../../assets/images/GB.png';
import esflag from '../../assets/images/SE.png';
import { useRef, useEffect, useState } from 'react';
// import "animate.css";

const Navigation = () => {
  const { t, i18n, ready } = useTranslation();
  const langref = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    if(ready){
        setCurrentLanguage(lng);
    }
    if (langref.current) {
      langref.current.style.display = 'none';
    }
  };

  const handleDropdownChange = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (langref.current) {
      langref.current.style.display = langref.current.style.display === 'none' ? 'flex' : 'none';
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Handle language dropdown
      if (langref.current && !langref.current.contains(event.target as Node)) {
        langref.current.style.display = 'none';
      }
      
      // Handle mobile menu
      if (menuRef.current && 
          !menuRef.current.contains(event.target as Node) && 
          !(event.target as Element).closest('.nav-hamberger')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="nav-logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <div className="nav-hamberger" onClick={toggleMenu}>
          <svg 
            stroke="currentColor" 
            fill="currentColor" 
            strokeWidth="0" 
            viewBox="0 0 24 24" 
            className="navigation-svg" 
            height="1em" 
            width="1em" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        </div>
        <div className="nav-links">
          <Link to="https://www.123fakturera.se/index.html" className="nav-item-desktop">{t('nav.home')}</Link>
          <Link to="https://www.123fakturera.se/bestall.html" className="nav-item-desktop">{t('nav.order')}</Link>  
          <Link to="https://www.123fakturera.se/kunder.html" className="nav-item-desktop">{t('nav.ourCustomers')}</Link> 
          <Link to="https://www.123fakturera.se/omoss.html" className="nav-item-desktop">{t('nav.about')}</Link>
          <Link to="https://www.123fakturera.se/kontaktaoss.html" className="nav-item-desktop">{t('nav.contactUs')}</Link> 
         
          <a className='nav-language-dropdown' onClick={handleDropdownChange}>
            {currentLanguage=='en' && <><p>English</p>
              <img src={enflag} className='flag' alt='english language'/></>}
            {currentLanguage=='es' && <><p>Svenska</p>
              <img src={esflag} className='flag' alt='svenska language'/></>}
         </a>
        
          <div className='nav-dropdown' ref={langref} style={{ display: 'none' }}>
            <a onClick={() => changeLanguage('en')} style={{ justifyContent:"end"}}>
              {t('nav.english')} <img src={enflag} className='flag-d' alt='english language'/>
            </a>
            <a onClick={() => changeLanguage('es')} style={{ justifyContent:"end"}}>
              {t('nav.spanish')} <img src={esflag} className='flag-d' alt='english language'/>
            </a>
          </div>
        </div>
       
      </div>
      <div className={`mobile-menu  ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
        <Link to="https://www.123fakturera.se/index.html">{t('nav.home')}</Link>
        <Link to="https://www.123fakturera.se/bestall.html">{t('nav.order')}</Link>
        <Link to="https://www.123fakturera.se/kunder.html">{t('nav.ourCustomers')}</Link>
        <Link to="https://www.123fakturera.se/omoss.html">{t('nav.about')}</Link>
        <Link to="https://www.123fakturera.se/kontaktaoss.html">{t('nav.contactUs')}</Link>
      </div>
    </nav>
  );
};

export default Navigation;