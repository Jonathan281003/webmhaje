const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById ('carrito-contenedor')

const botonVaciar = document.getElementById ('vaciar-carrito')

const precioTotal = document.getElementById ('precioTotal')

let carrito = []

botonVaciar.addEventListener ('click' , () => { 

}) 
stockProductos.forEach((producto) =>{
    const div = document.createElement('div')
    div.classList.add('productos')
    div.innerHTML = `
    <img src=${producto.img} alt="">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>Talla ${producto.talla}</p>
    <p class="precioProducto"> Precio:${producto.precio} </p>
    <button id="agregar ${producto.id}" class="boton-agregar"> Agregar <i class="fas fa-shopping-cart"> </i></button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById('agregar ${producto.id}')

    boton.addEventListener('click', () => {
        agregarAlCarrito (producto.id)
    } )


})

const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find ((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find ((prod) => prod.id === prodId)
    const indice = carrito.indexOf (item)
    carrito.splice (indice, 1)
    actualizarCarrito()
}






const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""

    carrito.forEach ((prod) =>{
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:${prod.precio}</p>
        <p>Cantidad: <spam id="cantidad">${prod.cantidad}</spam></p>
        <button onclick = "eliminar del carrito(${prod.id})" class="boton-eliminar"> <i class="fas fa-trash-alt">></i></button>
        `
        contenedorCarrito.appendChild (div)
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce ((acc, prod) => acc + prod.precio,0)
} 