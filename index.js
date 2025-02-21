import { Cargarheader } from "./components/header/header.js";
import { formulario } from "./components/formulario/formulario.js";
import { item } from "./components/item/item.js";

let Dom = document.querySelector("#root");
Dom.className = "dom";

Dom.appendChild(Cargarheader());
Dom.appendChild(item());
Dom.appendChild(formulario());

function cargaDom (){

}