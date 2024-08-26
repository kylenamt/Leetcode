/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const d = matrix.length; // x = y = d
    //transpose
    for(let i = 0; i<d;i++){
        for(let j = 0; j<d;j++){
            if(i>j){
                const temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }
    //rotate on the vertical axes
    for(let i = 0; i<d;i++){
            matrix[i].reverse();
    }
}
