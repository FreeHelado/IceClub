//// CARGA DEL LISTADO DE PELICULAS
const container = document.getElementById("container")

function cargarPeliculas(array) {
    let contenido = ""
        if (array.length > 0) {
            array.forEach(pelicula => {
                contenido += retornoItem(pelicula)
            })
            container.innerHTML = contenido
        }
}
cargarPeliculas(peliculas)

//// FILTRO CON INPUT 
const inputSearch = document.querySelector("input#inputSearch")


