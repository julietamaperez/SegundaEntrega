const products = [ 
    {id: "1", nombre: "Castañas de Cajú", precio: 500, id:1, img: "../img/castañas.png", idCat:"2"},
    {id: "2", nombre: "Dulce de leche - vegano", precio: 700, id:2, img: "../img/dulce-de-leche-felices-lasvacas.png", idCat:"2"},
    {id: "3", nombre: "Nugget de pollo", precio: 620, id:3, img: "../img/nuggets-pollo-feliceslasvacas.png", idCat:"3"},
    {id: "4", nombre: "Yogurt Quimya", precio: 250, id:4, img: "../img/quimya.png", idCat:"2"},
    {id: "5", nombre: "Almedras", precio: 500, id:5, img: "../img/almendras-a granel.png", idCat:"2"},
    {id: "6", nombre: "Miel-Beepure", precio: 700, id:6, img: "../img/beepure-miel.png", idCat:"3"},
    {id: "7", nombre: "Flakes s/azúcar", precio: 100, id:7, img: "../img/flakes sin azucar.png", idCat:"3"},
    {id: "8", nombre: "Kéfir", precio: 420, id:8, img: "../img/quekefir.png", idCat:"2"},
    {id: "9", nombre: "Quinoa Blanca", precio: 220, id:9, img: "../img/quinoa-organica-blanca.png", idCat:"3"},
    {id: "10", nombre: "Mermeladas-Trini", precio: 480, id:10, img: "../img/trini-mermeladas.png", idCat:"3"},
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout ( () => {
            const producto = products.find( prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductoPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout ( ()=> {
            const productosCategoria = products.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        },100)
    })
}