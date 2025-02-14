export function completarTarea(event) {
    // "this" se refiere al <label> que se ha clickeado
    const checkbox = this.querySelector('input[type="checkbox"]'); // Busca el checkbox dentro del label
    const texto = this.querySelector('.h1-1'); // Busca el texto de la tarea

    // Cambia el estado del checkbox (marcar/desmarcar)
    checkbox.checked = !checkbox.checked;

    // Aplica o quita el subrayado y el color azul
    if (checkbox.checked) {
        texto.style.textDecoration = "line-through"; // Subraya el texto
        texto.style.color = "blue"; // Cambia el color del texto a azul
    } else {
        texto.style.textDecoration = "none"; // Quita el subrayado
        texto.style.color = "black"; // Restaura el color del texto a negro
    }
}