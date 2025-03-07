import { Cargarheader } from "./components/header/header.js";
import { cargarFormulario } from "./components/formulario/formulario.js";
import { consultarTareas } from "./components/tarea/tareas.js";

function cargarDOM() {
    // Obtener el contenedor principal
    let DOM = document.getElementById("root");

    // Añadir el header
    DOM.appendChild(Cargarheader());

    // Crear el contenedor de tareas
    let contenedorTareas = document.createElement('div');
    contenedorTareas.id = "tareas-container";
    DOM.appendChild(contenedorTareas);

    // Añadir el formulario
    DOM.appendChild(cargarFormulario());

    // Consultar las tareas al backend
    consultarTareas();
}

cargarDOM();