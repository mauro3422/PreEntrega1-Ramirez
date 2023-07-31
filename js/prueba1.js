let nombre; //Variable global, para saber como se llama el usuario
function saludo() {//Unsaludo  y consigo el nombre del usuario.

    do {
        nombre=prompt("Ingresa tu Nombre:");
    } while ((!isNaN(nombre)));
    alert(`Bienvenido ${nombre}`);

}

saludo();


