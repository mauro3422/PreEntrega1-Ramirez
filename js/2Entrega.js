class user{
    constructor(info){
        this.usuario=info.usuario;
        this.pass=info.pass;
       this.descripcion='';
    }
    changPass(passN){
        this.pass=passN;
        alert('Contraseña cambiada.')
        console.log(this.pass);
    }
    changDescr(desc){
        this.descripcion=desc;
    }
}
function obtenerUsuario() {
    let newUsuario=prompt('Ingrese el nombre de usuario');
    let newUserPass=prompt('Ingrese la contraseña');
    let usuarioN=new user({
        usuario:newUsuario,
        pass:newUserPass,
    })
    return usuarioN;
}

let usuario1= new user(
    {
        usuario:'mauro',
        pass:'123',
    }
)
let usuario2= new user(
    {
        usuario:'isaac',
        pass:'321',
    }
)
let usuarioN;
const usuariosR=[usuario1,usuario2];
let op;
do {//vERIFICO QUE INGRESE UN NUMERO.
    op=prompt(`Bienvenido! ya tienes una cuenta?:\n Registrarse:1\n Iniciar Sesion:2`);
} while (!(!(isNaN(op))||(op==2 || op==1)));

let control;
let userDentro;
if(op==1){
    usuarioN=obtenerUsuario();
    usuariosR.push(usuarioN);
    alert(`Usuario registrado exitosamente`);
}else{
    usuarioN=obtenerUsuario();
    usuariosR.forEach(element => {
        if (element.usuario==usuarioN.usuario && element.pass==usuarioN.pass) {
            console.log('entre');
            userDentro=element;
            control=true;
         return;//Hago esto para detener el foreach ya que encontre el usuario que queria y necesitaba.
        }
    })
}

if(control){
    
    do {//vERIFICO QUE INGRESE UN NUMERO.
        op=prompt(`Bienvenido de vuelta! ${usuarioN.usuario} Que deseas realizar hoy?:\nCambiar contraseña:1\n Añadir o modificar tu descripcion:2\n Ver mis datos:3`);
    } while (!(!(isNaN(op))||(op==2 || op==1||op==3)));
    let temp;
    if (op==1) {
        temp=prompt(`Ingresa tu contraseña Nueva`);
        usuarioN.changPass(temp)
        alert(`Se hicieron  los cambios!`);
    }else if(op==2){
        temp=prompt(`Ingresa tu descripcion Nueva`);
        usuarioN.changPass(temp);
        alert(`Se hicieron  los cambios!`);
    }else{
        alert(`Usuario:${userDentro['usuario']}\nContraseña:${userDentro['pass']}\nDescripcion${userDentro['descripcion']}`)
    }
}else{
    alert(`Usuario no encontrado`);
}
