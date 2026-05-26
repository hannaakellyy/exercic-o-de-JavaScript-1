let nome = 0
let nomeV = [];
let nota = 0
let notaV = [];
for (let i = 0; i<2;i++){
    nome = prompt ("digite seu nome");
    nota = parseFloat(prompt("digite sua nota"));
    nomeV.push(nome);
    notaV.push(nota);
}
let média = 0
let contador = 0
for (let i = 0; i<notaV.length;i++){
    contador = contador + notaV[i]
    média = contador/notaV.length
}
console.log (média);
let maior = notaV [0];
for (let i = 0; i<notaV.length;i++){
    if (maior< notaV[i]){
        maior = notaV[i]
    }
}
  console.log (maior); 
let menor = notaV [0];
for (let i = 0; i< notaV.length; i++){
    if (menor> notaV[i]){
        menor = notaV[i]
    }
}
console.log (menor);
let contador2 = 0
    for (let i = 0; i< notaV.length; i++){
        if (notaV[i] >= 7){
            contador2 = contador2 + 1
        }
    }
    console.log (contador2);
    