let numeros = [] 
let digitado = 0
for (let i = 0; i <5; i++){
    digitado = parseInt(prompt("digite um número"));
    numeros.push(digitado)
}
for (let i = 0; i<numeros.length; i++){
    if (numeros [i] > 10){
        console.log (numeros[i]);

    }
}
