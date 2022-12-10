const desde = document.querySelector("#fechallegada")
const hasta = document.querySelector("#fechasalida")
const btnCalcular = document.querySelector("button[type='submit']")

llegada.addEventListener("change", ()=> hasta.min = desde.value)

const calcularDias = ()=> {
    const DT = luxon.DateTime
    let inicial = DT.fromISO(llegada.value);
    let final = DT.fromISO(salida.value);
    let resultado = final.diff(inicial, ['days']).toObject()
    let importeTotal = (resultado.days * costoDiario).toFixed(2)
        alert("Estadía: " + resultado.days + " días. - Importe Total: " + importeTotal)
        //console.log("Estadía:", resultado.days, "días. - Importe Total:", importeTotal)
}

btnCalcular.addEventListener("click", calcularDias)