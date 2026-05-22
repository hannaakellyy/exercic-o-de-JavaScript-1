let quardar = []
let digitado = 0
for (let i = 0; i<5;i++){
    let digitado = parseInt (prompt("digite um número"));
    quardar.push(digitado);
}
let verificar = parseInt (prompt("digite o número que deseja buscar"));
let encontrado = false;
for (let i = 0; i<quardar.length; i++){
    if (quardar [i] == verificar){
        encontrado = true;
    }
}
if (encontrado === true){
    console.log ("numero encontrado");
}else{
    console.log ("numero não encontrado");
}
