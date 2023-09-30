//Local Storage
let personas = JSON.parse(localStorage.getItem('personas')) || [];


// Función para ingresar datos
function ingresarPersona() {
    let nombre = document.getElementById('nombre').value;
    let edad = parseInt(document.getElementById('edad').value);
    let altura = parseFloat(document.getElementById('altura').value);


    // Objeto
    let persona = {
        nombre: nombre,
        edad: edad,
        altura: altura
    };

    // Agregar el objeto al local storage
    personas.push(persona);

            document.getElementById('nombre').value = '';
            document.getElementById('edad').value = '';
            document.getElementById('altura').value = '';

            // Guardar en localStorage
            localStorage.setItem('personas', JSON.stringify(personas));

            actualizarDatos();
        }


//Funcion para actualizar datos

function actualizarDatos() {
    // Mostrar datos
    document.getElementById('datosPersonas').innerText = JSON.stringify(personas, null, 2);

    // Filtrar personas mayores de 18 años
    let personasMayoresDe18 = personas.filter(persona => persona.edad > 18);
    document.getElementById('mayoresDe18').innerText = JSON.stringify(personasMayoresDe18, null, 2);

    // Filtrar personas menores de 18
    let personasMenoresDe18 = personas.filter(persona => persona.edad <= 18);
    document.getElementById('menoresDe18').innerText = JSON.stringify(personasMenoresDe18, null, 2);
}

    actualizarDatos();
