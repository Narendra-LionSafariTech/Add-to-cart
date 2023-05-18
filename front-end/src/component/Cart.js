import React, { useEffect, useState,useContext } from 'react'
import { Cart } from '../Context'
import SingleProduct from './SingleProduct'

const CartPage = () => {
const [total,setTotal]=useState()
const {cart}=useContext(Cart)


    useEffect(()=>{
        setTotal(cart.reduce((accum,currVal)=>accum+(currVal.price),0))
    },[cart])
  return (
    <div>
      <span style={{fontSize:30}}> My Cart</span><br/>
      <span style={{fontSize:30}}> Total :RS. {total}</span>
      <div className='productContainer'>
        {cart.map((prodItem)=>(
            <SingleProduct prodItem={prodItem} key={prodItem.id} 
            // cart={cart} setCart={setCart} 
            />
        ))}

      </div>
    </div>
  )
}

export default CartPage
