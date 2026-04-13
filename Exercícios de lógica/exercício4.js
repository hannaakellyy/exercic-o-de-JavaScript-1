let número = "2"

switch (número){
    case "1":
    console.log ("irá ser direcionado para o setor de fies");
    break;
    case "2":
    console.log ("irá ser direcionado para o setor de finanças");
    break;
    case "3":
    console.log ("será direcionado para o setor de matrículas");
    break;
    default:
    console.log ("o número digitado não foi encontrado");
}
  
// Aprimorado
let escolha = parseInt(prompt("digite 1 se o seu caso for Fies, 2 se for financeiro e 3 se for novas matrículas"));

switch (escolha){
    case 1:
    console.log ("irá ser direcionado para o setor de fies");
    break;
    case 2:
    console.log ("irá ser direcionado para o setor de finanças");
    break;
    case 3:
    console.log ("será direcionado para o setor de matrículas");
    break;
    default:
    console.log ("o número digitado não foi encontrado");
}