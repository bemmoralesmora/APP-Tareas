import { lista } from "./data.js";

function item (){
    let item = document.createElement('section');
    item.className = "item"

    let titulo = document.createElement('h1');
    titulo.innerText = "Today";
    titulo.className = "titulo-c"
    item.appendChild(titulo);

    let cont_desing = document.createElement('div');
    cont_desing.className = "cont-desing";
    cont_desing.innerHTML = `
        <h1>DESING</h1>
        <label for="">
            <div>
            <input type="checkbox">
            <h1 class="h1-1">Create icons for a dashboard</h1>
        </div>
            <div>
            <input type="checkbox">
            <h1 class="h1-1">Prepare a design presentation</h1>
        </div>

        </label>
    `;
    item.appendChild(cont_desing);

    let cont_personal = document.createElement('div');
    cont_personal.className = "cont-personal";
    cont_personal.innerHTML = `
        <h1>PERSONAL</h1>
        <label for="">
            <div>
            <input type="checkbox">
            <h1 class="h1-1">Stretch for 15 minutes</h1>
        </div>
            <div>
            <input type="checkbox">
            <h1 class="h1-1">Plan your meal</h1>
        </div>
        <div>
            <input type="checkbox">
            <h1 class="h1-1">Review daily goals before sleeping. <br>Add some new if time permits</h1>
        </div>

        </label>
    `;
    item.appendChild(cont_personal);

    let cont_house = document.createElement('div');
    cont_house.className = "cont-house"
    cont_house.innerHTML = `
        <h1>HOUSE</h1>
        <label for="">
            <div>
            <input type="checkbox">
            <h1 class="h1-1">Water indoor plants</h1>
        </div>

        </label>
    `;
    item.appendChild(cont_house);

    let add = document.createElement('div');
    add.className = "add"
    add.innerHTML = `
        <h1 class="h1-add">Write a task...</h1>
        <button>Add</button>
    `;
    item.appendChild(add);

    return item;
}

export {item};