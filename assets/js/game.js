var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerHealth, playerAttack, playerMoney);
// Game States
// "Win" : Player has defeated all enemy robots
//  - Fight all enemy robots
//  - Defeat each enemy robot
// "Lose" : Player health is zero or less

var enemyNames = ["Roborto" , "Amy Android" , "Robo Trumble"];
var enemyHealth = "50";
var enemyAttack = "12";

    var fight = function(enemyName) {
        //fight function statements
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Subtract the value of playerAttack from enemyHealth and use that result to update the value in enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to console so we know this worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " lives remaining. ");
    //check enemyHealth
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
    }
    else {
        window.alert(enemyName + "  still has " + enemyHealth + " health left. ");
    }
    //Subtract the value of enemyAttack from the value of playerHealth and use that result to update the value in playerHealth variable
    playerHealth = playerHealth - enemyAttack;
    //Log a resulting message to console ao we know that it worked.
    console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " lives remaining. ");
    if (playerHealth <= 0) {
        window.alert(playerName + " has died! ");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left. ");
    }

    var promptFight = window.prompt("Would you like to fight or skip this battle? Enter 'Fight' or 'Skip' to choose. ");
    console.log(promptFight);

    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemyHealth by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + enemyName + " now has " + enemyHealth + " remaining. ");
    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died ");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }

    //remove playerHealth by subtracting enemyAttack from playerHealth
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + playerName + " now has " + playerHealth + " remaining. ");
    //check playerHealth
    if (playerHealth <= 0) {
        window.alert(playerName + " has died ");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left. ");
    }
    }

    //if player chooses to skip
else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm if player want to skip
    var confirmSkip = window.confirm(" Are you sure you'd like to skip? ");
    //if yes(true), leave the fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Good Bye! ");
        //subtract money from playerMoney
        playerMoney = playerMoney - 2;
        console.log(playerName + " skipped this fight" + playerName + " now has " + playerMoney + " dollars left! ")
    }
    //if no(false), ask question by running fight again
    else {fight();}
} 

else {
    window.alert("You need to chose a valid option. Try again!");}
    }
for(var i = 0; i < enemyNames.length; i++ ) {
    fight(enemyNames[i]);
}
