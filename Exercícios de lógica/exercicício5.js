function Armazenar (){
let produtos = [ "blusa", "vestido", "calça", "saia"];
let valores = [50, 100, 80, 70];
let quantidade = [50, 20, 30, 40];

return { produtos, valores, quantidade}
}
function Pecorrer (){
let final = Armazenar();
for (let i = 0; i<= 3; i++){
console.log ( "produto:" + final.produtos [i]);
console.log ("valor:" + final.valores [i]);
console.log ( "quantidade:" + final.quantidade [i]);
}
return final
}
function Somar () {
    let somar = 0
let calcular = Armazenar ();
let digitado = parseInt(prompt("quantas vezes você quer digitar?"));
for (let i = 0; i < digitado; i++){
   let valor =  parseInt(prompt("digite o primeiro valor"))
somar += valor
}
return somar
}

function Menu (){
console.log ("Escolha uma opção e digite 1 se for para mostrar as opções, valores e quantidade e digite 2 se quiser saber o valor")

let escolha = parseFloat(prompt("digite uma numeração"))  
 switch (escolha){  
     case 1:   
         Pecorrer ();  
     break;  
     case 2:
         let resultado = Somar ();
        console.log (resultado);  
        break;
        default:
        console.log ("númeração não encontrada");
              
 }
}
Menu();