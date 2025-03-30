function agregarNumero(num) {
    document.getElementById("pantalla").value += num;
}


function operacion(op) {
    document.getElementById("pantalla").value += op;
}

function limpiarPantalla() {
    document.getElementById("pantalla").value = "";
}

function borrarUltimo() {
    let pantalla = document.getElementById("pantalla").value;
    pantalla.value = pantalla.value.slice(0, -1);
}

function calcularResultado() {
    try {
        let resultado = eval(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value = resultado;
    } catch (error) {
       document.getElementById("pantalla").value = "Error";
    }
}

document.getElementById('toggle').addEventListener('change', function() {
    // Elementos a cambiar
    const body = document.body;
    const main = document.querySelector('.main');
    const calculadora = document.querySelector('.calculadora');
    const pantalla = document.getElementById('pantalla');
    const botones = document.querySelectorAll('button');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const enlaces = document.querySelectorAll('a');
    const switchSlider = document.querySelector('.switch');

    if (this.checked) {
        // Modo oscuro - Neumorfismo oscuro
        body.classList.add('dark-mode');
        main.classList.add('dark-mode');
        calculadora.classList.add('dark-mode');
        pantalla.classList.add('dark-mode');
        header.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        switchSlider.classList.add('dark-mode');

        // Botones
        botones.forEach(button => {
            button.classList.add('dark-mode');
            button.style.backgroundColor = '#1e1e1e';
            button.style.boxShadow = '-5px -5px 10px #3a3a3a, 5px 5px 10px #000000';
            button.style.color = '#ffffff';
        });

        // Enlaces
        enlaces.forEach(enlace => {
            enlace.style.color = '#ffffff';
        });

    } else {
        // Modo claro - Neumorfismo original
        body.classList.remove('dark-mode');
        main.classList.remove('dark-mode');
        calculadora.classList.remove('dark-mode');
        pantalla.classList.remove('dark-mode');
        header.classList.remove('dark-mode');
        footer.classList.remove('dark-mode');
        switchSlider.classList.remove('dark-mode');

        // Botones
        botones.forEach(button => {
            button.classList.remove('dark-mode');
            button.style.backgroundColor = '#e9e7e7';
            button.style.boxShadow = '-5px -5px 10px #ffffff, 5px 5px 10px #aeaec0';
            button.style.color = '#000000';
        });

        // Enlaces
        enlaces.forEach(enlace => {
            enlace.style.color = '#000000';
        });
    }
});