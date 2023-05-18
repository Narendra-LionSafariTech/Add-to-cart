import React from 'react'
import productArray from '../assest/productArray'
import SingleProduct from './SingleProduct'
import "./style.css"

const Home = () => {
    
    console.log(productArray)
    // console.log(cart)
  return (
    <div className='productContainer'>
      {productArray.map(prodItem=>(
        <SingleProduct prodItem={prodItem} key={prodItem.id}
        //  cart={cart} setCart={setCart} 
         />
      ))}
    </div>
  )
}

export default Home
