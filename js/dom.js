const carrito = []
//// CARGA DEL LISTADO DE PELICULAS
const container = document.getElementById("container")
const cantidadCarrito = document.getElementById("cantidadCarrito")


function mostrarCantidad() {
    let totalProductosCarrito = carrito.length
    cantidadCarrito.innerText = `${totalProductosCarrito}`
} 


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

///// AGREGAR AL CARRITO
/// activar button
const botonesAdd = document.querySelectorAll("button.peliculas__item--boton")

function activarClickBotones() {
    botonesAdd.forEach(boton => {
        boton.addEventListener("click", ()=> {
            let resultado = peliculas.find(peli => peli.id === parseInt(boton.id))
            carrito.push(resultado)
            console.clear()
            console.table(carrito)
            mostrarCantidad()      
        })
    })
}
activarClickBotones()


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
        apagarVhsButton.innerText = "Volver a VHS"
    } else {
        apagarVhsButton.innerText = "Arreglar Monitor"
        body.classList.add("monitor")
        body.classList.remove("body-2000")
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

const reservaPeliFull = document.querySelector("#reservaPeliFull")
reservaPeliFull.addEventListener("click", reservarFull)

const buscadorSocio = document.querySelector("#buscadorSocio")
buscadorSocio.addEventListener("click", buscarSocio)



/// CAPTURAR ENTER
// (e) objeto global Event
inputSearch.addEventListener("keypress", (e)=> {
    if (e.key === 'Enter' && inputSearch.value.trim() !== '') {
        filtrarPeliculasInput()
    } else {
        cargarPeliculas(peliculas)
    }
})

/// VOLVER A MOSTRAR LIMPIANDO LA BUSQUEDA
inputSearch.addEventListener("search", ()=>{
    if (inputSearch.value.trim() !== ""){
        filtrarPeliculasInput()
    }else{
        cargarPeliculas(peliculas)
    }
})

//// SIDEBAR CARRITO
const carritobtn = document.querySelector('.carrito--btn')
carritobtn.addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active');
})





