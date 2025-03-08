import { itemTarea } from "../tarea/itemTarea.js";
import { cargarFormulario } from "./formulario.js";

export function cargarTareas(input) {
    // Obtener el valor del input
    const nombreTarea = input.value.trim(); // Elimina espacios en blanco al inicio y final

    // Validar que el input no esté vacío
    if (!nombreTarea) {
        alert("Por favor, escribe una tarea.");
        return;
    }

    // Enviar la tarea al backend
    fetch('http://localhost:3000/agregar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre_tarea: nombreTarea, // Envía el valor del input
            estado: 'pendiente' // Estado por defecto
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Tarea agregada:', data);
        input.value = ''; // Limpiar el input después de agregar la tarea
        cargarTareasDesdeDB(); // Recargar la lista de tareas desde la base de datos
    })
    .catch(error => console.error('Error al agregar tarea:', error));
}