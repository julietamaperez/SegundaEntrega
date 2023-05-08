import './ItemDetail.css'


const ItemDetail = ({id,nombre, precio,img}) => {
  return (
    <div className='contenedorItem'>
        <h3>{id}</h3>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3> 
        <p>Colabora de forma significativa con el fortalecimiento del sistema inmunológico. La suplementación con hierro es una de las principales opciones. El mineral es importante para la acción preventiva contra las anemias junto con el ácido fólico también presente, y en estados que pueden comprometer la salud y energía para la realización de las actividades diarias.</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail