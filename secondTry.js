var animals = ["rabbit", "sheep", "pig"];
var enemies = ["wolf", "fox"];
var saviors = ["hound", "dog"];
// var dice1 = ["rabbit", "rabbit", "rabbit", "sheep", "pig", "wolf"];
// var dice2 = ["rabbit", "rabbit", "sheep", "sheep", "pig", "fox"];
var yellowDice = ["wolf", "cow", "sheep", "sheep", "sheep", "pig", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit"];
var redDice = ["fox", "horse", "pig", "pig", "sheep", "sheep", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit"];
var userAnimals = [];
var userDogs = [];

//helper logging function
function myLog(myLogMessage) {
    console.log("\nThis is " + myLogMessage + " log");
}


//program start


function checkUserAnimals(userAnimals) {
    if (userAnimals == true) {

    } else {
        return userAnimals = [];
    }
}

//add animal to userAnimal array

function addUserAnimal(userAnimal) {
    var animalAdd = userAnimals.push(userAnimal);
    return animalAdd;
}

function searchUserAnimals() {
    var rabbitsInArray = 0;
    var sheepsInArray = 0;
    var pigsInArray = 0;
    for (var i = 0; i < userAnimals.length; i++) {
        if (userAnimals[i] == "rabbit") {
            rabbitsInArray++;
            // console.log(rabbitsInArray + "rab");
        } else if (userAnimals[i] == "sheep") {
            sheepsInArray++;
            // console.log(sheepsInArray + "she");
        } else if (userAnimals[i] == "pig") {
            pigsInArray++;
            // console.log(pigsInArray + "pig");
        } else {
            console.log("\telse logged ")
        }
    }

    var rabbitStatMessage = rabbitsInArray + " rabbits\n";
    var sheepStatMessage = sheepsInArray + " sheeps\n";
    var pigsStatMessage = pigsInArray + " pigs";
    console.log("There are:\n" + rabbitStatMessage + sheepStatMessage + pigsStatMessage);

}

function addDog(dogType) {
    if (dogType == "hound" || dogType == "smallDog") {

        userDogs.push(dogType);
        myLog("addDog");
        console.log("DOG ADDED");
    } else {
        return false;
    }
}
//kill dog or proceed



// check if any dog in the shed
function checkDog() {
    var smallDog = '';
    var hound = '';
    for (var i = 0; i < userDogs.length; i++) {
        if (userDogs[i] == 'hound' && userDogs[i] != 'smallDog') {
            smallDog++;
            hound++;
            myLog("checkDog - hound and smallDog");
        } else if (userDogs[i] == "hound" && userDogs != "smallDog") {
            hound++;
            myLog("checkDog - hound");
        } else if (userDogs[i] == "smallDog" && userDogs != "hound") {
            smallDog++;
            myLog("checkDog - smallDog");
        } else {
            myLog("checkDog - THERE IS NO DOG, KILL ANIMALS.")
        }
    }
    killDog();
}
//check if and dog exist and kill if needed
function checkDog2(dogType, killDog) {
    var hound = '';
    var smallDog = '';
    var killHound = false;
    var killSmallDog = false;
    for (var i = 0; i < userDogs.length; i++) {
        if (dogType == userDogs[i]) {
            if (userDogs[i] == "hound") {
                hound++;
                if (killDog == "hound") {
                    userDogs.splice("hound");
                }
            } else if (userDogs[i] == "smallDog") {
                smallDog++;
            }
            // userDogs.splice([i]); //probably removes this item from array
            // myLog("checkDog2. Should remove this - [i] dog");
        } else {
            myLog("checkDog2 else condition");
        }
    }
    myLog("checkDog2");
    console.log("var hound =" + hound);
    console.log("var smallDog =" + smallDog);


}

function grow(num) {
    addUserAnimal(num);
    myLog("\tf grow");
}

function decrease() {
    myLog("\tf decrease");
}

function growAndDecrease() {
    myLog("\tf growAndDecrease");
}

//generate random dices output

function rollDice(dice) {
    diceElements = dice.length;
    roll = Math.floor(Math.random() * diceElements);
    rollResult = dice[roll];
    //logging output
    myLog("f rollDice");
    console.log("it returns: ", dice[roll]);
    return rollResult;
}

//invoke grow, decrease or growAndDecrease depending on situation
function diceMatch() {
    var result;
    growAndDecreaseConditions = yellowDiceResult != "wolf" || redDiceResult != "fox";
    var yellowDiceResult = rollDice(yellowDice);
    var redDiceResult = rollDice(redDice);
    var diceResultLog = [yellowDiceResult, redDiceResult];
    if (yellowDiceResult == redDiceResult) {
        //grow(result);
        addUserAnimal(yellowDiceResult)
        myLog("GROW !")
    } else if (yellowDiceResult = !"wolf" && redDiceResult != "fox") { // add more possibilities
        grow();
    } else if (yellowDiceResult == "wolf" && redDiceResult == "fox") {
        decrease();
    } else if (growAndDecreaseConditions) {
        growAndDecrease();
    } else {
        myLog("f diceMatch else condition");
    }


    console.log("Dice result is: " + diceResultLog)
    // return result;



}