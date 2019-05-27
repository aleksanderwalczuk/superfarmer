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

function searchUserAnimals() {//function doesn't clear animalsInArray
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
            console.log("\telse logged in searchUserAnimals")
        }
    }

    var rabbitStatMessage = rabbitsInArray + " rabbits\n";
    var sheepStatMessage = sheepsInArray + " sheeps\n";
    var pigsStatMessage = pigsInArray + " pigs";
    console.log("There are:\n" + rabbitStatMessage + sheepStatMessage + pigsStatMessage);
    // rabbitsInArray = 0;
    // sheepsInArray = 0;
    // pigsInArray = 0;

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


//kill an animal in certian array
function kill (field, target) {
        var arrayName = field;
        var animal = target;
    arrayName.splice(arrayName.indexOf(animal));

}
//wolf killing animals
function wolfKilling () {
    kill(userAnimals, "cow");
    kill(userAnimals, "pig");
    kill(userAnimals, "sheep");
    return "rabbit"
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
// killing dog here?
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
                    hound--;
                } else if (killDog == false) {
                    return false;
                }
                else {
                    wolfKilling(); //function that kills all animals except rabbits, smallDogs and horse
                }
            } else if (userDogs[i] == "smallDog") {
                smallDog++;
                if (killDog == "smallDog") {
                    smallDog--;
                } else if (killDog == false) {
                    return false;
                } else {
                    kill(userAnimals, "rabbit"); //erase rabbits from array
                }
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
function checkDog3 (dogType) {
    var dog = dogType;
    var dogInArray = userDogs.indexOf(dog);
    if (dogInArray > 0) {
        return true;
    } else {
        return false;
    }
}
function grow(num) {
    addUserAnimal(num);
    myLog("\tf grow");
}

function decrease() {
    myLog("\tf decrease");
    if (checkDog3("hound" == true)) {
    kill(userDogs, "hound");
} else if (checkDog3("smallDog") == true) {
    kill(userDogs, "smallDog");
} else if (checkDog3("hound") == false) {
    wolfKilling();
} else if (checkDog3("smallDog") == false) {
    kill(userDogs, "smallDog");
} else {
    console.log("FATAL, this is funciton decrease else condition")
}
}

function growAndDecrease(enemy) {
    myLog("\tf growAndDecrease");
    var  agressor = enemy
    if (agressor == "wolf") {
        console.log("WOLF ATTACKS!")
        if (userDogs.indexOf("hound") > 0) {
            kill(userDogs, "hound")
        } else {
            console.log("wolf eats your animals");
            wolfKilling();
        }
    } else if (agressor == "fox") {
        console.log("FOX ATTACKS");
        if (userDogs.indexOf("smallDog") > 0) {
            kill(userDogs, "smallDog");
        } else {
            kill(userAnimals, "rabbit");
        }

    } else {
        console.log("growAndDecrease FATAL ERROR");
    }
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

//yellowDice rolls first
function diceMatch() {
    var result;
    var yellowDiceResult = rollDice(yellowDice);
    var redDiceResult = rollDice(redDice);
    var diceResultLog = [yellowDiceResult, redDiceResult];
    if (yellowDiceResult == redDiceResult) {
        //grow(result);
        
        myLog("GROW !")
        return addUserAnimal(yellowDiceResult)
    } else if (yellowDiceResult != "wolf" && redDiceResult != "fox") { // add more possibilities
        return grow();
    } else if (yellowDiceResult == "wolf" && redDiceResult == "fox") {
        return decrease();
    } else if (yellowDiceResult != "wolf" && redDiceResult == "fox" || yellowDiceResult == "wolf" && redDiceResult != "fox") {
        if (yellowDiceResult == "wolf") {
            growAndDecrease("wolf");
        } else {
            growAndDecrease("fox");
        }

    } else {
        myLog("f diceMatch else condition");
    }


    console.log("Dice result is: " + diceResultLog)
    // return diceResultLog;



}