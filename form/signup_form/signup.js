import { Login } from "../login_form/login.js";

function cargarSignup() {
    let signup = document.createElement('section');
    signup.className = "signup";

    // Aquí puedes agregar el contenido del formulario de registro
    signup.innerHTML = `
        <div class="logo-signup">
            <div><img src="https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_640.png" alt=""></div>
            <h1>Rocky list</h1>
        </div>
        <form class="form-signup">
            <h1>Create new account</h1>
            <div class="volver-login">
                <p>¿Ya tienes una cuenta? <a href="#">Iniciar Sesión</a></p>
            </div>
            <div class="cont_n_p">
                <input type="text" id="nombre" placeholder="Nombre" required>
                <input type="text" id="apellido" placeholder="Apellido" required>
            </div>
            <input type="email" id="correo" placeholder="Correo electrónico" required>
            <input type="password" id="contraseña" placeholder="Contraseña" required>
            <button type="submit">Registrarse</button>
        </form>
    `;

    // Manejar el clic en el enlace "Iniciar Sesión"
    let enlaceLogin = signup.querySelector('.volver-login a');
    enlaceLogin.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que el enlace recargue la página

        // Reemplazar el contenido del DOM con el formulario de login
        let root = document.querySelector("#root");
        root.innerHTML = ""; // Limpiar el contenido actual
        root.appendChild(Login()); // Cargar el formulario de login
    });

    // Manejar el envío del formulario de registro
    let formSignup = signup.querySelector('.form-signup');
    formSignup.addEventListener('submit', async function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener los valores del formulario
        const nombre = signup.querySelector('#nombre').value;
        const correo = signup.querySelector('#correo').value;
        const contraseña = signup.querySelector('#contraseña').value;

        try {
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, contraseña, correo }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Registro exitoso:', data);
                alert('Registro exitoso');
                let root = document.querySelector("#root");
                root.innerHTML = ""; // Limpiar el contenido actual
                root.appendChild(Login()); // Redirigir al login
            } else {
                throw new Error(data.error || 'Error en el registro');
            }
        } catch (error) {
            console.error('Error en el registro:', error);
            alert('Error en el registro: ' + error.message);
        }
    });

    return signup;
}

export { cargarSignup };