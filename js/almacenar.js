const inputItem = document.getElementById('item');
const btnAgregar = document.getElementById('agregar');
const btnLimpiar = document.getElementById('limpiar');
const contenedor = document.getElementById('contenedor');

function guardarItems(items) {
  localStorage.setItem('listadoItems', JSON.stringify(items));
}

function obtenerItems() {
  const items = localStorage.getItem('listadoItems');
  return items ? JSON.parse(items) : [];
}

function actualizarVista() {
  const items = obtenerItems();
  contenedor.innerHTML = '';
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = item;
    contenedor.appendChild(li);
  });
}

function agregarItem() {
  const nuevoItem = inputItem.value.trim();
  if (nuevoItem) {
    const items = obtenerItems();
    items.push(nuevoItem);
    guardarItems(items);
    actualizarVista();
    inputItem.value = '';
  }
}

function limpiarListado() {
  localStorage.removeItem('listadoItems');
  actualizarVista();
}

btnAgregar.addEventListener('click', agregarItem);
btnLimpiar.addEventListener('click', limpiarListado);

document.addEventListener('DOMContentLoaded', actualizarVista);
