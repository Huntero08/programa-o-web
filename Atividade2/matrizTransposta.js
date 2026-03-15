function transporMatriz(A) {

    console.log("Matriz original:");
    console.log(A);

    let linhas = A.length;
    let coluns = A[0].length;

    let transposta = [];

    for (let i = 0; i < coluns; i++) {
        transposta[i] = [];

        for (let j = 0; j < linhas; j++) {
            transposta[i][j] = A[j][i];
        }
    }

    console.log("Matriz transposta:");
    console.log(transposta);
}

let matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matriz);

// atualização