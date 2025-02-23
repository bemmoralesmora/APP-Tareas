import { tareas } from "./data.js";
import { itemTarea } from "./itemTarea.js";

function cargarTarea() {
    let section = document.createElement("section");
    section.className = "item";

    let titulo = document.createElement("h1");
    titulo.innerText = "Today";
    titulo.className = "titulo-c";
    section.appendChild(titulo);

    let container = document.createElement("div");
    container.className = "cont-lista";
    container.innerHTML = `<h1>TASKS</h1>`;

    // Cargar tareas iniciales
    tareas().forEach(tarea => {
        container.appendChild(itemTarea(tarea));
    });

    section.appendChild(container);
    return section;
}

export { cargarTarea };