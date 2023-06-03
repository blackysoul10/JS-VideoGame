const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');


window.addEventListener('load', startGame);


function startGame() {

    game.font='10px Verdana';
    //game.fillStyle= 'purple';
    //game.textAlign = 'left';


    game.fillRect(0,0,100,100);
    game.clearRect(20,20, 50,50);
    game.fillText('Platzi', 33,45);
    //game.fillRect(50,50,50,50);
}