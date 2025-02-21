import { Cargarheader } from "./components/header/header.js";
import { cargarTarea} from "./components/tarea/tareas.js"
import { Cargarformulario } from "./components/formulario/formulario.js";

function cargaDom() {
    let Dom = document.querySelector("#root");
    Dom.className = "dom";

    Dom.appendChild(Cargarheader());
    Dom.appendChild(cargarTarea());
    Dom.appendChild(Cargarformulario());
}

cargaDom();