function retornoItem(pelicula) {
    return `<div class="peliculas__item" id="pelicula${pelicula.id}">
                <div class="peliculas__item--img">
                    <img src="${pelicula.imagen}" alt="Poster de ${pelicula.nombre}">
                </div>
                <h1 class="peliculas__item--titulo">${pelicula.nombre}</h1>
                <h2 class="peliculas__item--anio">${pelicula.anio}</h2>
                <p>${pelicula.descripcion}</p>
                <div class="peliculas__item--reparto">
                    <p>${pelicula.reparto}</p>
                </div>
                <button class="peliculas__item--boton" id="${pelicula.id}">
                 Reservar</button>
            </div>` 
}     

//<button id="reservaPeli${pelicula.id}" class="peliculas__item--boton">

function armarCarrito(peli) {
    return `<div class="carrito__reserva">
                <div class="carrito__reserva--img">
                    <img src="${peli.imagen}" alt="Poster de ${peli.nombre}">
                </div>
    
                <h3>${peli.nombre}</h3>
            </div>`
}


function recuperarCarrito() {
    
    let carritoHTML = ""
    const miReserva = document.getElementById("miReserva")
    const carrito = JSON.parse(localStorage.getItem("miCarrito"))
    if (carrito.length > 0) {
        carrito.forEach(peli => {
            carritoHTML += armarCarrito(peli)
        });
        miReserva.innerHTML = carritoHTML
    }
    
}