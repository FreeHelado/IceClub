const container = document.getElementById("container")

function cargarPeliculas(array) {
    let contenido = ""
        if (array.length > 0) {
            array.forEach(pelicula => {
                contenido += retornoCard(pelicula)
            })
            container.innerHTML = contenido
        }
}
cargarPeliculas(peliculas)
