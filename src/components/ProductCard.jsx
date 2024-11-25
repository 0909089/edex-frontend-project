import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProductCard({id, productTitle, productAvatar, route}) {

  const navigate = useNavigate();

  return <div className='text-center' onClick={()=> navigate(route + id)}>
      
      <img src={productAvatar} alt="" className="img-fluid" width={78}/>
      <h5 className='h6 my-3' >{productTitle}</h5>
    </div>;
}

export default ProductCard