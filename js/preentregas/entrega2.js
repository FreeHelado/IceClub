// INGRESO DE USUARIO Y VALIDACION DE SOCIO

function esSocio() {
    let socio = true
        while (socio) {
            let usuario = prompt("BIENVENID@S A ICECLUB 🍦 | Ingresa tu Nombre")
            let pass = prompt( "Hola " + usuario + ", Ingresa tu número de socio 🍿")
                if (usuario !== null && pass !== null && pass === "666") {
                    console.log("Socio n° " + pass)
                    console.log("Nombre " + usuario)
                    let nombrePeli = prompt("🎬 Ingresa el nombre de la Película que quieres reservar: ")
                    let cantDias = prompt("🗓 Ingresa por cuantos días la quieres: ")
                        
                        if (peliDisponible === true) {
                            let totalSocio = precioSocio * cantDias + ENVIO
                            console.log("🍿 Listo! 🍿 Reservaste " + nombrePeli)
                            console.log("🤑 Valor de tu reserva: $" + totalSocio)
                            console.log("Socio: " + usuario + " N°: " + pass)
                        } else {
                            console.warn("😌Nuuuu, perdón " + nombrePeli + " no se encuentra disponible ahora")
                        }
                    socio = false
                    } else {
                        console.warn("No se reconoce tu número de socio 💀")
                    }
        }
}

function noEsSocio() {
    let nombrePeli = prompt("No importa, igual podés reservar - Ingresa el nombre de la Película que quieres reservar 🎬: ")
        let cantDias = prompt("🗓 Ingresa por cuantos días la quieres: ")
        let usuario = prompt("🍦 Ingresa tu Nombre para la reserva")
                        
            if (peliDisponible === true) {
                let totalCliente = precio * cantDias + ENVIO
                console.log("🍿 Listo! 🍿 Reservaste " + nombrePeli)
                console.log("🤑 Valor de tu reserva: $" + totalCliente)
                console.log("Nombre: " + usuario)
            } else {
                console.warn("😌Nuuuu, perdón " + nombrePeli + " no se encuentra disponible ahora")
            }
}

function reservar() {
    
    console.log("BIENVENID@S A ICECLUB 🍦")
    let consultaSocio = confirm("BIENVENID@S A ICECLUB 🍦 - Confirma si eres socio del club")

    if (consultaSocio === true) {
        esSocio()
    } else {
        noEsSocio()
    }

    console.log("Gracias por ser parte de ICECLUB 🖤")
}


// BUSCADOR DE SOCIO
function buscarSocio() {
    console.log("BIENVENID@S A ICECLUB 🍦")
    let nroSocio = parseInt(prompt("BIENVENID@S A ICECLUB 🍦 | Ingresa tu número de socio 🍿"))
    let index = socios.findIndex((socio) => socio.numeroDeSocio === nroSocio)
        if (index > -1) {
            console.table(socios[index])
        } else {
            console.warn("🙈 No se encontró el nro de Socio")
        }
}