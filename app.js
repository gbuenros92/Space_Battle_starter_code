let playerHull = document.getElementById('playerHull');
const playerSprite = document.querySelector('.playerImage');

let enemyHull = document.getElementById('enemyHull');
const enemySprite = document.querySelector('.enemyImage');

const schwarz = {
    hull: 15,
    firepower: 5,
    accuracy: 0.7,

    getHitOrMiss() {
        let accuracyCheck = Math.random();

        if (accuracyCheck <= this.accuracy) {
            return true
        } else {
            return false
        }
    },

    causeDamage() {
        alienShip.hull -= this.firepower;

        if (alienShip.hull > 0) {
            enemyHull.innerHTML = `Hull : ${alienShip.hull}`;
        } else {
            enemyHull.innerHTML = 'Hull : 0';
        }

    },
}

const alienShip = {
    hull: 6,
    firepower: 3,
    accuracy: 0.6,

    getHitOrMiss() {
        let accuracyCheck = Math.random();

        if (accuracyCheck <= this.accuracy) {
            return true
        } else {
            return false
        }
    },

    causeDamage() {
        schwarz.hull -= this.firepower;

        if (schwarz.hull > 0) {
            playerHull.innerHTML = `Hull : ${schwarz.hull}`;
        } else {
            playerHull.innerHTML = 'Hull : 0';
        }

    },
}


// ========== START BATTLE ===========
const startBattle = window.prompt("Your ship, the U.S.S. Schwarzenegger, is being attacked! Fight back and show them who's boss?", "Y/N?");

if (startBattle === 'Y' || startBattle === 'y') {
    window.alert("Click on the Enemy to attack.")
} else {

    const tryAgain = window.confirm("The barrage of attacks from the alien ships was too much for you to handle... GAME OVER! \n\n Try again?");

    if (tryAgain) {
        window.location.reload();
    }
}

// ========== BATTLE CONDITIONS ==========
let myAttackCounter = 0;
let enemyAttackCounter = 0;



enemySprite.onclick = function attackEnemy() {
    if (alienShip.hull > 0) {

        if (schwarz.getHitOrMiss()) {
            schwarz.causeDamage();
            window.alert("You hit the enemy aliens!");
        } else {
            window.alert("Your attack missed!");
        }

    } else {
        window.alert("Your enemy's ship has been destroyed!");
    }
   
    myAttackCounter++;
}


playerSprite.onclick = function enemyAttacks() {
    if (schwarz.hull > 0) {

        if (alienShip.getHitOrMiss()) {
            alienShip.causeDamage();
            window.alert("You've been hit!");
        } else {
            window.alert("The alien's attack missed! Now's your chance!");
        }
    } else {
        const tryAgain = window.confirm("The U.S.S. Schwarzenegger has been destroyed... GAME OVER!\n\nTry Again?")

        if (tryAgain) {
            window.location.reload();
        }
    }
}

function computerClicks() {
    playerSprite.click();
    enemyAttackCounter++;
}