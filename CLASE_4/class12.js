let vln = "Popocatepétl"

for(i=0; i< vln.length; i++){
    console.log (vln[i]);
}

let cosa = ['o','-','-','-','-','-']

for (i = 0; i < cosa.length; i++){

    if (cosa[i] == 'o') {
    }
    else{
        cosa[i] = 'o'
        console.log(cosa[i]);
        console.log(cosa);
    }

}

function cuentaT (palabra){
    let resultado = 0; 
    for (i=0; i < palabra.length; i++){
        if (palabra[i]== "t"){
            resultado ++;

        }   
    }
    return resultado
}
console.log(cuentaT(vln));

function getRandomColot(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i =0; i < 6; i++){
        color += letters[getRandomInt(0, 16)];
        color = color + letters[getRandomInt(0,16)]
    }
    return color;
}

function creaTexto()