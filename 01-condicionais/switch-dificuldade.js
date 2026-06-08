const itens = ["1","2","3"];
for (let i = 0; i < itens.length; i++ ) {
    switch (itens [i]) {
        case "1":
        console.log ("fácil");
        break;
        case "2":
        console.log ("médio");
        break;
        case "3":
        console.log ("dificíl");
        break;
        default:
        console.log ("item não encontrado");
    }
}