//// FILTRAR POR NOMBRE
function filtrarPeliculas() {
    let peli = prompt("Ingresa parte del nombre:").toUpperCase()
    let encontrados = peliculas.filter((pelicula) => pelicula.nombre.includes(peli)) 
    
        if (encontrados.length > 0) {
            console.table(encontrados)
        } else {
            alert("⚠ No se encontraron peliculas coincidentes")
        }
}

//// FILTRAR POR ACTOR
function filtrarActores() {
    let actor = prompt("Ingresa parte del nombre del actor:").toUpperCase()
    let encontrados = peliculas.filter((pelicula) => pelicula.reparto.includes(actor)) 
    
        if (encontrados.length > 0) {
            console.table(encontrados)
        } else {
            alert("⚠ No se encontraron peliculas coincidentes")
        }
}

//// BUSCAR POR ACTOR AÑO O NOMBRE
function filtroFull() {
    let buscar = prompt("Buscar por Nombre, Año o Actor:").toUpperCase()
    let encontrados = peliculas.filter((pelicula) => {
        if ((pelicula.reparto.includes(buscar)) || (pelicula.anio.includes(buscar)) || (pelicula.nombre.includes(buscar))) {
            console.table(encontrados)
        } else {
            alert("⚠ No se encontraron peliculas coincidentes")
        }
    }) 
        
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
    console.table(peliculasOrdenadas)
}