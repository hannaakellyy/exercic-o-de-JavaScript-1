let vetor = [20,40,5,8,90];

function ordenação (A,N){
    for (let i = 0; i<N; i++){
        for (let j = 0; j<N-1; j++){
            if (A[j]>A[j+1]){
                let aux = A[j]
                A[j] = A[j+1]
                A[j+1]= aux
            }
        }
    }
}
ordenação (vetor, vetor.length);
console.log (vetor);

let valor = parseInt(prompt("digite o valor que voce quer procurar"));
let inicio = 0
let final = vetor.length -1
let posição = -1

while (inicio <= final){
    meio = Math.floor((final + inicio)/2);
    if (vetor[meio] === valor){
        posição = meio 
        break;
    }else if (vetor[meio] < valor){
        inicio = meio + 1
    }else{
        final = meio - 1
    }
}
if (posição !== -1){
    console.log ("O valor está na posição:" + posição);
}else{
    console.log ("o valor não foi encontrado");
}