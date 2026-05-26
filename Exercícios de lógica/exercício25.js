let vetor = [];
let notas = 0
for (let i =0; i<3;i++){
    notas = parseInt(prompt("digite uma nota ente 0 e 10"));
    vetor.push(notas);
}
contador = 0
contador1= 0
contador2 = 0
for (let i = 0; i<vetor.length;i++){
if (vetor[i]<5){
    contador = contador + 1
}
if (vetor[i]>=5 && vetor[i] <=7){
    contador1 = contador1 + 1
}
if (vetor[i] > 7){
    contador2 = contador2 + 1
}
}
console.log  ( "abaixo de 5:" + contador);
console.log ("entre 5 e 7:" + contador1);
console.log ("acima de 7:"  + contador2 );