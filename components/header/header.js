function header(){
    let header = document.createElement('header');
    header.className = "header";

    let logo = document.createElement('img')
    logo.src = "https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_640.png";
    logo.alt = "logo";
    header.appendChild(logo);

    let h1 = document.createElement('h1');
    h1.textContent = "BIENVENIDO A MI PROYECTO :(";
    header.appendChild(h1);

    return header;

}

export{header}
