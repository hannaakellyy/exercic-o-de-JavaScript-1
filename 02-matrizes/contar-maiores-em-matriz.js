let contador = 0
let matriz =  [ [2,4,5], [4,6,7], [8,4,6] ];
for (let i = 0; i < matriz.length; i++){
    for (let j = 0; j < matriz[i].length; j++){
   if (matriz [i][j] >= 7){
       
   contador = contador + 1
    }
}
}
console.log (contador);
