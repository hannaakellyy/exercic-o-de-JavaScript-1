let digitado = 0
let contador1 = 0
let contador2 = 0
let numero = []
for (let i = 0; i<10; i++){
    digitado = parseInt(prompt("digite um número"));
    if (digitado < 0){
        contador1 = contador1 + 1
    }else if (digitado > 0){
    contador2 = contador2 + 1
}
    numero.push(digitado);
}
console.log (contador1);
console.log (contador2);