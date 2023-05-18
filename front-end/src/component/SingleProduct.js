import React,{useContext } from 'react'
import { Cart } from '../Context'

const SingleProduct = ({ prodItem }) => {
    const {cart,setCart}=useContext(Cart)
//    console.log(prodItem)
    return (
        <div className='products'>
            <img src={prodItem.image} alt={prodItem.name} />
            <div className='productDesc'>
                <span style={{ fontWeight: 700 }}>{prodItem.name}</span>
                <span> RS.{prodItem.price}</span>

            </div>
            {cart.includes(prodItem)  ? <button className='add' onClick={() => {
                // console.log(prodItem.id)

                setCart(cart.filter(c=>c.id!==prodItem.id))
            }}> Remove from Cart</button> :  <button className='add' onClick={() => {
                setCart([...cart, prodItem])
            }}> Add to Cart</button>}
           

           {/* {console.log(cart)} */}

        </div>
    )
}

export default SingleProduct
