let contador1 = 0
   let contadodr2 = 0
for (let i = 0; i<4; i++){
    let numero = parseInt (prompt("digite um número"))
    if (numero%2 === 0){
        console.log ("O numero:"  + numero  + "é par");
        contador1 = contador1 + 1
       } else{
           console.log ("O numero:"  + numero  + "é impar");
           contador2 = contador2 + 1
       }
    }
    console.log (contador1);
    console.log (contador2);