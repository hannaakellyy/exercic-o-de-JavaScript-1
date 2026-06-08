let vetor = [];
let digitado = 0
for (let i = 0; i<5; i++){
    digitado = parseInt(prompt("digite um número"));
    vetor.push(digitado);
}
let ivertido = [];
for (let i = vetor.length - 1; i>= 0; i--){
    ivertido.push(vetor[i]);
}
console.log (ivertido);
