import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const ImagenCarrito = "https://cdn-icons-png.flaticon.com/512/1058/1058965.png"
  return (
    <div>
<img className='ImagenCarrito' src= {ImagenCarrito} alt="carrito" />
    <strong>4</strong>
    </div>
  )
}

export default CartWidget