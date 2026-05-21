let numeros = [] 
let digitado = 0
for (let i = 0; i <5; i++){
    digitado = parseInt(prompt("digite um número"));
    numeros.push(digitado)
}
let somar = 0
for (let i = 0; i<numeros.length; i++){
    somar = somar + numeros [i]
}
console.log (somar);