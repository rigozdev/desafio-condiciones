//! variables desafio 1
const imgGatito = document.querySelector('#imgGatito');
//* se asigna el valor falso (por defecto) a la variable border
let border = false;


//* aquí a la variable o al addEventListener le perguntamos por el valor de border. Como por defecto le asignamos el valor falso, al cambiarlo dentro del if o dentro del el, la variable cambiará su valor
imgGatito.addEventListener('click',()=>{

    if (border==false) {        
        border=true;
        imgGatito.style.border='1px red solid';
        console.log(border);
        console.log('Se aplica borde');

    }else{
        border=false;
        imgGatito.style.border='none';
        console.log(border);
        console.log('Se quita borde');
    }
});



//! variables desafio 2
const sticker1 = document.querySelector('#sticker1');
const sticker2 = document.querySelector('#sticker2');
const sticker3 = document.querySelector('#sticker3');
const recuento = document.querySelector('#recuentoSticker');
const mensaje = document.querySelector('#mensaje');



recuento.addEventListener('click', ()=>{
    
    const stickerUno = parseInt(sticker1.value);
    const stickerDos = parseInt(sticker2.value);
    const stickerTres = parseInt(sticker3.value);


    console.log('sticker1: ' + stickerUno);
    console.log('sticker2: ' + stickerDos);
    console.log('sticker3: ' + stickerTres);


    const totalStickers = stickerUno + stickerDos + stickerTres;
    console.log('Total stickers: '+totalStickers);
    
    if (isNaN(totalStickers)) {
        mensaje.style.color='red';
        mensaje.textContent = `Ingrese números en los stickers`;
        return;
    }else{
        if (stickerUno < 0 || stickerDos < 0 || stickerTres < 0 ) {
            mensaje.style.color='red';
            mensaje.textContent = `Ingrese valores validos`;
        }else{
            if(totalStickers ==0){

                mensaje.style.color='red';
                mensaje.textContent = `No puedes llevar 0 stickers`;
                console.log(totalStickers);                

            } else if(totalStickers <= 10){

                mensaje.style.color='green';
                mensaje.textContent =`Llevas ${totalStickers} stickers`;
                console.log(totalStickers);


            } else {
                mensaje.style.color='red';
                mensaje.textContent = `Llevas demasiados stickers`;
                console.log(totalStickers);
            }        
        }
        
    }
    

    
});


//! variables desafio 3
//* variables estaticas o duras de contraseñas
const dbPassword1 = 911;
const dbPassword2 = 714;

const primerNumero = document.querySelector('#firstNumber');
const segundoNumero = document.querySelector('#secondNumber');
const tercerNumero = document.querySelector('#thirdNumber');
const ingresoClave = document.querySelector('#ingresoClave');
const mensajeClave = document.querySelector('#mensajeClave')

ingresoClave.addEventListener('click', ()=>{

    const numero1 = parseInt(primerNumero.value);
    const numero2 = parseInt(segundoNumero.value);
    const numero3 = parseInt(tercerNumero.value);

    let pass = numero1 + '' +numero2+ ''+ numero3;
    console.log('Valor ingresado');
    console.log(pass);


    
    if(parseInt(pass) === dbPassword1){
        mensajeClave.textContent = `Password 1 ingresada correctamente`;        
    }else if(parseInt(pass)===dbPassword2){
        mensajeClave.textContent = 'Password 2 ingresada correctamente';
    }else{
        mensajeClave.textContent = `Password incorrecto, ha ingresado ${parseInt(pass)}`;
    }   
    
});