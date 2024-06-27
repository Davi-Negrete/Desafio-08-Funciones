import './style.css'

/////////////////////////////////////////////////////////////

 //! POR FAVOR DESCOMENTAR EL CODIGO PARA QUE SE EJECUTE (Quitar el /* en linea 7) y al final (Quitar el */ en linea 251)

/*   console.warn('Primer Ejercicio')

let Primer_Numero = parseFloat(prompt('Ingresa un Primer numero'));
let Segundo_Numero = parseFloat(prompt('Ingresa un Segundo numero')); 

console.log('Antes del intercambio de variables:');
console.log(`Primer_Numero es igual a ${Primer_Numero}`);
console.log(`Segundo_Numero es igual a ${Segundo_Numero}`);

let temp = Primer_Numero
Primer_Numero = Segundo_Numero
Segundo_Numero = temp

console.log('Después del intercambio de valores:');
console.log(`Primer_Numer es igual a ${Primer_Numero}`);
console.log(`Segundo_Numero es igual a ${Segundo_Numero}`);

///////////////////////////////////////////////////////////

 console.warn('Segundo ejercicio')

let num1 = parseFloat(prompt('Ingrese un primer numero'))
let num2 = parseFloat(prompt('Ingrese un segundo numero'))


const Comparador = function(num1, num2) {
    
    if (num1 > num2) {
        console.log(num1 + ' ' + 'es mayor que' + ' ' + num2)
    } else if (num1 === num2) {
        console.log(num1 + ' ' + 'es igual que' + ' ' + num2)
    } 
    else {
        console.log(num1 + ' ' + 'es menor que' + ' ' + num2)
    }
    
}

Comparador(num1, num2)

 ////////////////////////////////////////////////////////////
 
 console.warn('Tercer Ejercicio')

 let number1 = parseFloat(prompt('Ingresa un numero'))

 const Identificador_Par_Impar = (number1) => {
    
    if (number1 % 2 === 0) {
        console.log(number1 + ' ' + 'es un numero PAR')
    } else {
        console.log(number1 + ' ' + 'es un numero IMPAR')
    }

 }

 Identificador_Par_Impar(number1)

 //////////////////////////////////////////////////////////////

console.warn('Cuarto Ejercicio')

let precioOriginal = parseFloat(prompt('Ingrese el valor del producto que va a comprar'))
let porcentajeDescuento = parseFloat(prompt('Ingrese el porcentaje de descuento que tiene su tarjeta de regalo o bonus para aplicarselo a su producto'))

const Precio_Final = function(precioOriginal, porcentajeDescuento) {
    return precioOriginal - (precioOriginal * porcentajeDescuento) / 100;
  }

console.log(`El precio final despues de aplicar el descuento es de ${Precio_Final(precioOriginal, porcentajeDescuento)}`)

/////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Quinto Ejercicio')

let radio_C = parseFloat(prompt('Ingresa un valor al azar en cm para el radio de un circulo. En casso de usar Decimales, usar .'))

const Calculador_Area_C = radio_C => 3.1416 * (radio_C * radio_C)

const Resultado_Area_C = Calculador_Area_C(radio_C)
console.log('El resultado del area del circulo es de' + ' ' + Resultado_Area_C + ' ' + 'cm cuadrados')

///////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Sexto Ejercicio')

let temperatura_Celsius = parseFloat(prompt('Ingresa un valor de temperatura en grados CELSIUS'))

const Convertidor_Celsius_Fahrenheit = temperatura_Celsius => (1.8 * temperatura_Celsius) + 32


const temperatura_Fahrenheit = Convertidor_Celsius_Fahrenheit(temperatura_Celsius)
console.log('El valor de esa temperatura en grados FAHRENHEIT es de' + ' ' + temperatura_Fahrenheit)

/////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Septimo Ejercicio')

let Conteo = prompt('En sus marcas, listos..., (escribe la palabra FUERA para iniciar la cuenta ascendente de 1 al 10')

let FUERA = 'FUERA'

function Inicializador_Conteo(FUERA) {
    if (Conteo === FUERA) {
        for (let i = 1; i < 11; i++) {
            console.log(i)
        }
        console.log('Se finalizó la cuenta')
    } else {
        console.log('No ingresaste la palabra FUERA )=')
    }
}

Inicializador_Conteo(FUERA)

////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Octavo Ejercicio')

let numero;

while (true) {
  numero = parseFloat(prompt('Ingresa un número (o un número negativo para salir):'));

  if (numero < 0) {
    break;
  } else {
    console.log(`Has ingresado: ${numero}`);
  }

}

console.log(`Has ingresado ${numero} y has salido del bucle!`);
 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Noveno Ejercicio')

const Numero_Tabla_Multiplicar = parseInt(prompt('Ingrese un Numero para ver suy tabla de Multiplicar del 1 al 10'))

if (isNaN(Numero_Tabla_Multiplicar)) {
    console.log('No has ingresado un numero, por favor ingresa un numero valido')
} else {
    console.log(`La tabla de multiplicar del 1 al 10 de ${Numero_Tabla_Multiplicar} es :`)
    
    for (let i = 1; i <= 10; i++) {
        console.log(`${Numero_Tabla_Multiplicar} X ${i} = ${Numero_Tabla_Multiplicar * i}` )
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Decimo Ejercicio')

function sumaPares() {
    let suma = 0;
    for (let i = 2; i <= 100; i = i + 2) {
      suma += i;
    }
    return suma;
  }
  
console.log(`El Resultado de la suma de todos los numeros pares de 1 al 100 es de ${sumaPares()}`);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Decimo Primer Ejercicio')

const Persona = {

    nombre: 'Kevin', 
    apellido: 'Florez', 
    edad: '21', 
    ciudad: 'Buenos Aires'

}

const Presentarse = (Persona) => {
    console.log(`Hola, mi nombre es ${Persona.nombre}, mi apellido es ${Persona.apellido}, tengo ${Persona.edad} años y vivo en la ciudad de ${Persona.ciudad}`)  
}

Presentarse(Persona)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.warn('Decimo Segundo Ejercicio')

const Array_Personas = [

    {
        nombre: 'Kevin', 
        apellido: 'Florez', 
        edad: '21', 
        ciudad: 'Buenos Aires'
    },

    
    {
        nombre: 'Daniel', 
        apellido: 'Hernandez', 
        edad: '34', 
        ciudad: 'Madrid'
    },

    
    {
        nombre: 'Bryan', 
        apellido: 'Willis', 
        edad: '28', 
        ciudad: 'New York'
    },

    
    {
        nombre: 'Luis', 
        apellido: 'Ortiz', 
        edad: '45', 
        ciudad: 'Bogota'
    }

]

const Presentar_Personas = function (Array_Personas) {
    for (let i = 0; i < Array_Personas.length; i++) {
        console.log(Array_Personas[i])
    }
}

Presentar_Personas(Array_Personas)

 //////////////////////////////////////////////////////////////////////////////

 console.warn('Decimo Tercer Ejercicio')


 const Array_Numeros = [10, 23, 344, 543, 23, 145, 2675, 34]

 const PromedioArrayNumeros = (Array_Numeros) => {
    let total = 0 
    for (let i = 0; i < Array_Numeros.length; i++) {
        total = total + Array_Numeros[i]
     } 
    return total / Array_Numeros.length
 }  

 const ResultadoPromedio = PromedioArrayNumeros(Array_Numeros)
 console.log(`El Promedio del Array de numeros es ${ResultadoPromedio}`)   */
 
 //! POR FAVOR DESCOMENTAR EL CODIGO PARA QUE SE EJECUTE (Quitar el */ en linea 251)

 //////////////////////////////////////////////////////////////////////////////////////////