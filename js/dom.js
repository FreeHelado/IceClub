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

// EVENTO PARA CAMBIAR FONDO COLOR, ETC-
const apagarVhsButton = document.querySelector("#vhs")
const body = document.body
const logo = document.querySelector("#logo")

apagarVhsButton.addEventListener("click", apagarVhs)

function apagarVhs() {
    
    if (body.classList.contains("monitor")){
        body.classList.remove("monitor")
        body.classList.add("body-2000")
        logo.src = "./assets/img/logo-3d.png"
        apagarVhsButton.innerText = "Modo VHS"
    } else {
        apagarVhsButton.innerText = "Modo Blu-Ray"
        body.classList.add("monitor")
        body.classList.remove("body-2000")
        logo.src = "./assets/img/logo.svg"
    }   
} 


// EVENTOS PARA LLAMAR FUNCIONES INICIALES
const ordenar = document.querySelector("#ordenar")
ordenar.addEventListener("click", ordenarPorAnio)

const filtrarPorNombre = document.querySelector("#filtrarPorNombre")
filtrarPorNombre.addEventListener("click", filtrarPeliculas)

const filtrarPorActor = document.querySelector("#filtrarPorActor")
filtrarPorActor.addEventListener("click", filtrarActores)

const buscadorPeli = document.querySelector("#buscadorPeli")
buscadorPeli.addEventListener("click", filtrarPeliculasInput)

const reservaPeli = document.querySelector("#reservaPeli")
reservaPeli.addEventListener("click", reservar)

const buscadorSocio = document.querySelector("#buscadorSocio")
buscadorSocio.addEventListener("click", buscarSocio)





