//CALCULO

let calcular = document.getElementById("calcular");
let input1 = document.getElementById("valor1");
let input2 = document.getElementById("valor2");
let input3 = document.getElementById("valor3");
let input4 = document.getElementById('valor4');


function calculoRegraTres() {
    const valor1 = parseFloat(input1.value.replace(",", "."));
    const valor2 = parseFloat(input2.value.replace(",", "."));
    const valor3 = parseFloat(input3.value.replace(",", "."));

    let calculo = (valor2 * valor3) / valor1;

    resultado.innerHTML = `${calculo.toFixed(2)}`;
}

calcular.addEventListener('click', calculoRegraTres);
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        calculoRegraTres();
    }
});


// COLORFULL MODE

const colorfullClass = 'colorfull';
const title = document.getElementById('title');
const label1 = document.getElementsByTagName('label')[0];
const label2 = document.getElementsByTagName('label')[1];
const label3 = document.getElementsByTagName('label')[2];
const label4 = document.getElementsByTagName('label')[3];
const seta1 = document.getElementsByClassName('seta')[0];
const seta2 = document.getElementsByClassName('seta')[1];
const resultado = document.getElementById('resultado');
const clique = document.getElementById('clique');
const explicacao = document.getElementById('explicacao');
const mode = document.getElementById('mode');
const footer = document.getElementsByTagName('footer')[0];


function changeMode() {
    changeClasses();
    changeText();
    changeImg();
}

function changeClasses() {
    title.classList.toggle(colorfullClass);
    label1.classList.toggle(colorfullClass);
    label2.classList.toggle(colorfullClass);
    label3.classList.toggle(colorfullClass);
    label4.classList.toggle(colorfullClass);
    input1.classList.toggle(colorfullClass);
    input2.classList.toggle(colorfullClass);
    input3.classList.toggle(colorfullClass);
    input4.classList.toggle(colorfullClass);
    calcular.classList.toggle(colorfullClass);
    resultado.classList.toggle(colorfullClass);
    explicacao.classList.toggle(colorfullClass);
    mode.classList.toggle(colorfullClass);
    footer.classList.toggle(colorfullClass);
}

function changeText() {
    const dark = 'Dark';
    const colorfull = 'Colorfull';
    if (title.classList.contains(colorfullClass)) {
        mode.innerHTML = dark;
        return;
    }
    mode.innerHTML = colorfull;
}

function changeImg() {
    if (title.classList.contains(colorfullClass)) {
        clique.setAttribute('src', 'img/clique-aqui-colorfull.png');
        seta1.setAttribute('src', 'img/seta-colorfull.ico');
        seta2.setAttribute('src', 'img/seta-colorfull.ico');
        return;
    }
    clique.setAttribute('src', 'img/clique-aqui.png');
    seta1.setAttribute('src', 'img/seta.ico');
    seta2.setAttribute('src', 'img/seta.ico');
}



mode.addEventListener('click', changeMode);