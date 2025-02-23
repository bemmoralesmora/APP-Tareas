// src/index.js
import { Cargarheader } from "./components/header/header.js";
import { cargarFormulario } from "./components/formulario/formulario.js";
import { cargarTarea } from "./components/tarea/tareas.js";

function cargaDom() {
    let Dom = document.querySelector("#root");
    Dom.className = "dom";

    Dom.appendChild(Cargarheader());
    Dom.appendChild(cargarTarea());
    Dom.appendChild(cargarFormulario());
}

cargaDom();