/**
 * Created by Owner on 2/3/14.
 */
function solve(sudokuArray) {
    var newSudokuArray = sudokuArray;
    randomize(newSudokuArray);
    if (checkCorrect(sudokuArray)) {
        return sudokuArray;
    } else {
        solve(sudokArray);
    }
}

function checkCorrect(sudokuArray) {
    var checker = [0,0,0,0,0,0,0,0,0];
    var columnTrue = checkCorrectColumn(sudokuArray, checker);
    var boxTrue = checkCorrectBox(sudokuArray, checker);
    if(columnTrue && boxTrue){
        return true;
    }else{
        return false;
    }

function checkCorrectColumn(sudokuArray, checker){
    for(var i = 0; i < 9; i++){
        for(var j = 0; j <9; j++){
            checker[sudokuArray[j][i].value-1]++;
        }
    }
    for(var i = 0; i < 9; i++){
        if (checker[i] != 1){
            return false;
        }
    }
    return true;
}

function checkCorrectBox(sudokuArray, checker){
    if (
    correctBox(sudokuArray, checker, 0, 0) &&
    correctBox(sudokuArray, checker, 0, 3) &&
    correctBox(sudokuArray, checker, 0, 6) &&
    correctBox(sudokuArray, checker, 3, 0) &&
    correctBox(sudokuArray, checker, 3, 3) &&
    correctBox(sudokuArray, checker, 3, 6) &&
    correctBox(sudokuArray, checker, 6, 0) &&
    correctBox(sudokuArray, checker, 6, 3) &&
    correctBox(sudokuArray, checker, 6, 6)
    ) {
        return true;
    } else {
        return false;
    }

}

function correctBox(sudokuArray, checker, x, y) {
    for(var i = x; i < x + 3; i++){
        for(var j = y; j < y + 3; j++){
            checker[sudokuArray[i][j].value-1]++;
        }
    }
    for(var i = 0; i < 9; i++){
        if (checker[i] != 1){
            return false;
        }
    }
    return true;
}

}