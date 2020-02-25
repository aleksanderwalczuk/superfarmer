class Player {
    constructor(name, active) {

        this.name = name
        this.active = active
    }
    animals = {
        rabbit: 0,
        sheep: 0,
        pig: 0,
        cow: 0,
        horse: 0,
        sDog: 0,
        bDog: 0,
    }
    countAnimals() {
        return Object.values(this.animals)
    }
}

class Board {
    constructor(domId, playersNum) {
        this.domId = domId
        this.playersNum = playersNum
    }
    getDomId() {
        return this.domId = document.getElementById('board')
    }
}

class Game {
    yellowDice = ["wolf", "cow", "sheep", "sheep", "sheep", "pig", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit"]
    redDice = ["fox", "horse", "pig", "pig", "sheep", "sheep", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit"];

    init() {
        const welcomeMessage = 'Please type your name'
        const modalContent = document.createElement('div')
        modalContent.classList.add('modal__content--initial')
        const initHTMLContent = `<label for="playerName">Your name:</label>
        <input type="text" name="playerName" id="">`
        this.showModal(welcomeMessage, modalContent)
    }

    showModal(title = 'exchange animals', content = document.createElement('')) {
        const modalWindow = document.querySelector('article.modal__window')
        const modalClose = modalWindow.querySelector('button.modal__close')
        const modalHeader = modalWindow.querySelector('h2.modal__header')
        modalWindow.lastElementChild.appendChild(content)
        modalHeader.innerText = title
        modalWindow.style.display = 'flex'
        modalClose.addEventListener('click', () => modalWindow.style.display = 'none')
    }

    throwDices() {

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

            console.table(dice1, dice2)
            return player.active = !player.active

        }

        function getResult() {
            const diceResults = [throwDice(yellowDice), throwDice(redDice)]
            compareDices(diceResults[0], diceResults[1])
            console.log(player)
        }

        getResult()

    }
    wolfAttack() {

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

    foxAttack() {

        console.log('fox attacks')

        if (player.animals.sDog) {
            return player.animals.sDog--
        }
        return player.animals.rabbit = 0
    }

}

const start = new Game
start.init()