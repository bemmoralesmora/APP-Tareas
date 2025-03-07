import { Cargarheader } from "./components/header/header.js";
import { cargarFormulario } from "./components/formulario/formulario.js";
import { cargarTarea } from "./components/tarea/tareas.js";

function cargaDom() {
    let Dom = document.querySelector("#root");
    Dom.className = "dom";

    // Añadir el header
    Dom.appendChild(Cargarheader());

    // Añadir la sección de tareas
    Dom.appendChild(cargarTarea());

    // Añadir el formulario
    Dom.appendChild(cargarFormulario());
}

cargaDom();