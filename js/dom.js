const carrito = []
//// CARGA DEL LISTADO DE PELICULAS
const container = document.getElementById("container")
const cantidadCarrito = document.getElementById("cantidadCarrito")

let botonesBorrar = document.querySelectorAll("button.carrito__reserva--borrar")

//// CARGA DE LISTADO MEDIANTE AJAX
const URL = 'bbdd/peliculas.json'
const peliculas = []

fetch(URL)
.then((response)=> data = response.json())
.then((data) => peliculas.push(...data))
.then(() => cargarPeliculas(peliculas))
.then(()=> activarClickBotones())
// .catch(error => container.innerHTML = retornoError())

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
/// activar buttones de Add y borrar
// const botonesAdd = document.querySelectorAll("button.peliculas__item--boton")
// const botonesBorrar = document.querySelectorAll("button.carrito__reserva--borrar")

//// sumar total 
//// PRECIOS //// 
const ENVIO = parseFloat (10)
let precio = parseFloat (120)
let precioEstreno = parseFloat (200)
let precioSocio = precio * 0.50

const totalCarrito = document.querySelector("#totalCarrito")
const subTotalCarrito = document.querySelector("#subTotalCarrito")
const costoEnvio = document.querySelector("#costoEnvio")
costoEnvio.innerText = `$ ${ENVIO}`

function calcularTotal(cantidadReserva) {
    let total = (precio * cantidadReserva) + ENVIO
    let subTotal = total - ENVIO
    totalCarrito.innerText = `$ ${total}`
    subTotalCarrito.innerText = `$ ${subTotal}`
}


function recuperarCarrito() {
    let carritoHTML = ""
    const miReserva = document.getElementById("miReserva")
    const carrito = JSON.parse(localStorage.getItem("miCarrito"))
    if (carrito.length > 0) {
        carrito.forEach(peli => {
            carritoHTML += armarCarrito(peli)
            calcularTotal(carrito.length)
        });
        miReserva.innerHTML = carritoHTML
        let totalProductosCarrito = carrito.length
        cantidadCarrito.innerText = `${totalProductosCarrito}`
        actualizarBotonesBorrar()
    }
}
recuperarCarrito()

function activarClickBotones() {
    const botonesAdd = document.querySelectorAll("button.peliculas__item--boton")
    botonesAdd.forEach(boton => {
        boton.addEventListener("click", ()=> {
            let resultado = peliculas.find(peli => peli.id === parseInt(boton.id))
            let existe = carrito.some((peli) => peli.id === parseInt(boton.id))
            if (existe) {
                alertaValidacion("😪 Ya se encuentra en tu reserva")
            } else {
                carrito.push(resultado)
                localStorage.setItem("miCarrito", JSON.stringify(carrito))
                mostrarCantidad()
                alertaValidacion("🍿 Se agregó a la reserva")
                recuperarCarrito()
                calcularTotal(carrito.length)
            }  
        })
    })
}
activarClickBotones()


/// BORRAR ITEMS
function actualizarBotonesBorrar() {
    botonesBorrar = document.querySelectorAll("button.carrito__reserva--borrar")
    botonesBorrar.forEach(boton => {
        boton.addEventListener("click", activarClickBorrar)
    })
}

function activarClickBorrar() {
    const botonesBorrar = document.querySelectorAll("button.carrito__reserva--borrar")
    botonesBorrar.forEach(boton => {
        boton.addEventListener("click", ()=> {
            let pos = carrito.findIndex(peli => peli.id === parseInt(boton.id))
            if (pos > -1) {
                carrito.splice(pos, 1)
                localStorage.setItem("miCarrito", JSON.stringify(carrito))
                alertaValidacion("✌ Se Eliminó la pelicula de tu reserva")
                recuperarCarrito()
                activarClickBorrar()
                mostrarCantidad()
                calcularTotal(carrito.length)
            }
        })
    })
}
activarClickBorrar()




//// CARGAR CARRITO LOCAL STORAGE
const peliculasEnCarrito = JSON.parse(localStorage.getItem("miCarrito"))

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

const buscadorPeli = document.querySelector("#buscadorPeli")
buscadorPeli.addEventListener("click", filtrarPeliculasInput)

const filtrarPorActor = document.querySelector("#filtrarPorActor")
filtrarPorActor.addEventListener("click", filtrarActores)

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





