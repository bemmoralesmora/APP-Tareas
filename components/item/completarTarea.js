export function completarTarea(event) {
    const checkbox = event.target;
    const texto = checkbox.nextElementSibling; // El texto está después del checkbox

    // Aplicar estilos según el estado del checkbox
    if (checkbox.checked) {
        texto.style.textDecoration = "line-through"; 
        texto.style.color = "blue"; 
    } else {
        texto.style.textDecoration = "none"; 
        texto.style.color = "black";
    }
}