var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = "50";
var enemyAttack = "12";

var fight = function() {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Subtract the value of playerAttack from enemyHealth and use that result to update the value in enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to console so we know this worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " lives remaining. ");
    //check enemyHealth
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died! ");
    }
    else {
        window.alert(enemyName + "  still has " + enemyHealth + " health left. ");
    }
    //Subtract the value of enemyAttack from the value of playerHealth and use that result to update the value in playerHealth variable
    playerHealth = playerHealth - enemyAttack;
    //Log a resulting message to console ao we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " lives remaining. ");
    if (playerHealth <=0) {
        window.alert(playerName + " has died! ");
    }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left. ");
        }
    }


fight ();
