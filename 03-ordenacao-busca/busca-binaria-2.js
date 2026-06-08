let notas  = [10,20,60,80,90];

function ordenar (A,N){
for (let i = 0; i<N; i++){
    for (let j = 0; j < N-1; j++){
        if (A[j]>A[j+1]){
            let aux = A[j]
            A[j] = A[j+1]
            A[j+1] = aux
        }
    }
}
}
ordenar (notas, notas.length);
console.log (notas);

let valor = parseInt (prompt("digite uma valor que você quer procurar"));
let inicio = 0
let final = notas.length - 1
let posição = -1

while (inicio<=final){
    let meio = Math.floor((final+inicio)/2)
    if (notas[meio] == valor){
        posição = meio
    } if (notas[meio]< valor){
        inicio = meio +1
    }else{
        final = meio - 1
    }
}

if (posição !== -1){
    console.log ("o número foi encontrado na posição" + posição);
}else{
    console.log ("o número não foi encontrado");
}

