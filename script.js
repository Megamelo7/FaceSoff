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


// -------- Envío del formulario a WhatsApp --------
document.getElementById("form-contacto").addEventListener("submit", function(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value.trim();
  let telefono = document.getElementById("telefono").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();

  let formOk = document.getElementById("form-ok");

  // Validación
  if (nombre === "" || telefono === "" || mensaje === "") {
    formOk.style.color = "red";
    formOk.textContent = "Completa todos los campos antes de enviar.";
    return;
  }

  // Tu número de WhatsApp
  let telefonoDestino = "5491152577608";

  // Mensaje formateado
  let texto =
    "Nuevo mensaje desde FaceSoff%0A%0A" +
    "*Nombre:* " + nombre + "%0A" +
    "*Teléfono:* " + telefono + "%0A" +
    "*Mensaje:* " + mensaje;

  // Abrir WhatsApp
  let url = "https://wa.me/" + telefonoDestino + "?text=" + texto;

  window.open(url, "_blank");

  formOk.style.color = "green";
  formOk.textContent = "Redirigiendo a WhatsApp...";

  // Limpiar formulario
  document.getElementById("nombre").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("mensaje").value = "";
});
