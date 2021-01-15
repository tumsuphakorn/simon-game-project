////////////////////////////////////////// GAME PLAY //////////////////////////////////////////////////

class GamePlay {
    
    constructor() {
        this.state = "start"; //start, inGame, end
        this.difficulty = "easy"
        this.boxCount = 4; // 4 = easy, 9 = medium, 16 = hard
        this.playerPicks = [];
        this.sequence = [];
        this.currentLevel = 0;
        this.highScore = {
            easy: 0,
            medium: 0,
            hard: 0
        };
    }
    nextPlay() {

        //Update Level
        this.currentLevel++;
        $(`#level-${this.difficulty}`).html(`Level ${this.currentLevel}`);

        //Update High Score
        if (this.currentLevel > this.highScore[this.difficulty] + 1) this.highScore[this.difficulty]++;
        $(`#high-score-${this.difficulty}`).html(`High Score (${this.difficulty} mode): ${this.highScore[this.difficulty]}`);

        //Start Next Sequence
        this.playerPicks = [];
        let randomSequence = Math.floor(Math.random() * this.boxCount) + 1;
        this.sequence.push(randomSequence);
        const nextBox = $(`#box${randomSequence}-${this.difficulty}`);   
        nextBox.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
              
        //Play Sound
        const sound = new Audio(`./sounds/box-${randomSequence}.mp3`);
        sound.play();
    }
    check(playerPick) {
        this.playerPicks.push(playerPick);
        for (let i = 0; i < this.playerPicks.length; i++) {
            if (this.playerPicks[i] !== this.sequence[i]) {
                this.end();
                return;
            }
        }
        const sound = new Audio(`./sounds/box-${playerPick}.mp3`);
        sound.play();
        if (this.playerPicks.length === this.sequence.length) setTimeout(this.nextPlay.bind(this), 600);
    }
    end() {
        gameOverSound.play();
        this.state = "end";
        this.currentLevel = 0;
        this.playerPicks = [];
        this.sequence = [];
        gameOverPage.style.display = "block";
        if (this.difficulty === "easy") easyModePage.style.display = "none";
        else if (this.difficulty === "medium") mediumModePage.style.display = "none";
        else if (this.difficulty === "hard") hardModePage.style.display = "none";
    }
}

////////////////////////////////////////// IMPORT SOUNDS //////////////////////////////////////////////////
const gameOverSound = new Audio("./sounds/game-over.mp3");
const box1Sound = new Audio("./sounds/box-1.mp3");
const box2Sound = new Audio("./sounds/box-2.mp3");
const box3Sound = new Audio("./sounds/box-3.mp3");
const box4Sound = new Audio("./sounds/box-4.mp3");


////////////////////////////////////////// START GAME //////////////////////////////////////////////////
const game = new GamePlay();

////////////////////////////////////////// GAME CONTROL //////////////////////////////////////////////////

//////////////// EASY MODE BOXES //////////////////////

document.getElementById("box1-easy").addEventListener("click", () => {
    $("#box1-easy").fadeOut(80).fadeIn(80);
    game.check(1);
});

document.getElementById("box2-easy").addEventListener("click", () => {
    $("#box2-easy").fadeOut(80).fadeIn(80);
    game.check(2);
});

document.getElementById("box3-easy").addEventListener("click", () => {
    $("#box3-easy").fadeOut(80).fadeIn(80);
    game.check(3);
});

document.getElementById("box4-easy").addEventListener("click", () => {
    $("#box4-easy").fadeOut(80).fadeIn(80);
    game.check(4);
});

//////////////// MEDIUM MODE BOXES //////////////////////

document.getElementById("box1-medium").addEventListener("click", () => {
    $("#box1-medium").fadeOut(80).fadeIn(80);
    game.check(1);
});

document.getElementById("box2-medium").addEventListener("click", () => {
    $("#box2-medium").fadeOut(80).fadeIn(80);
    game.check(2);
});

document.getElementById("box3-medium").addEventListener("click", () => {
    $("#box3-medium").fadeOut(80).fadeIn(80);
    game.check(3);
});

document.getElementById("box4-medium").addEventListener("click", () => {
    $("#box4-medium").fadeOut(80).fadeIn(80);
    game.check(4);
});

document.getElementById("box5-medium").addEventListener("click", () => {
    $("#box5-medium").fadeOut(80).fadeIn(80);
    game.check(5);
});

document.getElementById("box6-medium").addEventListener("click", () => {
    $("#box6-medium").fadeOut(80).fadeIn(80);
    game.check(6);
});

document.getElementById("box7-medium").addEventListener("click", () => {
    $("#box7-medium").fadeOut(80).fadeIn(80);
    game.check(7);
});

document.getElementById("box8-medium").addEventListener("click", () => {
    $("#box8-medium").fadeOut(80).fadeIn(80);
    game.check(8);
});

document.getElementById("box9-medium").addEventListener("click", () => {
    $("#box9-medium").fadeOut(80).fadeIn(80);
    game.check(9);
});

