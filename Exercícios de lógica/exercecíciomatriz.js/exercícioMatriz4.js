let faturamento = [
    [100, 250, 180],
    [ 300, 150, 400],
    [ 220, 500, 120]
    ];
    let maior = faturamento [0][0]
    for (let i = 0; i< faturamento.length; i++){
        for (let j = 0; j < faturamento[i].length; j++){
             if (faturamento [i][j] > maior ){
                 maior = faturamento [i][j]
             }
        }
    }
    console.log (maior);