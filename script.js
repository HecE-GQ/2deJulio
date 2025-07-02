function abrirCarta() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("carta").style.display = "block";
  mostrarFecha();
}

function mostrarFecha() {
  const fecha = new Date();
  const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
  const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
  document.getElementById("fechaHoy").textContent = fechaFormateada;
}
