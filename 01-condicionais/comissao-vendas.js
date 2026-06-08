for (let i = 1; i<=3; i++){
let nome = prompt ("digite seu nome");
let venda1 = parseFloat (prompt ("digite o valor da venda 1"));
let venda2 = parseFloat (prompt("digite o valor da venda 2"));
let total = venda1 + venda2
if ( total >= 5000) {
    console.log ("comissão de 10%");
    console.log ("Alta");
}
    else if (total >= 2000){
        console.log ("comissão de 5%");
        console.log ("Média");
    }
else {
    console.log ("sem comissão");
    console.log ("Baixa");
}
console.log ( nome, "seu total é:", total );
}

