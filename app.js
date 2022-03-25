function calcular() {

let resultado = 0;

let a = parseInt(document.getElementById('txt1').value) ; 
let b = parseInt(document.getElementById('txt2').value) ;

let seleccion = document.getElementById('seleccion');
let valorSeleccionado = seleccion.options[seleccion.selectedIndex].index;


if (isNaN(a) && isNaN(b)) {

    document.getElementById('alerta').innerHTML = `<div class="alert alert-danger" role="alert"> Ingresa tus valores a calcular. </div>`

}  else { 

    switch (valorSeleccionado) {
    
        case 1:
    
        resultado = a + b; 
        
        document.getElementById('alerta').innerHTML = `<div class="alert alert-primary" role="alert"> Resultado: ${resultado} </div>`
    
        break;
    
        case 2:
    
        resultado = a - b; 
        
        document.getElementById('alerta').innerHTML = `<div class="alert alert-primary" role="alert"> Resultado: ${resultado} </div>`
    
        break;
    
        case 3:
    
        resultado = a * b; 
        
        document.getElementById('alerta').innerHTML = `<div class="alert alert-primary" role="alert"> Resultado: ${resultado} </div>`
    
        break;
    
        case 4:
    
        resultado = a / b; 
        
        document.getElementById('alerta').innerHTML = `<div class="alert alert-primary" role="alert"> Resultado: ${resultado} </div>`
    
        break;
    
        default:
    
        break;
    
    
    
    }

}

 
    
}