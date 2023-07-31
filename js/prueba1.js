
function saludo() {//Un saludo  y consigo el nombre del usuario.
    let n;
    do {//Aqui verifico que ingrese un string, y que no entre vacio ni solamente espacios.
        n=prompt("Ingresa tu Nombre:");
    } while ((!isNaN(n)));
    alert(`Bienvenido ${n}`);//Doy el saludo
    return n;
}

let nom=saludo();//Llamo la funcion

let op;
do {
    op=prompt(`Que operacion desea realizar el dia de hoy?${n} \n1: \n2: \n3:`);
} while ((op<=0||op>4)||(isNaN(op)));


switch (op) {
    case 1:
        let mon=prompt('Ingrese la cantidad de pesos que se transformaran a dolares blue.');
        break;
    case 2:
        
        break;
    case 1:
        
        break;
}