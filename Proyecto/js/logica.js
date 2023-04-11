var numero = 74 //Palabra obsoleta
let numero2 = numero + 5 //Palabra reservada LET
numero3 = 'WEB'
const pi = 3.1416

let vector = [0,22,44,66,88,101,112,114];

if (numero == 74) {
    console.log('El "valor" es 75')
    //console.log(´Usted es 'menor' de edad, porque tiene $(numero) años´);
    //window.alert('El valor es 75')
} else {
    console.log('El "valor" no es 75')
    //window.alert('El valor no es 75')
}

for (item of vector)
{
    console.log(item)
}


//console.log('Valor de la función Suma:' + funcionSuma());

//Forma anterior
function funcionSumaAnt(){
    num1 = prompt('Por favor ingresa un número')
    num2 = prompt('Por favor ingresa otro número')
    let suma = eval(num1) + eval(num2)
    alert(suma)
}

//Forma actual
funcionSumaAct = ()=> {
    num1 = prompt('Por favor ingresa un número')
    num2 = prompt('Por favor ingresa otro número')
    let suma = eval(num1) + eval(num2)
    alert(suma)
}


let miBoton = document.getElementById('elBoton')
console.log(miBoton)