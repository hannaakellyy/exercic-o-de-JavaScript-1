let nota;
let i = 0;
do{
nota = parseInt(prompt("digite uma nota"));
if ( nota >= 6){
console.log ("aprovado");
}else{
    console.log ("reprovado");
}
i++;
} 
while (i<3)
console.log ("você terminou sua calculadora de média aqui");