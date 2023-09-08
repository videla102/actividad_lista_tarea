function agregarTarea() {
  const nuevaTareaInput = document.getElementById("nuevaTarea");
  const listaTareas = document.getElementById("listaTareas");
  const nuevaTareaTexto = nuevaTareaInput.value.trim();
  if (nuevaTareaTexto !== "") {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto;
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "delete";
    botonEliminar.onclick = function () {
      listaTareas.removeChild(nuevaTarea);
    };
    nuevaTarea.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTarea);
    nuevaTareaInput.value = "";
  }
}
// Función para marcar una tarea como completada
function marcarCompletada(tarea) {
  tarea.classList.toggle("completed");
}
document
  .getElementById("listaTareas")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      marcarCompletada(event.target);
    }
  });
// Agregar evento de clic al botón "Agregar"
document.getElementById("agregar").addEventListener("click", agregarTarea);

function mostrarCompleto() {
  const tareas = document.querySelectorAll("li");
  tareas.forEach((tarea) => {
    if (tarea.classList.contains("completed")) {
      tarea.style.display = "flex";
    } else {
      tarea.style.display = "none";
    }
  });
}

function mostrarIncompleto() {
    const tareas = document.querySelectorAll("li");
tareas.forEach(tarea => {
if (!tarea.classList.contains("completed")) {
tarea.style.display = "flex";
} else {
tarea.style.display = "none";
}
});
}

document.getElementById("tareaCompleta").addEventListener("click", mostrarCompleto);
// Agregar evento de clic al botón "Mostrar Pendientes"
document.getElementById("tareaIncompleta").addEventListener("click", mostrarIncompleto);
