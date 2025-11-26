// -------- Modal Galería --------
function abrirModal(src) {
  let modal = document.getElementById("modal");
  let modalImg = document.getElementById("modal-img");

  modal.style.display = "flex";
  modalImg.src = src;
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

// -------- Formulario --------
document.getElementById("form-contacto").addEventListener("submit", function(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre");
  let email = document.getElementById("email");
  let mensaje = document.getElementById("mensaje");
  let formOk = document.getElementById("form-ok");

  if (nombre.value === "" || email.value === "" || mensaje.value === "") {
    formOk.style.color = "red";
    formOk.textContent = "Completa todos los campos antes de enviar.";
    return;
  }

  formOk.style.color = "green";
  formOk.textContent = "¡Mensaje enviado correctamente!";
  nombre.value = "";
  email.value = "";
  mensaje.value = "";
});
