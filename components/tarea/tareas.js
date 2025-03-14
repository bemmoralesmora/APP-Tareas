import { itemTarea } from "./itemTarea.js";

// Consultar las tareas al backend
export function consultarTareas(usuario_id) {
    fetch(`http://localhost:3000/tareas/${usuario_id}`) // Usar el usuario_id en la URL
        .then(response => response.json())
        .then(data => {
            cargarTareasDesdeDB(data);  // Llama a la función que mete las tareas en el DOM
        })
        .catch(error => console.error('Error al cargar tareas:', error));
}

// Función que crea los elementos y los mete en el HTML
function cargarTareasDesdeDB(tareas) {
    const contenedorTareas = document.getElementById("tareas-container");
    if (!contenedorTareas) {
        console.error("El contenedor de tareas no existe en el DOM.");
        return;
    }

    contenedorTareas.innerHTML = '';  // Limpiamos lo que había antes

    tareas.forEach((tareaDB, index) => {
        const tareaFormateada = {
            id: tareaDB.id, // Incluir el ID de la tarea
            nombre: tareaDB.nombre,
            estado: tareaDB.estado // El estado ya es un string ("pendiente", "completada", etc.)
        };

        // Creamos el item visual y lo metemos en el contenedor
        const elementoTarea = itemTarea(tareaFormateada, index);
        contenedorTareas.appendChild(elementoTarea);
    });
}

// Función para agregar una tarea al DOM
export function agregarTareaAlDOM(tarea) {
    const contenedorTareas = document.getElementById("tareas-container");
    if (!contenedorTareas) {
        console.error("El contenedor de tareas no existe en el DOM.");
        return;
    }

    // Formatear la tarea
    const tareaFormateada = {
        id: tarea.id, // Incluir el ID de la tarea
        nombre: tarea.nombre,
        estado: tarea.estado // El estado ya es un string ("pendiente", "completada", etc.)
    };

    // Crear el item visual y agregarlo al contenedor
    const elementoTarea = itemTarea(tareaFormateada, contenedorTareas.children.length);
    contenedorTareas.appendChild(elementoTarea);
}

// Función para cargar la sección de tareas
export function cargarTarea(usuario_id) {
    let section = document.createElement("section");
    section.className = "item";

    let titulo = document.createElement("h1");
    titulo.innerText = "Today";
    titulo.className = "titulo-c";
    section.appendChild(titulo);

    let container = document.createElement("div");
    container.className = "cont-lista";
    container.id = "tareas-container"; // ID corregido

    section.appendChild(container);

    // Cargar tareas iniciales
    consultarTareas(usuario_id); // Pasar el usuario_id

    return section;
}