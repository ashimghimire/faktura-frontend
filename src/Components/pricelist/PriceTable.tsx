import { useEffect, useState } from 'react';
import './PriceTable.css';

const PriceTable = () => {
  const [prices,setPrices]=useState([]);
  const priceModel:any=[...prices];
  useEffect(()=>{

    const fetchPrices= async ()=>{
      const response= await fetch('https://faktur-backend.onrender.com/pricelist?limit=10&offset=1',{method:'GET'});
      const result= await response.json();
      setPrices(result.data);
    }

    fetchPrices();

  },[]);
  const updatePrice= async (priceList:any)=>{
    const response= await fetch('https://faktur-backend.onrender.com/save',{method:'POST', body:JSON.stringify(priceList)});
    const result= await response.json();
    setPrices(result);
    // console.log(result);
  }
  function updateToDatabase(): void {
    updatePrice(priceModel);
    console.log(priceModel);
  }
  // @ts-ignore
  const handleInput=(event,field,index)=>{
    // console.log(event.target.innerText);
    priceModel[index][field]=event.target.innerText;
    
  }
  
  
  return (
    <div className="price-table-container">
      <button onClick={()=>updateToDatabase()}>Save</button>
      <table className="price-table">
        <thead>
          <tr>
            <th></th> {/* Empty cell for the arrow column */}
            <th className='article'>Article No. <span className="sort-icon">↓</span></th>
            <th className='product'>Product/Service <span className="sort-icon">↓</span></th>
           
            <th className='price'>Price</th>
            <th className='unit'>Unit</th>
            
            <th className='description'>Description</th>
            <th></th> {/* Empty cell for the ellipsis */}
          </tr>
        </thead>
        <tbody>
          {prices.map((item:any,index)=>{
            
            
            return (<tr key={index} className="price-table-row">
              <td className="arrow-cell">→</td>
              <td className='article'><div className="table-cell-content" suppressContentEditableWarning={true} onInput={(e)=>handleInput(e,'articleNo',index)} contentEditable={true}>{item?.articleNo}</div></td>
              <td className='product'><div className="table-cell-content product" suppressContentEditableWarning={true} onInput={(e)=>handleInput(e,'product',index)} contentEditable={true}>{item?.product}</div></td>
              <td className='price'><div className="table-cell-content price" suppressContentEditableWarning={true} onInput={(e)=>handleInput(e,'price',index)} contentEditable={true}>{item?.price}</div></td>
              <td className='unit'><div className="table-cell-content unit" suppressContentEditableWarning={true} onInput={(e)=>handleInput(e,'unit',index)} contentEditable={true}>{item?.unit}</div></td>
              <td className='description'><div className="table-cell-content description" suppressContentEditableWarning={true}  onInput={(e)=>handleInput(e,'description',index)} contentEditable={true}>{item.description}</div></td>
              <td className="ellipsis-cell">...</td>
            </tr>)
          })}
          {/* Add more rows here as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable; 