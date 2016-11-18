var rows = 7;
var cols = 7;
var squareSize = 50;


var gameBoardContainer = document.getElementById("gameboard");


for (i = 0; i < cols; i++) {
    for (j = 0; j < rows; j++) {

        var square = document.createElement("div");
        gameBoardContainer.appendChild(square);

        square.id = 's' + j + i;

        var topPosition = j * squareSize;
        var leftPosition = i * squareSize;


        square.style.top = topPosition + 'px';
        square.style.left = leftPosition + 'px';
    }
}
var hitCount = 0;

var gameBoards = [ [
    [0, 0, 0, 0, 0, 0, 1],
    [0, 1, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0],
],[
    [0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
],[
    [0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0],
],[
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 0, 1],
    [0, 1, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0],
],[
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1],
  ]
  ]

var gameBoard = gameBoards[0];

gameBoardContainer.addEventListener("click", fireTorpedo, false);


function fireTorpedo(e) {

    if (e.target !== e.currentTarget) {

        var row = e.target.id.substring(1, 2);
        var col = e.target.id.substring(2, 3);



        if (gameBoard[row][col] == 0) {
            e.target.style.background = '#429bf4';

            gameBoard[row][col] = 3;

        } else if (gameBoard[row][col] == 1) {
            e.target.style.background = 'red';
            gameBoard[row][col] = 2;

            hitCount++;

            if (hitCount == 12) {
                alert("You win!");
            }

        } else if (gameBoard[row][col] > 1) {
            alert("You already fired at this location.");
        }
    }
    e.stopPropagation();
}
