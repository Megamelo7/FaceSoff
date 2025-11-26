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
