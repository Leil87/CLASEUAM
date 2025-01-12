// //Ejemplo 1 for Loop
// for (let i = 0; i < 5; i++) {
//     console.log( + i);
// }
// // Salida: Iteración número 0, Iteración número 1, ..., Iteración número 4

// //Ejemplo 2 forEach Loop
// const numeros = [1, 2, 3, 4, 5];
// numeros.forEach(function(numero) {
//     console.log("Iteración número " + numero);
// });
// // Salida: Número: 1, Número: 2, ..., Número: 5

// //Ejemplo 3 Arrow Function
// numeros.forEach(numero => console.log("Número: " + numero));

// //Iteración de Strings
// const texto = "Hola";
// for (let i = 0; i < texto.length; i++) {
//     console.log(texto[i]);
// }
// // Salida: H, o, l, a

// //iteración con forEach
// texto.split('').forEach(char => console.log(char));
// // Salida: H, o, l, a

  //Ejercicio 1
const numeros = [8, 5, 3, 4, 5];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log("Resultado:", suma);
  //Ejercicio 2
const num = [2, 4, 6, 8];
let producto = 1;
num.forEach(numero => {
    producto *= numero;
  });
  console.log("Resultado:", producto);
  //Ejercicio 3
const frase = "Mi mamá mima mucho a María";
let contador = 0;

for (let i = 0; i < frase.length; i++) {
  if (frase[i].toLowerCase() === 'a') {
    contador++;
  }
}
console.log(frase ,`.La letra "a" aparece ${contador} veces en la frase.`);

  //Ejercicio 4
function reverse(string){
    let palabraInvertida = '';
    for (let i = string.length - 1; i >= 0; i--) {
        palabraInvertida += string[i];
    }
    return palabraInvertida;
}

const string = "Pelota";
const palabraInvertida = reverse(string);
console.log(string,"=",palabraInvertida);
  //Ejercicio 5

const n = [10, 20, 30, 40, 50]; 
let sum = 0;
numeros.forEach(num => {
  sum += num;
});

const promedio = sum / numeros.length;
console.log("El promedio es:", promedio);

  //Ejercicio 6
function Mayusculas(str) {
    let resultado = '';
    for (let i = 0; i < str.length; i++) {
        resultado += str[i].toUpperCase();
    }
    return resultado;
}

let texto = "tengo sueño";
let textoMayusculas = Mayusculas(texto);
console.log(textoMayusculas); 

  //Ejercicio 7
const Original = [1, 2, 3, 4, 5]; 
const Cuadrados = []; 
for (let i = 0; i < Original.length; i++) {
    Cuadrados.push(Original[i] ** 2);
}
console.log(Cuadrados); 
  
//Ejercicio 8
function Pares(array) {
    let pares = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        pares.push(array[i]);
      }
    }
    return pares;
  }
  
  const nu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const pares = Pares(nu);
  console.log(pares); 

  //Ejercicio 9
  function contarPalabras(oracion) {
    let palabras = oracion.split(' '); 
    let contador = 0;
  
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i] !== '') {
        contador++;
      }
    }
  
    return contador;
  }

  let oracion = "Hace mucho frío";
  console.log(oracion,":", contarPalabras(oracion));
 
  //Ejercicio 10
  function TablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

TablaMultiplicar(4);
 



