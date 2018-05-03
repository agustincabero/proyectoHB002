//Declaración de variables
var nombreUsuario = "Lalo Landa";
var saldoCuenta = 30000;
var limiteExtraccion = 5000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var previousBalance = saldoCuenta;
    var nuevoLimite = parseInt(prompt('Ingrese su nuevo limite de extracción:'));
    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla();
    alert('Su nuevo limite de extracción es de: $' + limiteExtraccion);
}

function extraerDinero() {
    var previousBalance = saldoCuenta;
    var monto = parseInt(prompt('Ingrese el monto a extraer:'));
    decreaseBalance(monto);
    actualizarSaldoEnPantalla();
    alert('Has retirado: $' + monto +'\nSaldo anterior: $' + previousBalance + '\nSaldo actual: $' + saldoCuenta);
}

function depositarDinero() {
    var previousBalance = saldoCuenta;
    var monto = parseInt(prompt('Ingrese el monto a depositar:'));
    increaseBalance(monto);
    actualizarSaldoEnPantalla();
    alert('Has depositado: $' + monto +'\nSaldo anterior: $' + previousBalance + '\nSaldo actual: $' + saldoCuenta);
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

//Funciones creadas por alumno
function increaseBalance(monto){
    saldoCuenta += monto;
}

function decreaseBalance(monto){
    saldoCuenta -= monto;
}
