import React, { useEffect } from 'react'
import { useState } from 'react'


const ItemCount = () => {
    let inicial = 1;
    let maximo = 10;
    
    const [contador, setContador] = useState(inicial);
    const [color, setColor] = useState ("black");

    useEffect (() =>{
      console.log("Se ejecutó el useEffect!!");
      document.title = `Contador: ${contador}`
    
      if (contador > 5){
        setColor("red");
      }else {
        setColor("black");
      }
    }, [contador]);

    const incrementar = () => {
        if (contador < maximo){
        setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > inicial){
        setContador (contador - 1);    
        }
    
   
    }

    const AgregarAlCarrito = () => {
      console.log(`Agregado ${contador} items `)
    }

    
  return (
    <>       
        <button onClick={ incrementar }>+</button>
        <p>{contador}</p>
        <button onClick={decrementar}>-</button>
        <br /><br />
        <button onClick={AgregarAlCarrito} id="boton" style={{color: color}} >Agregar al carrito</button>
    </> 
    
   
  )
}



export default ItemCount