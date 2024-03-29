import React, { createContext, useState } from 'react'

export const Cart=createContext()

function Context({children}) {
    const [cart,setCart]=useState([])

    // define any function/state here 
  return (
    <Cart.Provider value={{cart,setCart}}>
      {children}
    </Cart.Provider>
  )
}

export default Context
