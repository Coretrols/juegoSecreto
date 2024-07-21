
//Esta variable es de alcance global;
let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//Verifico en la consola el numero que se esta generando, por medio de console.log
//console.log(numeroSecreto);
// Para buscar por id utilizo la función getElementByID recordar poner el .value para obtener el valor.
function verificarIntento() {
    //Genero una conversión de datos a tipo Entero.
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //Genero un console.log para verificar el elemento que se esta capturando.
    /*console.log(typeof(numeroDeUsuario));
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    //Triple igual es para verificar que sea igual en valor e igual en tipo.
    console.log(numeroSecreto === numeroDeUsuario);*/
    //console.log(numeroSecreto);
    if (numeroSecreto === numeroDeUsuario) {
        //Uso de template String y operador ternario
        asignarTextoElemento('p', `Acertaste el numero en: ${numeroIntentos} ${(numeroIntentos === 1 ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        numeroIntentos++;
        limpiarCaja();
    }
    return;
};
function limpiarCaja() {
    //Query selector es un selector generico si utilizo el # tambien puedo capturar el dato.
    /*let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';*/

    //Reduciendo el Codigo anterior
    return document.querySelector('#valorUsuario').value = '';
}

//Utilizo parametros para envio a la función y de esta manera automatizar
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    //Como buena practica colocamos "return;"
    return;
};
//Ejecuto las funciones y pruebo la escalabilidad del Codigo

//Utilizando el concepto de recursividad para llamar una función desde sí misma.
function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //Sí el numero generado esta generado hace una condicion
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
        //Deshabilitando el boton intentar
        document.querySelector('#intentar').setAttribute('disabled', 'true');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroAleatorio();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function CondicionesIniciales() {
    asignarTextoElemento('h1', 'Juego Secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    //valido el numero aleatorio que se esta generando
    console.log(numeroSecreto);
    numeroIntentos = 1;
    return;
}
function reiniciarJuego() {
    //Limpiar Caja
    limpiarCaja();
    //Indicar mensaje de intervalos de numeros   
    //Generar un nuevo numero aleatorio   
    //reiniciar el numero de intentos.
    CondicionesIniciales();
    //Deshabilitar botón del juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    return;
}
//Llamo a las condiciones iniciales para generar un nuevo juego
CondicionesIniciales();