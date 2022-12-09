
//// FILTRAR POR NOMBRE
function filtrarPeliculas() {
    let peli = prompt("Ingresa parte del nombre:").toUpperCase()
    let encontrados = peliculas.filter((pelicula) => pelicula.nombre.includes(peli)) 
    
        if (encontrados.length > 0) {
            cargarPeliculas(encontrados)
        } else {
            alert("⚠ No se encontraron peliculas coincidentes")
        }
}


//// FILTRAR POR ACTOR
function filtrarActores() {
    let actor = prompt("Ingresa parte del nombre del actor:").toUpperCase()
    let encontrados = peliculas.filter((pelicula) => pelicula.reparto.includes(actor)) 
    
        if (encontrados.length > 0) {
            cargarPeliculas(encontrados)
        } else {
            alert("⚠ No se encontraron peliculas coincidentes")
        }
}

//// FILTRO CON INPUT 
function filtrarPeliculasInput() {
    if (inputSearch.value.trim() !== "") {
        let resultado = peliculas.filter(pelicula => pelicula.nombre.includes(inputSearch.value.trim().toUpperCase()))
            if (resultado.length > 0) {
                cargarPeliculas(resultado)
            }
    }
}

//// ORDENAR POR AÑO
function ordenarPorAnio() {
    let peliculasOrdenadas = peliculas.sort((a, b) => {
        if (a.anio > b.anio) {
            return 1
        } 
        if (a.anio < b.anio) {
            return -1
        }
        return 0
    })
    cargarPeliculas(peliculas)
}

