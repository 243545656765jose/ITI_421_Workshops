function guardarCliente() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var telefono = document.getElementById("telefono").value;
  var clientes = JSON.parse(localStorage.getItem("clientes")) || [];
  clientes.push({ nombre: nombre, apellido: apellido, telefono: telefono });
  localStorage.setItem("clientes", JSON.stringify(clientes));
  document.getElementById("clienteForm").reset();
}
