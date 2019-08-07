var board = [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0]
]
var isSafe = function isSafe(board, row, col, num) {

    for (var i = 0; i < board.length; i++) {
        if (board[row][i] === num)
            return false;
    }
    for (var i = 0; i < board.length; i++) {
        if (board[i][col] === num)
            return false;
    }
    var boxRowStart = row - row % 3;
    var boxColStart = col - col % 3;
    for (var i = boxRowStart; i < boxRowStart+3; i++)
        for (var j = boxColStart; j < boxColStart+3; i++)
            if (board[i][j] == num)

                return false;
    return true;
}

var y = function (board) {
    var row = -1;
    var col = -1;

    var isEmpty = true;
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            if (board[i][j] === 0) {
                row = i;
                col = j;
                isEmpty = false;
                break;
            }
        }
        if (!isEmpty) {
            break;
        }
    }
    if (isEmpty) {
        return true;
    }

    for (var i = 1; i <= 9; i++) {
        if (isSafe(board, row, col, i)) {

            board[row][col] = i;
            if (y(board)) {
                return true;
            } else {
                board[row][col] = 0;

            }

        }
    }
    return false;
}


var pr = function (board) {
    var z = "";
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board.length; j++) {
            z = z + board[i][j] + " ";
        }
        z = z + "\n";
    }
    console.log(z);
}

pr(board);
y(board);
console.log("\n");

pr(board);