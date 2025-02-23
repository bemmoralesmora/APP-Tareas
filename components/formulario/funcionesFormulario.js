import { tareas } from "../tarea/data.js";
import { itemTarea } from "../tarea/itemTarea.js";

export function cargarTareas(input) {
    const nuevaTarea = input.value.trim(); 

    if (nuevaTarea !== "") {
        // Agregamos la nueva tarea al array de tareas
        tareas().push(nuevaTarea);

        // Limpiamos el input
        input.value = "";

        // Obtenemos el contenedor de tareas
        const contenedorTareas = document.querySelector(".cont-lista");

        // Creamos un nuevo elemento de tarea y lo agregamos al contenedor
        const nuevaTareaElemento = itemTarea(nuevaTarea);
        contenedorTareas.appendChild(nuevaTareaElemento);
    }
}