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


function armarCarrito(peli) {
    return `<div class="carrito__reserva">
                <div class="carrito__reserva--img">
                    <img src="${peli.imagen}" alt="Poster de ${peli.nombre}">
                </div>
    
                <h3>${peli.nombre}</h3>
                <button class="carrito__reserva--borrar" id="${peli.id}">
                    <i class="bi bi-trash3"></i>
                </button>
            </div>`   
}

function retornoError() {
    return `<div class="card-error">
                <h2>Houston, tenemos un problema 🔌</h2>
                <h3>No pudimos cargar los productos. 🤦🏻‍♂️</h3>
                <h3>Intenta nuevamente en unos instantes...</h3>
            </div>`
}


