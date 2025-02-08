import { listas } from "./data.js";

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

        // Asigna una clase CSS al contenedor 'div' con el nombre de la categoría en minúsculas.
        // Ejemplo: si 'titulo' es "DESING", la clase será "cont-design".
        container.className = `cont-${titulo.toLowerCase()}`;

        // Establece el contenido HTML dentro del contenedor 'div'. 
        // Inserta un elemento 'h1' con el nombre de la categoría en mayúsculas.
        // Ejemplo: si 'titulo' es "DESING", el HTML será <h1>DESING</h1>.
        container.innerHTML = `<h1>${titulo.toUpperCase()}</h1>`;
        
        let label = document.createElement('label');
        
        tareas.forEach(tarea => {
            let div = document.createElement('div');
            
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            
            let nombreTarea = document.createElement('h1');
            nombreTarea.className = "h1-1";
            nombreTarea.innerText = tarea;
            
            div.appendChild(checkbox);
            div.appendChild(nombreTarea);
            label.appendChild(div);
        });
        
        container.appendChild(label);
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
