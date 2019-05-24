
    var animals = ["rabbit", "sheep", "pig"];
    var enemies = ["wolf", "fox"];
    var saviors = ["hound", "dog"];
    // var dice1 = ["rabbit", "rabbit", "rabbit", "sheep", "pig", "wolf"];
    // var dice2 = ["rabbit", "rabbit", "sheep", "sheep", "pig", "fox"];
    var yellowDice = ["wolf", "cow", "sheep", "sheep", "sheep", "pig", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit"];
    var redDice = ["fox", "horse", "pig", "pig", "sheep", "sheep", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit"];
    var userAnimals =[];

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
            } else if(userAnimals[i] == "pig") {
                pigsInArray++;
                // console.log(pigsInArray + "pig");
            } else {
                console.log("\telse logged ")
            }
        }

        var rabbitStatMessage = rabbitsInArray + " rabbits\n";
        var sheepStatMessage = sheepsInArray + " sheeps\n";
        var pigsStatMessage = pigsInArray + " pigs";
        console.log("There are:\n" +  rabbitStatMessage + sheepStatMessage + pigsStatMessage);

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
        } else if (yellowDiceResult =! "wolf" && redDiceResult != "fox") { // add more possibilities
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
