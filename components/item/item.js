import { listas } from "./data.js";
import { completarTarea } from "./completarTarea.js"; // Importamos la función

function item() {
    let { lista_desing, lista_personal, lista_house } = listas();

    let item = document.createElement('section');
    item.className = "item";

    let titulo = document.createElement('h1');
    titulo.innerText = "Today";
    titulo.className = "titulo-c";
    item.appendChild(titulo);

    function crearCategoria(titulo, tareas) {
        let container = document.createElement('div');
        container.className = `cont-${titulo.toLowerCase()}`;
        container.innerHTML = `<h1>${titulo.toUpperCase()}</h1>`; // Título de la categoría

        tareas.forEach(tarea => {
            // Crear un contenedor para cada tarea
            let label = document.createElement('label'); // Cada tarea tiene su propio label
            label.className = "label";

            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            let nombreTarea = document.createElement('h1');
            nombreTarea.className = "h1-1";
            nombreTarea.innerText = tarea;

            // Agregar el checkbox y el nombre de la tarea al label
            label.appendChild(checkbox);
            label.appendChild(nombreTarea);

            // Asignar el evento de clic al label
            label.addEventListener('click', completarTarea);
            // Agregar el label al contenedor de la categoría
            container.appendChild(label);
        });

        return container;
    }

    item.appendChild(crearCategoria("DESING", lista_desing));
    item.appendChild(crearCategoria("PERSONAL", lista_personal));
    item.appendChild(crearCategoria("HOUSE", lista_house));

    let add = document.createElement('div');
    add.className = "add";
    add.innerHTML = `
        <h1 class="h1-add">Write a task...</h1>
        <button>Add</button>
    `;
    item.appendChild(add);

    return item;
}

export { item };