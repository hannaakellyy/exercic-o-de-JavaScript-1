let nome = 0
let preco = 0
let nomeV = [];
let precoV = [];
for (let i = 0; i<2;i++){
    let nome = prompt ("digite o nome do produto");
    let preco = parseFloat (prompt("digite o preço do produto"));
    nomeV.push(nome);
    precoV.push(preco);
}
let maior = precoV[0]
for (let i = 0; i<precoV.length;i++){
    if (precoV[i]>maior){
    maior = precoV[i]
    }
}
let média = 0
let somar = 0
for (let i = 0; i<precoV.length;i++){
    somar = somar + precoV[i]
}
média = somar/precoV.length
console.log (nomeV);
console.log (maior);
console.log (média);