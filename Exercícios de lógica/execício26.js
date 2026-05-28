let somador = 0
let matriz =  [ [2,4,5], [4,6,7], [8,4,6] ];
for (let i = 0; i < matriz.length; i++){
    for (let j = 0; j < matriz[i].length; j++){
   somador = somador + matriz [i][j]     
    }
}
console.log (somador);
