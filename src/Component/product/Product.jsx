import React from 'react'
import './product.css'

const Product = ({img,link,title}) => {
  return (
    <div className='p focus '> 
       <b>{title}</b> 
     <div className="p-browser">
        <div className="p-cicrle"></div>
        <div className="p-cicrle"></div>
        <div className="p-cicrle"></div>
     </div>
     
     <a href={link} target='_blank' rel="noreferrer">
        <img  src={img} alt='lavs' className='p-img'/>
     </a>
    </div>
  )
}

export default Product