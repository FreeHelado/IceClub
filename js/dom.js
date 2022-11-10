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

// APAGAR TELE
const apagarVhsButton = document.querySelector("#vhs")
const body = document.body
const logo = document.querySelector("#logo")

apagarVhsButton.addEventListener("click", apagarVhs)

function apagarVhs() {
    
    if (body.classList.contains("monitor")){
        body.classList.remove("monitor")
        body.classList.add("body-2000")
        logo.src = "./assets/img/logo-3d.png"
        apagarVhsButton.innerText = "Volver a VHS"
    } else {
        apagarVhsButton.innerText = "Cambiar a Blue Ray"
        body.classList.add("monitor")
        body.classList.remove("body-2000")
        logo.src = "./assets/img/logo.svg"
    }
    

    
} 
