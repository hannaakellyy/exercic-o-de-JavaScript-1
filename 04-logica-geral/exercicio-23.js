let vetor = [1,1,2,3,3,3];
let contador = 0
for (let i = 0; i<vetor.length; i++){
    if (vetor[i]===3){
        contador = contador + 1
    }
}
console.log (contador);