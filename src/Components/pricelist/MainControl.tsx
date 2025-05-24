import './components.css';
import PriceTable from './PriceTable';
export default function MainControl() {
  return (
    <div style={{width:'100%'}}>
    <div className='main-control-wrapper'>
   <div className='main-item'><div className="search-input-container">
    <input 
        type="text" 
        className="search-input" 
        placeholder="Search Article No"
    />
    <span className="search-icon">🔍</span>
    </div>
<div className="search-input-container">
    <input 
        type="text" 
        className="search-input" 
        placeholder="Search Product"
    />
    <span className="search-icon">🔍</span>
</div></div>
   <div className='main-item-menu-buttons'>
   <button className="new-product-btn">
    
    New Products
    <span className="icon">➕</span>
</button>

<button className="print-list-btn">
    
    Print List
    <span className="icon">🖨️</span>
    </button>

<button className="advanced-mode-btn">
    
    Advanced Mode
    <span className="icon">⚙️</span>
</button>


   </div>
   

     
    </div>
    <PriceTable/>
    </div>
  )
}
