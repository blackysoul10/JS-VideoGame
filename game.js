const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');



let canvasSize;
let elementsSize;

//EventListeners
window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

btnUp.addEventListener('click', moveUp);

function moveUp(){
    console.log('has presionado el boton hacia arriba')
}

function setCanvasSize() {
    //game.fillRect(0, 0, 100, 100);
    //game.clearRect(20, 20, 50, 50);
    //game.fillText('Platzi', 33, 45);
    //game.fillRect(50,50,50,50);

    window.innerHeight > window.innerWidth ? canvasSize = window.innerWidth * 0.8 : canvasSize = window.innerHeight * 0.8;


    canvas.setAttribute('height', canvasSize);
    canvas.setAttribute('width', canvasSize);
    elementsSize = (canvasSize / 10) -1;


    startGame();
}


function startGame() {

    // Emojis en el game
    game.font = elementsSize + 'px Verdana';
    game.textAlign = "end";


    const map = maps[1];
    const mapRows = map.trim().split('\n');
    const mapsRowCols = mapRows.map(row => row.trim().split(''));



    mapsRowCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {

            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI +1);

            game.fillText(emoji, posX, posY);



            //console.log({row,rowI, col, emoji});
        })
    });

    //for (let col = 1; col <= 10; col++) {
    //    for (let row = 1; row <= 10; row++) {
    //        game.fillText(emojis[mapsRowCols[row - 1][col - 1]], elementsSize * col, elementsSize * row);
    //    }
    //}

}



