
import { useTranslation } from 'react-i18next'
import "./Navigation/term.condn.css";

const TermAndCondn = () => {
    const { t } = useTranslation()

    const handleGoBack = () => {
        // Try to close the current window
      
        window.location.href = "about:blank";

       
    }

    return (
        <div>
            <div className='wrapper-term-condn'>
                <h1>{t('home.term')}</h1>
                <button 
                    onClick={handleGoBack}
                    className="back-button"
                >
                    {t('home.closeAndGoBack')}
                </button>
                
                <div 
                    className="terms-content"
                    dangerouslySetInnerHTML={{ __html: t('home.term-and-conditions') }}
                />
                <button 
                    onClick={handleGoBack}
                    className="back-button"
                    style={{marginBottom:'2em'}}
                >
                    {t('home.closeAndGoBack')}
                </button>
            </div>
        </div>
    )
}

export default TermAndCondn