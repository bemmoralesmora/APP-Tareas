import { cargaDom } from "../../index.js";
import { cargarSignup } from "../signup_form/signup.js";

function Login() {
    let login = document.createElement('section');
    login.className = "login";

    let logo_login = document.createElement('div');
    logo_login.className = "logo-login";
    logo_login.innerHTML = `
        <div><img src="https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_640.png" alt=""></div>
        <h1>Rocky list</h1>
    `;
    login.appendChild(logo_login);

    // Formulario de login
    let form = document.createElement('form');
    form.className = "form";
    login.appendChild(form);

    let inputUsuario = document.createElement('input');
    inputUsuario.type = "text";
    inputUsuario.id = "usuario";
    inputUsuario.placeholder = "Usuario";

    let inputPassword = document.createElement('input');
    inputPassword.type = "password";
    inputPassword.id = "contraseña";
    inputPassword.placeholder = "Contraseña";

    let botonLogin = document.createElement('button');
    botonLogin.type = "submit";
    botonLogin.textContent = "Iniciar Sesión  >";

    form.appendChild(inputUsuario);
    form.appendChild(inputPassword);
    form.appendChild(botonLogin);

    // Enlace "Sign Up"
    let crear_cuenta = document.createElement('div');
    crear_cuenta.className = "crear";
    crear_cuenta.innerHTML = `
        <p>If you don't have an account yet, you can create one here. <a href="#">Sign Up</a></p>
    `;
    login.appendChild(crear_cuenta);

    // Manejar el evento de envío del formulario de login
    form.addEventListener('submit', async function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe
    
        // Obtener los valores del formulario
        const usuario = inputUsuario.value;
        const contraseña = inputPassword.value;
    
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre: usuario, contraseña }),
            });
    
            const data = await response.json();
            if (response.ok) {
                console.log('Login exitoso:', data);
                const usuario_id = data.usuario.id; // Obtener el ID del usuario
    
                // Guardar el ID del usuario en localStorage
                localStorage.setItem('usuario_id', usuario_id);
    
                // Cargar el contenido principal
                cargaDom();
            } else {
                throw new Error(data.error || 'Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error en el login:', error);
            alert(error.message);
        }
    });

    // Manejar el clic en el enlace "Sign Up"
    let enlaceSignup = crear_cuenta.querySelector('a');
    enlaceSignup.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que el enlace recargue la página

        // Reemplazar el contenido del DOM con el formulario de registro
        let root = document.querySelector("#root");
        root.innerHTML = ""; // Limpiar el contenido actual
        root.appendChild(cargarSignup()); // Cargar el formulario de registro
    });

    return login;
}

export { Login };