///// ALERTAS

/// ALERTA CONFIRMAR CANCELAR
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

