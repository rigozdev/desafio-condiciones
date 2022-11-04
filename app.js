//! variables desafio 1
const imgGatito = document.querySelector('#imgGatito');
//* se asigna el valor falso (por defecto) a la variable border
const border = false;


//* aquí a la variable o al addEventListener le perguntamos por el valor de border. Como por defecto le asignamos el valor falso, al cambiarlo dentro del if o dentro del el, la variable cambiará su valor
imgGatito.addEventListener('click',()=>{

    if (border==false) {        
        border=true;
        imgGatito.style.border='1px red solid';

    }else{
        border=false;
        imgGatito.style.border='';
    }
});

//! variables desafio 2
const sticker1 = document.querySelector('#sticker1');
const sticker2 = document.querySelector('#sticker2');
const sticker3 = document.querySelector('#sticker3');
const recuento = document.querySelector('#recuentoSticker');
const mensaje = document.querySelector('#mensaje');



recuento.addEventListener('click', ()=>{
    const total = parseInt(sticker1.value) + parseInt(sticker2.value) + parseInt(sticker3.value);
    
    if(total <= 10){
        mensaje.style.color='green';
        mensaje.textContent =`Llevas ${total} stickers`;
        console.log(total);
    } else {
        mensaje.style.color='red';
        mensaje.textContent = `Llevas demasiados stickers`;
        console.log(total);
    }
});


//! variables desafio 3
const dbPassword1 = 911;
const dbPassword2 = 714;
const primerNumero = document.querySelector('#firstNumber');
const segundoNumero = document.querySelector('#secondNumber');
const tercerNumero = document.querySelector('#thirdNumber');
const ingresoClave = document.querySelector('#ingresoClave');
const mensajeClave = document.querySelector('#mensajeClave')

ingresoClave.addEventListener('click', ()=>{
    let pass = primerNumero.value + segundoNumero.value + tercerNumero.value;
    console.log(parseInt(pass));

    if(parseInt(pass) === dbPassword1){
        mensajeClave.textContent = 'Password1 Correcto';
    }else{
        if(parseInt(pass)===dbPassword2){
            mensajeClave.textContent = 'Password2 Correcto';
        }else{
            mensajeClave.textContent = 'Password Incorrecto';
        } 
    }
});