//////////////// HARD MODE BOXES //////////////////////

document.getElementById("box1-hard").addEventListener("click", () => {
    $("#box1-hard").fadeOut(80).fadeIn(80);
    game.check(1);
});

document.getElementById("box2-hard").addEventListener("click", () => {
    $("#box2-hard").fadeOut(80).fadeIn(80);
    game.check(2);
});

document.getElementById("box3-hard").addEventListener("click", () => {
    $("#box3-hard").fadeOut(80).fadeIn(80);
    game.check(3);
});

document.getElementById("box4-hard").addEventListener("click", () => {
    $("#box4-hard").fadeOut(80).fadeIn(80);
    game.check(4);
});

document.getElementById("box5-hard").addEventListener("click", () => {
    $("#box5-hard").fadeOut(80).fadeIn(80);
    game.check(5);
});

document.getElementById("box6-hard").addEventListener("click", () => {
    $("#box6-hard").fadeOut(80).fadeIn(80);
    game.check(6);
});

document.getElementById("box7-hard").addEventListener("click", () => {
    $("#box7-hard").fadeOut(80).fadeIn(80);
    game.check(7);
});

document.getElementById("box8-hard").addEventListener("click", () => {
    $("#box8-hard").fadeOut(80).fadeIn(80);
    game.check(8);
});

document.getElementById("box9-hard").addEventListener("click", () => {
    $("#box9-hard").fadeOut(80).fadeIn(80);
    game.check(9);
});

document.getElementById("box10-hard").addEventListener("click", () => {
    $("#box10-hard").fadeOut(80).fadeIn(80);
    game.check(10);
});

document.getElementById("box11-hard").addEventListener("click", () => {
    $("#box11-hard").fadeOut(80).fadeIn(80);
    game.check(11);
});

document.getElementById("box12-hard").addEventListener("click", () => {
    $("#box12-hard").fadeOut(80).fadeIn(80);
    game.check(12);
});

document.getElementById("box13-hard").addEventListener("click", () => {
    $("#box13-hard").fadeOut(80).fadeIn(80);
    game.check(13);
});

document.getElementById("box14-hard").addEventListener("click", () => {
    $("#box14-hard").fadeOut(80).fadeIn(80);
    game.check(14);
});

document.getElementById("box15-hard").addEventListener("click", () => {
    $("#box15-hard").fadeOut(80).fadeIn(80);
    game.check(15);
});

document.getElementById("box16-hard").addEventListener("click", () => {
    $("#box16-hard").fadeOut(80).fadeIn(80);
    game.check(16);
});

//////////////// INPUT //////////////////////

const difficultyInput = document.getElementById("difficulty-select");
difficultyInput.addEventListener("change", (e) => {
    game.difficulty = e.target.value;
});

//////////////// PAGES //////////////////////

const startPage = document.getElementById("start-page");
const easyModePage = document.getElementById("easy-mode-page");
const mediumModePage = document.getElementById("medium-mode-page");
const hardModePage = document.getElementById("hard-mode-page");
const gameOverPage = document.getElementById("game-over-page");

//////////////// BUTTONS //////////////////////

const startButton = document.getElementById("start-button");
const tryAgainButton = document.getElementById("try-again-button");
const backButton = document.getElementById("back-button");

startButton.addEventListener("click", () => {
    startPage.style.display = "none";
    if (game.difficulty === "easy") {
        easyModePage.style.display = "block";
        game.boxCount = 4;
    } else if (game.difficulty === "medium") {
        mediumModePage.style.display = "block";
        game.boxCount = 9;
    } else if (game.difficulty === "hard") {
        hardModePage.style.display = "block";
        game.boxCount = 16;
    }
    $(`#level-${game.difficulty}`).html("3");
    setTimeout(() => {
        $(`#level-${game.difficulty}`).html("2");
        setTimeout(() => {
            $(`#level-${game.difficulty}`).html("1");
            setTimeout(() => {
                game.nextPlay();
            }, 1000);
        }, 1000);
    }, 1000);
});

tryAgainButton.addEventListener("click", () => {
    gameOverPage.style.display = "none";
    if (game.difficulty === "easy") easyModePage.style.display = "block";
    else if (game.difficulty === "medium") mediumModePage.style.display = "block";
    else if (game.difficulty === "hard") hardModePage.style.display = "block";
    $(`#level-${game.difficulty}`).html("3");
    setTimeout(() => {
        $(`#level-${game.difficulty}`).html("2");
        setTimeout(() => {
            $(`#level-${game.difficulty}`).html("1");
            setTimeout(() => {
                game.nextPlay();
            }, 1000);
        }, 1000);
    }, 1000);
});

backButton.addEventListener("click", () => {
    gameOverPage.style.display = "none";
    startPage.style.display = "block";
});

//////////////// MODAL //////////////////////

const modal = document.getElementById("how-to-play-modal");

const btn = document.getElementById("how-to-play-button");

const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}