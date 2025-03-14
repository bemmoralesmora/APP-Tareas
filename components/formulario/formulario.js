import { cargarTareas } from "./funcionesFormulario.js";

export function cargarFormulario() {
    const formulario = document.createElement("form"); // Cambiar a <form>
    formulario.className = "formulario";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Write a task...";

    const button = document.createElement("button");
    button.type = "submit"; // Cambiar a type="submit"
    button.textContent = "Add";

    // Evento para agregar tareas al enviar el formulario
    formulario.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
        cargarTareas(input);
    });

    formulario.appendChild(input);
    formulario.appendChild(button);

    return formulario;
}