let vetor = [];
let ditado = 0
for (let i = 0; i<3;i++){
    digitado = parseInt(prompt("digite um número"));
    vetor.push(digitado);
}
let pares = [];
let ímpares = [];
for (let i =0; i<vetor.length; i++){
    if (vetor[i]%2 === 0){
      pares.push(vetor[i])
      }else if (vetor[i]%2 ==! 0){
          ímpares.push(vetor[i])
      }
}
console.log (pares);
console.log (ímpares);