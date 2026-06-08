let numeros = [90,5,80,70,100];

function ordenar (A,N){
    for (let i=0; i<N; i++){
        let min = i
        
        for (let j = i+1; j<N; j++){
            if (A[j] < A[min]){
              min = j
            }
        }
     let aux = A[i]
     A[i]= A[min]
     A[min] = aux
    }
}
ordenar (numeros, numeros.length)
console.log (numeros);
