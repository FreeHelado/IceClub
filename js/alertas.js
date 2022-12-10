///// ALERTAS

/// ALERTA CONFIRMAR RESERVA
const alertaConfirmar = (title, text, confirmar, cancelar) => {
Swal.fire({
    title: title,
    text: text,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: confirmar,
    denyButtonText: cancelar,
    showCloseButton: true
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      esSocio()
    } else if (result.isDenied) {
      noEsSocio()
    }
  })
}

//// TOAST ALERTA
const alertaValidacion = (text) => {
  Toastify({
    text: text,
    close: true,
    position: "top-left",
    duration: 5000
    }).showToast();
}

const alertaReserva = (titulo, texto) => {
  Swal.fire({
    title: titulo,
    text: texto,
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#0700d8',
    cancelButtonColor: '#d33',
    confirmButtonText: '¡Si! Reservar 🍿',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        '🍿¡Listo!🍿',
        'Tu reserva está lista, te enviamos la película a la brevedad',
        'success'
      )
      limpiarcarrito()
    }
  })
}

const alertaNoSearch = (titulo) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: titulo
  })
}


