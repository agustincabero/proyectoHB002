//Declaración de variables
var nombreUsuario = "Lalo Landa";
var password = '1234';
//Se utiliza el localStorage para guardar el saldo y el limite de extracción
if (localStorage.getItem("saldoCuenta") !== null) {
    var saldoCuenta = parseInt(localStorage.getItem("saldoCuenta"));
} else {
    var saldoCuenta = 30000;
}
if (localStorage.getItem("limiteExtraccion") !== null) {
    var limiteExtraccion = parseInt(localStorage.getItem("limiteExtraccion"));
} else {
    var limiteExtraccion = 3000;
}

iniciarSesion();
//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = parseInt(prompt('Ingrese su nuevo limite de extracción:'));
    if (Number.isInteger(nuevoLimite)&&nuevoLimite>0) {
        limiteExtraccion = nuevoLimite;
        localStorage.setItem('limiteExtraccion', limiteExtraccion);
        actualizarLimiteEnPantalla();
        alert('Su nuevo limite de extracción es de: $' + limiteExtraccion);
    } else {
        alert('Valor incorrecto.');
    }
}

function extraerDinero() {
    var previousBalance = saldoCuenta;
    var monto = parseInt(prompt('Ingrese el monto a extraer:'));
    if (Number.isInteger(monto)&&monto>0) {
        if (monto<=saldoCuenta&&monto<=limiteExtraccion&&monto%100==0) {
            decreaseBalance(monto);
            actualizarSaldoEnPantalla();
            alert('Has retirado: $' + monto +'\nSaldo anterior: $' + previousBalance + '\nSaldo actual: $' + saldoCuenta);
        }else if(monto>saldoCuenta){
            alert('No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.\nSaldo disponible: $'+ saldoCuenta);
        }else if(monto>limiteExtraccion){
            alert('La cantidad de dinero que desea extraer es mayor a su límite de extracción.\nLímite de extracción: $'+ limiteExtraccion);
        } else{
            alert('Solo puede extraer billetes de $100.');
        }
    } else {
        alert('Valor incorrecto.');
    }   
}

function depositarDinero() {
    var previousBalance = saldoCuenta;
    var monto = parseInt(prompt('Ingrese el monto a depositar:'));
    if (Number.isInteger(monto)&&monto>0) {
        increaseBalance(monto);
        actualizarSaldoEnPantalla();
        alert('Has depositado: $' + monto +'\nSaldo anterior: $' + previousBalance + '\nSaldo actual: $' + saldoCuenta);
    } else {
        alert('Valor incorrecto.');
    }
}

function pagarServicio() {
    var agua = 350;
    var tel = 425;
    var luz = 210;
    var internet = 570;
    var option = parseInt(prompt('Ingrese la opción correspondiente al servicio que desea pagar:\n1 - Agua\n2 - Luz\n3 - Internet\n4 - Teléfono'));
    var previousBalance = saldoCuenta;
    switch (option) {
        case 1:
            if (agua<=saldoCuenta) {
                decreaseBalance(agua);
                actualizarSaldoEnPantalla();
                alert('Has pagado el servicio Agua por un monto de $' + agua +'\nSaldo anterior: $' + previousBalance + '\nSaldo actual: $' + saldoCuenta);
            }else{
                alert('No hay saldo suficiente para pagar el servicio.\nSaldo disponible: $'+ saldoCuenta);
            }
            break;
        case 2:
            if (luz<=saldoCuenta) {
                decreaseBalance(luz);
                actualizarSaldoEnPantalla();
                alert('Has pagado el servicio Luz por un monto de $' + luz +'\nSaldo anterior: $' + previousBalance + '\nSaldo actual: $' + saldoCuenta);
            }else{
                alert('No hay saldo suficiente para pagar el servicio.\nSaldo disponible: $'+ saldoCuenta);
            }
            break;
        case 3:
            if (internet<=saldoCuenta) {
                decreaseBalance(internet);
                actualizarSaldoEnPantalla();
                alert('Has pagado el servicio Internet por un monto de $' + internet +'\nSaldo anterior: $' + previousBalance + '\nSaldo actual: $' + saldoCuenta);
            }else{
                alert('No hay saldo suficiente para pagar el servicio.\nSaldo disponible: $'+ saldoCuenta);
            }
            break;
        case 4:
            if (tel<=saldoCuenta) {
                decreaseBalance(tel);
                actualizarSaldoEnPantalla();
                alert('Has pagado el servicio Teléfono por un monto de $' + tel +'\nSaldo anterior: $' + previousBalance + '\nSaldo actual: $' + saldoCuenta);
            }else{
                alert('No hay saldo suficiente para pagar el servicio.\nSaldo disponible: $'+ saldoCuenta);
            }
            break;
    
        default:
            alert('No existe el servicio seleccionado.\n1 - Agua\n2 - Luz\n3 - Internet\n4 - Teléfono');
            break;
    }
}

function transferirDinero() {
    var ctaAmiga1 = 1234567;
    var ctaAmiga2 = 7654321;
    var previousBalance = saldoCuenta;
    var monto = parseInt(prompt('Ingrese el monto que desea transferir:'));
    if (monto<=saldoCuenta) {
        var cta = parseInt(prompt('Ingrese el nro de cuenta a la que desea transferir:\nCta Amiga 1: '+ctaAmiga1+'\nCta Amiga 2: '+ctaAmiga2));
        if (cta===ctaAmiga1) {
            decreaseBalance(monto);
            actualizarSaldoEnPantalla();
            alert('Ha transferido: $' + monto +' a Cta Amiga 1\nSaldo anterior: $' + previousBalance + '\nSaldo actual: $' + saldoCuenta);
        } else if(cta===ctaAmiga2) {
            decreaseBalance(monto);
            actualizarSaldoEnPantalla();
            alert('Ha transferido: $' + monto +' a Cta Amiga 2\nSaldo anterior: $' + previousBalance + '\nSaldo actual: $' + saldoCuenta);
        }else{
            alert('Solo es posible transferir dinero a una cuenta "Amiga"');
        }
        
    }else {
        alert('No es posible realizar la operación. Verifique el monto igresado.\nSaldo disponible: $'+ saldoCuenta);
    }  
}

function iniciarSesion() {
    var userPass = prompt('Ingrese el código de su cuenta:');
    if (userPass===password) {
        alert('Bienvenido/a '+nombreUsuario+', ya puede comenzar a realizar operaciones.');    
    } else {
        alert('Código incorrecto. Su cuenta ha sido bloqueada para su seguridad.');
        saldoCuenta = 0;
        limiteExtraccion = 0;         
    }
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
    localStorage.setItem('saldoCuenta', saldoCuenta);
}

function decreaseBalance(monto){
    saldoCuenta -= monto;
    localStorage.setItem('saldoCuenta', saldoCuenta);
}
