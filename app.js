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