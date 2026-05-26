let vetor = [1,1,2,3,3,3];
let contador = 0
let contador1 = 0
let contador2 = 0
for (let i = 0; i<vetor.length; i++){
    if (vetor[i]===3){
        contador = contador + 1
    }
    if (vetor[i]===1){
    contador1 = contador1 + 1
}
if (vetor[i]===2){
 contador2 = contador2 + 1 
}
}
console.log (contador);
console.log (contador1);
console.log (contador2);