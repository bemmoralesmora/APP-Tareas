import { Cargarheader } from "./components/header/header.js";
import { cargarFormulario } from "./components/formulario/formulario.js";
import { cargarTarea } from "./components/tarea/tareas.js";

import { Login } from "./form/login_form/login.js";

function cargaLogin() {
    let root = document.querySelector("#root");
    root.appendChild(Login()); // Cargar el login en el DOM
}

cargaLogin();

function cargaDom() {
    let Dom = document.querySelector("#root");
    Dom.innerHTML = "";
    Dom.className = "dom";

    // Añadir el header
    Dom.appendChild(Cargarheader());

    // Añadir la sección de tareas
    Dom.appendChild(cargarTarea());

    // Añadir el formulario
    Dom.appendChild(cargarFormulario());
}


export {cargaDom};

