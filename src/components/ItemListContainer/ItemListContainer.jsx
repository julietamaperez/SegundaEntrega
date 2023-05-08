
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductoPorCategoria } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [products, setProducts] = useState ([])

  const {idCategoria} = useParams();

  useEffect (() =>{

    const funcionProductos = idCategoria ? getProductoPorCategoria : getProducts;

    funcionProductos(idCategoria)
    .then(response => setProducts (response))
    .catch(error => console.error (error))
  },[idCategoria])


  return (
    <div>
      <h2 style={{textAlign:"center"}}> Productos</h2>
      <ItemList products={products}/>
</div>
  )
}

export default ItemListContainer