/**
 * Created by Owner on 2/3/14.
 */
function solve(sudokuArray) {
    var newSudokuArray = sudokuArray;
    //randomize(newSudokuArray);
    if (checkCorrect(sudokuArray)) {
        alert("ITS RIGHT!");
        return sudokuArray;
    } else {
        alert("shit")
        return sudokuArray;
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
        for(var j = 0; j < 9; j++){
            checker[sudokuArray[j][i] - 1]++;
        }
        for(var f = 0; f < 9; f++){
            if (checker[f] != 1){
                return false;
            }
        }
        checker = [0,0,0,0,0,0,0,0,0]

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
    checker = [0,0,0,0,0,0,0,0,0];
    for(var i = x; i < x + 3; i++){
        for(var j = y; j < y + 3; j++){
            console.log(sudokuArray[i][j]-1);
            checker[sudokuArray[i][j]-1]++;
        }
    }

        for(var f = 0; f < 9; f++){
            console.log(checker[f]);
            if (checker[f] != 1){
                return false;
            }
        }
    return true;
}

}