let nombres = ["Diana", "Yamileth", "America", "Barbara"]; //ejercicio 1
console.log(nombres[3]);

nombres.unshift("Isai"); //ejercicio 2
console.log(nombres);
nombres.push("Jorge"); 
console.log(nombres);

let numeros = [1,2,3,4,5,6,7,8,9]; //ejercicio 3
let impares = numeros.filter(num => num % 2 !== 0);
console.log(impares);

let frutas1 = ["fresa","kiwi","manzana","uva"]; //ejercicio 4
let frutas2 = ["pera","fresa", "sandía", "uva"];
let combinado = frutas1.concat(frutas2);
combinado.pop();
combinado.shift();
console.log(combinado);

let num = [1,2,3,4,5,6,7]; //ejercicio 5
num.reverse();
console.log(num);

let n = [2,4,6,8,10]; //ejercicio 6
let dobles = n.map(num => num * 2);
console.log(dobles);

let edades = [12,19,8,21,53,5]; //ejercicio 7
let mayor = edades.filter(num => num > 18);
console.log(mayor);

let puntajes = [119.21,122.91,91.58,176.41]; //ejercicio 8 //resultado de suma=510.11
let suma = puntajes.reduce((total, num) => total + num, 0);
console.log(suma);

let colores = ["azul","blanco","verde","rosa","beige"]; //ejercicio 9
colores.splice(0,1);
colores.splice(3,4);
console.log(colores);

let nu = [3,2,6,9,12,21,7]; //ejercicio 10
let verifica = nu.includes(10);
console.log(verifica);
