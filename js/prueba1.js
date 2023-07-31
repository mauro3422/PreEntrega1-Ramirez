const P_DOLAR=550; //Constante de precio del dolar blue
let n; //Nombre global
let MontoDevolver;//Dolar a devolver, lo hago global para no declararla varias veces si es que entran a la funcion varias veces.
function saludo() {//Un saludo  y consigo el nombre del usuario.

    do {//Aqui verifico que ingrese un string, y que no entre vacio ni solamente espacios.
        n=prompt("Ingresa tu Nombre:");
    } while ((!isNaN(n)));
    alert(`Bienvenido ${n}`);//Doy el saludo
}
function Convertidor(monto,op){

    if(op==1){
        MontoDevolver=monto/P_DOLAR;
        alert(`Te corresponde $${MontoDevolver} USD`);
    }else{
        MontoDevolver=monto*P_DOLAR;
        alert(`Te corresponde $${MontoDevolver} P ARG`);
    }

    

}
saludo();//Llamo la funcion

let op;

let mon;
let opD;
do {
    do {
        op=prompt(`Que operacion desea realizar el dia de hoy?${n} \n1:Pesos Arg a Dolar blue \n2:Dolar a pesos Arg \n3:Cambiar nombre de usuario`);
    } while ((op<=0||op>4)||(isNaN(op)));
    
    switch (op) {
        case "1":
            mon=prompt('Ingrese la cantidad de pesos que se transformaran a dolares blue.');
            Convertidor(mon,op);
            break;
        case "2":
            mon=prompt('Ingrese la cantidad de Dolares a Peso Arg(Devuelve el monto blue)');
            Convertidor(mon,op);
            break;
        case "3":
            saludo();
            break;
    }
    do {
        opD=prompt(`Desea hacer alguna otra operacion?\n si \n no`);
    } while ((!isNaN(n)));    
    
} while ('si'==opD.toLowerCase());

