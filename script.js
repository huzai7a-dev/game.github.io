let score = document.querySelector("#count");
let dribbler = document.querySelector(".dribbler");
let defender = document.querySelector(".defender");
let finalScore = document.querySelector("#finalScore");
let gameOver = document.querySelector(".gameover");
function playGame(){
    defender.style.animation = "defAnim 2.5s linear infinite";
    gameOver.style.display = "none";
        
document.onkeydown = function(e){
    e.preventDefault();
    if(e.keyCode == 38){
        dribbler.classList.add("jump");

        setTimeout(() => {
        dribbler.classList.remove("jump");
        }, 600);
    }
    if(e.keyCode == 39){
        dribbleMove = parseInt (window.getComputedStyle(dribbler,  null).getPropertyValue("left"));
        dribbler.style.left = (dribbleMove + 100) + "px";
        dribbler.style.transition = ".2s";
    }

    if(e.keyCode == 37){
        dribbleMove = parseInt (window.getComputedStyle(dribbler,  null).getPropertyValue("left"));
        dribbler.style.left = (dribbleMove - 100) + "px";
        dribbler.style.transition = ".2s";
    }
    
}
let scoreCount = 0;
let scoreInc = true;

setInterval( () => {
    let dribbleX = parseInt (window.getComputedStyle(dribbler,  null).getPropertyValue("left"));
    let dribbleY = parseInt (window.getComputedStyle(dribbler,  null).getPropertyValue("bottom"));

    let defenderX = parseInt (window.getComputedStyle(defender,  null).getPropertyValue("left"));
    let defenderY = parseInt (window.getComputedStyle(defender,  null).getPropertyValue("bottom"));

    let offsetX = Math.abs((dribbleX - defenderX));
    let offsetY = Math.abs((dribbleY - defenderY));

         if (offsetY < 80 && offsetX < 30){
            finalScore.innerHTML = scoreCount;
            gameOver.style.display = "block";
            defender.style.animation = "none";
            scoreCount = finalScore.innerHTML;
            dribbler.style.left = "15px";
            document.onkeydown = function(e){
                return false;
        }
    
        } if(offsetX < 150 && scoreInc){
                scoreCount++
                score.innerHTML = scoreCount;
                scoreInc = false;
                setTimeout(() => {
                    scoreInc = true;
                }, 1000);
        }
        
    }, 10);
}
playGame();
