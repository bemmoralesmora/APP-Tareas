import { Cargarheader } from "./components/header/header.js";
import { cargarFormulario } from "./components/formulario/formulario.js";
import { cargarTarea } from "./components/tarea/tareas.js";
import { Login } from "./form/login_form/login.js";

import { consultarTareas } from "./components/tarea/tareas.js";

// Función para cargar el login
function cargaLogin() {
    let root = document.querySelector("#root");
    root.innerHTML = ""; // Limpiar el contenido actual
    root.appendChild(Login()); // Cargar el login en el DOM
}

// Función para cargar el contenido principal
export function cargaDom() {
    const usuario_id = localStorage.getItem('usuario_id'); // Obtener el ID del usuario

    let root = document.querySelector("#root");
    root.innerHTML = ""; // Limpiar el contenido actual
    root.className = "dom";

    // Añadir el header
    root.appendChild(Cargarheader());

    // Añadir la sección de tareas
    root.appendChild(cargarTarea(usuario_id)); // Pasar el usuario_id

    // Añadir el formulario
    root.appendChild(cargarFormulario());

    // Cargar las tareas del usuario
    if (usuario_id) {
        consultarTareas(usuario_id);
    }
}

// Cargar el login al iniciar la página
cargaLogin();