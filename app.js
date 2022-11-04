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