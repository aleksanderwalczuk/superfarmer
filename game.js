
function throwDices() {
    const yellowDice = ["wolf", "cow", "sheep", "sheep", "sheep", "pig", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit"];
    const redDice = ["fox", "horse", "pig", "pig", "sheep", "sheep", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit"];

    function throwDice(dice) {
        const equation = Math.abs(Math.floor(Math.random() * dice.length - 1))
        return dice[equation] === undefined ? throwDice(dice) : dice[equation]
    }

    function compareDices(dice1, dice2) {

        function grow(animalName, addOne = false) {

            const animalNum = player.animals[animalName]
            console.log('animalN', animalNum, addOne)
            if (addOne && animalNum === 0 || animalNum <= 1) {
                return player.animals[animalName]++
            }
            if (addOne && player.animals[animalName] % 2 === 1) {
                return player.animals[animalName] += (player.animals[animalName] + 1) / 2
            }
            if (addOne && player.animals[animalName] > 1 && player.animals[animalName % 2 !== 0]) {
                return player.animals[animalName] += parseInt((player.animals[animalName] - 1) / 2 + 1)
            }
            if (addOne && player.animals[animalName] > 1) {
                return player.animals[animalName] += parseInt(player.animals[animalName] / 2 + 1)
            }
            return console.log(player.animals[animalName] += parseInt(player.animals[animalName] / 2))
        }

        function wolfAttack() {

            console.log('wolf attacks')
            function clearAnimals() {
                player.animals.sheep = 0
                player.animals.pig = 0
                player.animals.cow = 0
            }

            if (player.animals.bDog) {
                return player.animals.bDog--
            }
            return clearAnimals()
        }

        function foxAttack() {

            console.log('fox attacks')

            if (player.animals.sDog) {
                return player.animals.sDog--
            }
            return player.animals.rabbit = 0
        }
        switch (true) {
            case dice1 === 'wolf' && dice2 === 'fox':
                wolfAttack()
                foxAttack()
                break
            case dice1 === 'wolf' && player.animals[dice2] > 0:
                grow(dice2)
                wolfAttack()
                break
            case dice1 === 'wolf' && player.animals[dice2] === 0:
                wolfAttack()
                break
            case dice2 === 'fox' && player.animals[dice1] > 0:
                grow(dice1)
                foxAttack()
                break
            case dice2 === 'fox' && player.animals[dice1] === 0:
                foxAttack()
                break
            case dice1 === dice2: grow(dice1, true)
                console.log('dice match')
                break
            case player.animals[dice1] > 0 && player.animals[dice2] > 0:
                grow(dice1)
                grow(dice2)
                break
            case player.animals[dice1] > 0: grow(dice1)
                break
            case player.animals[dice2] > 0: grow(dice2)
                break
        }
        // if (dice1 === 'wolf') {
        //     return wolfAttack()
        // }
        // if (dice2 === 'fox') {
        //     return foxAttack()
        // }

        // if (dice1 === dice2) {
        //     console.log('add animal: ', dice1)
        //     grow(dice1)
        // }

        // if (player.animals[dice1] > 0) {
        //     return grow(dice1)
        // }

        // if (player.animals[dice2] > 0) {
        //     return grow(dice1)

        // }
        console.table(dice1, dice2)
        return player.active = !player.active

    }
    function getResult() {
        const diceResults = [throwDice(yellowDice), throwDice(redDice)]
        compareDices(diceResults[0], diceResults[1])
        console.log(player)
    }
    getResult()
    updateAside()
    resetBoard()
    render(player)
    exchangePossible() ? popTradeAvailable() : ''
}

function popTradeAvailable() {
    console.log('this is a trade window')
}

function exchangePossible(animalsArr) {
    //check if any animals
    const noAnimals = animalsArr.every(el => el === 0)

    console.log(noAnimals)
    if (noAnimals) return console.log('no animals, no exchange')

    //if other animals than rabbits are in arr it's changeable
    const noRabbits = animalsArr.filter((el, idx) => idx !== 0)
    if (animalsArr[0] >= 6 || noRabbits.find(el => el > 0)) {
        console.log('changeable')
        return true
    }
}

function trade(animal, num, outcomeName) {
    const tradeTree = {
        rabbit: {
            sheep: num / 6,
            sDog: num / 6,
            pig: num / 12,
            cow: num / 36,
            bDog: num / 36,
            horse: num / 72
        },
        sheep: {
            rabbit: num * 6,
            sDog: num,
            pig: num / 2,
            cow: num / 6,
            bDog: num / 6,
            horse: num / 12
        }, pig: {
            rabbit: num * 12,
            sDog: num * 2,
            sheep: num * 2,
            cow: num / 3,
            bDog: num / 3,
            horse: num / 6
        }, cow: {
            rabbit: num * 36,
            sDog: num * 6,
            sheep: num * 6,
            pig: num * 3,
            bDog: num,
            horse: num / 2
        }, horse: {
            rabbit: num * 72,
            sDog: num * 12,
            sheep: num * 12,
            pig: num * 6,
            bDog: num * 2,
            cow: num * 2
        }
    }
    player.animals[animal] -= num
    //todo make sure num is an integer and modulo is 0
    return player.animals[outcomeName] += tradeTree[animal][outcomeName]
}

const player = {
    name: 'Andrzej',
    active: true,
    animals: {
        rabbit: 0,
        sheep: 0,
        pig: 0,
        cow: 0,
        horse: 0,
        sDog: 0,
        bDog: 0,
        countAnimals: function () {
            //return an array of animals numbers
            return (Object.values(this).slice(0, 7))
        }
    }
}

const board = document.getElementById('board')
const playerName = document.getElementById('username')
const playerAnimals = document.querySelector('.useranimals__container').querySelectorAll('.useranimals__item')
const throwBtn = document.getElementById('throwDices')
console.log(playerAnimals)
playerName.innerText = player.name

function updateAside() {

    playerAnimals.forEach((el, i) => {
        el.innerHTML = `<div class="userAnimals__item">
        <span>${Object.getOwnPropertyNames(player.animals)[i]}: </span><span>${player.animals.countAnimals()[i]}</span>
    </div>
    `
    })
}

// todo updateBoard() fn


function resetBoard() {
    const animalContainer = document.querySelector('.player__animals')
    animalContainer.innerHTML = ''
}
function render(playerObj) {

    function renderAnimals(animal) {
        const animalContainer = document.querySelector('.player__animals')
        const newAnimal = document.createElement(`li`)
        newAnimal
            .classList.add('player__animal', 'player__' + animal.toString())
        newAnimal
            .innerText = animal
        animalContainer.appendChild(newAnimal)
    }

    //all animals and methods in arrays
    const allPlayerAnimalsProperties = Object.entries(playerObj.animals)
    // slice out the methods, then filter those with zeroes
    // inner array indexes represents [0] - animalName, [1] - number of these animals
    const allPlayerAnimals = allPlayerAnimalsProperties.slice(0, 6)

    allPlayerAnimals.forEach(el => {
        if (el[1] === 0) return
        for (let i = 0; i < el[1]; i++) {
            renderAnimals(el[0])
        }
    })
}

throwBtn.addEventListener('click', throwDices)