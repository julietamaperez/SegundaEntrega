
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductosPorCategoria } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [products, setProducts] = useState ([])

  const {idCategoria} = useParams();

  useEffect (() =>{

    const funcionProductos = idCategoria ? getProductosPorCategoria : getProducts;

    funcionProductos(idCategoria)
    .then(res => setProducts (res))
    .catch(error => console.error (error))
  },[idCategoria])


  return (
    <>
      <h2 style={{textAlign:"center"}}> Productos</h2>
      <ItemList products={products}/>
    </>
  )
}

export default ItemListContainer