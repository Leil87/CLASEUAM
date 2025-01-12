let frutas = {
    kiwi: {
        color: ['café', 'verde'],
        elementoCaracteristico: 'es aspero por fuera',
        sabor: 'Fresco y agridulce'
    },
    fresa: {
        color: ['rojo'],
        elementoCaracteristico: 'intenso aroma',
        sabor: 'Dulce y de forma como diamante'
    },
    platano: {
        color: ['amarillo', 'verde'],
        elementoCaracteristico: 'se puede pelar',
        sabor: 'Dulce y cremoso'
    },
    piña: {
        color: ['amarillo', 'verde'],
        elementoCaracteristico: 'tiene corona',
        sabor: 'Fresca y agridulce'
    },
    pepino: {
        color: ['verde'],
        elementoCaracteristico: 'largo y con semillas',
        sabor: 'Fresco'
    }
};

// console.log(frutas)

let identificadorFrutas = document.getElementById('frutas')
let keys = Object.keys(frutas)

// ['kiwi', 'fresa', 'platano', 'piña', 'pepino']

for(let i = 0; i < keys.length; i++){
    let hijo = document.createElement('div')
    hijo.innerText = keys[i] + JSON.stringify(frutas[keys[i]])
    identificadorFrutas.appendChild(hijo)
}