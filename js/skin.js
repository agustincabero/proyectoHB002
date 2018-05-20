//En este archivo esta todo el JS necesario para modificar el skin del Home Banking
document.getElementById('switch').addEventListener('click', changeMod);


function changeMod() {  
    document.body.classList.toggle('night-mode');
    document.getElementById('nombre').classList.toggle('night-mode');  
    var whiteContainer = document.getElementsByClassName('white-container');
    whiteContainer[0].classList.toggle('night-mode');
    var tuCuenta = document.getElementsByClassName('tu-cuenta');
    tuCuenta[0].classList.toggle('night-mode');      
}
