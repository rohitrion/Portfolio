import React from 'react'
import './ProductList.css'
import Product from '../product/Product'
import { Productsdata } from '../../Data/data'
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. My Projects</h1>
        <p className="pl-desc">
        Passionate web developer specializing in creating elegant and functional websites that leave a lasting impression.
        </p>
      </div>
      <div className="pl-list">
        {
          Productsdata.map((item) => (
          
            <Product key={item.id} img={item.img} link={item.link} title={item.title} />
          ))
        }



      </div>
    </div>
  )
}

export default ProductList