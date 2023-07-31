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
        alert(`Te corresponde $${parseInt(MontoDevolver)} USD`);
    }else{
        MontoDevolver=monto*P_DOLAR;
        alert(`Te corresponde $${MontoDevolver} P ARG`);
    }

    

}
saludo();//Llamo la funcion
//Declaro las variables afuera del do while para que no se pisen dentro del dowhile.
let op;//Opcion de la operacion
let mon;//Monto que recibimos del usuario
let opD;//Opcion de salida del usuario
do {
    do {
        op=prompt(`Que operacion desea realizar el dia de hoy?${n} \n1:Pesos Arg a Dolar blue \n2:Dolar a pesos Arg \n3:Cambiar nombre de usuario`);
    } while ((op<=0||op>4)||(isNaN(op)));//Si la opcion no se encuentra entre 0 y 4 O si entra un string devolvera un true y el ciclo se repetira.
    
    switch (op) {//Los casos que tomara depediendo de lo que haya elegido el usuario
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
    do {//Verifico que el usuario elija unas de las opciones que se pueden.
        opD=prompt(`Desea hacer alguna otra operacion?\n si \n no`);
    } while ((!isNaN(n))||(!(opD.toLowerCase()==="si"||(opD.toLowerCase()==="no"))));//Si entra un numero  O !(entra si O entra No) Cualquiera de los casos si me devuelve true se repetira el ciclo.
    
} while ('si'==opD.toLowerCase());//Verifico  si el usuario quiere hacer algo de las opciones.

alert(`Regresa pronto! ${n}`)