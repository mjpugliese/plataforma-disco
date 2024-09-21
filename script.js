//declaracion

// function cantarCumple (nombre){
//     console.log("Que los cumplas feliz.")
//     console.log("Que los cumplas feliz.")
//     console.log("Que los cumplas, " + nombre)
//     console.log("Que los cumplas feliz.")
//   }

//ejecucion de la funcion 
//cantarCumple("Maxi")

// function areaCuadrado (lado){
//     console.log("el area del cuadrado es:" + (lado*lado))
// }

// areaCuadrado(5)
// let h1 = document.querySelector('h1')

// function saludar (nombre1, apellido1, nombre2, apellido2){
//    h1.textContent= "Hola " + nombre1 + " y hola "+ nombre2
//     alert("tu apellido es " + apellido1)
//     alert(apellido2)
// }
// saludar("Maxi", "Pugliese", "Caro", "FL")
 //hola maxi y hola undefined

//  function multiplicar (num1=5, num2=1){
//     console.log(num1*num2)
//  }

//  function sumar (num1, num2){
//     alert(num1+num2)
//  }


// function cantarCumple(persona) {
//     console.log("¡Que los cumplas feliz, " + persona + "!");
//   }
  
//   let nombre = prompt("¿Quién cumple años hoy?");
//   cantarCumple(nombre);

// let nombre = "Juan"; // nombre es una Variable Global.
// let apellido = "Lopez"; // apellido ahora es una Variable Global.

// function saludar() {
//     let nombre = "Maxi"
//   console.log("Hola, " + nombre + " " + apellido);
// }
// saludar();
// function despedir() {
//     let nombre = "Pedro"
//   console.log("Chau, " + nombre + " " + apellido);
// }

// despedir();

// let edad = 32

// function mostrarEdad() {
//     let edad = 44
//     console.log("La edad es " + edad)
// }

// mostrarEdad()

// console.log("La edad es " + edad)

function cuadrado(numero) {

    if(typeof(numero)!== 'number' ){
        return "Tipo de dato incorrecto"
    }

    let valor = numero * numero 
    return valor
  }

 let resultado = cuadrado(4)
 let resultado2 = cuadrado('maxi')





 saludar1()

 function saludar1 (){
   console.log("Hola")
 }

 
 const saludar2 = function(){
     console.log("Aloha")
    }

    saludar2()

    function multiplicar (numero){
        return numero * 2
    }

    // const multiplicarArrow = (numero)=>{
    //     return numero * 2
    // }

    const multiplicarArrow = (nombre, apellido) => nombre + " HOLA"
    
    let resultado3 = multiplicarArrow(10)
    





    function fn(num, fnCallback) {
        return fnCallback(num);
      }
      
      fn(5, (a) => {
        return a * 10;
      }); // 50

      
      fn(25, (a) => {
        return a / 5;
      }); // 5