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
                <a href="#" id="reservaPeli">Reservar</a>
                <button class="peliculas__item--boton" id="${pelicula.id}">
                 Reservar</button>
            </div>` 
}     

//<button id="reservaPeli${pelicula.id}" class="peliculas__item--boton">

function armarCarrito(pelicula) {
    return `<div class="carrito__reserva">
                <div class="carrito__reserva--img">
                    <img src="${pelicula.imagen}" alt="Poster de ${pelicula.nombre}">
                </div>
    
                <h3>${pelicula.nombre}</h3>
            </div>`
}