import { agregarTareaAlDOM } from "../tarea/tareas.js";

export function cargarTareas(input) {
    // Obtener el valor del input
    const nombreTarea = input.value.trim(); // Elimina espacios en blanco al inicio y final

    // Validar que el input no esté vacío
    if (!nombreTarea) {
        alert("Por favor, escribe una tarea.");
        return;
    }

    // Obtener el usuario_id del localStorage
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) {
        alert("Usuario no identificado. Por favor, inicia sesión.");
        return;
    }

    // Enviar la tarea al backend
    fetch('http://localhost:3000/tareas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombreTarea, // Envía el valor del input
            estado: 'pendiente', // Estado por defecto
            usuario_id: usuario_id // Incluir el usuario_id
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Tarea agregada:', data);
        input.value = ''; // Limpiar el input después de agregar la tarea

        // Agregar la tarea al DOM
        agregarTareaAlDOM(data);
    })
    .catch(error => console.error('Error al agregar tarea:', error));
}