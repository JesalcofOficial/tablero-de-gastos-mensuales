// Función para abrir la ventana modal
function openModal() {
  document.getElementById("modal").style.display = "block";
}

// Función para cerrar la ventana modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}


function agregarRenglon() {
  var table = document.getElementById("tablero");
  var row = table.insertRow(-1); // Inserta una nueva fila al final de la tabla
  var cell1 = row.insertCell(0); // Añade la primera celda a la nueva fila
  var cell2 = row.insertCell(1); // Añade la segunda celda a la nueva fila
  var cell3 = row.insertCell(2); // Añade la tercera celda a la nueva fila
  cell1.innerHTML = "<input type='text' name='dia[]'>"; // Añade un input para el día en la primera celda
  cell2.innerHTML = "<input type='text' name='concepto[]'>"; // Añade un input para el concepto en la segunda celda
  cell3.innerHTML = "<input type='text' name='importe[]'>"; // Añade un input para el importe en la tercera celda
}

