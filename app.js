//todo: render players animals
//todo: fix grow func, sometimes return 1.5 animal
class Player {
    constructor(name, active) {

        this.name = name;
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
    };

    countAnimals() {
        return Object.values(this.animals)
    }
}

class Board {
    constructor(domId, playersNum) {
        this.domId = domId;
        this.playersNum = playersNum
    }

    getDomId() {
        return this.domId = document.getElementById('board')
    }
}

class Game {
    static yellowDice() {
        return ["wolf", "cow", "sheep", "sheep", "sheep", "pig", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit"];
    }

    static redDice() {
        return ["fox", "horse", "pig", "pig", "sheep", "sheep", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit", "rabbit"];
    }

    players = [];

    init() {
        //todo welcome screen where user can set num of players
        //todo so there will appear up to 4 inputs for their names
        //todo onSubmit they are added to players arr in game obj
        function clearModalContent() {
            return document.querySelector('.modal__content').innerHTML = ''
        }

        function createPlayersNamesInput(num = 1) {
            let output = '';
            for (let i = 0; i < num; i++) {
                output += `<div class="player__input player__name">
                <label for="player${i}Name">Player ${i + 1} name:</label>
            <input type="text" data-name="player${i}" name="playerName" id="player${i}">
            </div>`
            }
            return output
        }

        const setPlayerName = (e) => {
            e.preventDefault(); //no reload on submit
            const playerInput = e.target.querySelector('input'); //get input
            const playerName = playerInput.value;
            // create new player using
            if (!playerName) return;
            this.players.push(new Player(playerName, false));
            playerInput.value = '';
            // show instructions
            clearModalContent();
            this.showInstructions();
            this.startGame()
        };

        const welcomeMessage = 'Please type your name';
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal__content--initial', 'modal__content');
        const modalHTMLContent = `<form class="modal__form modal__form--playerName">
        ${createPlayersNamesInput()}
        <button type="submit" class="modal__btn" id="submitPlayerName">confirm</button>
        </form>
        `;
        modalContent.innerHTML = modalHTMLContent;
        this.showModal(welcomeMessage, modalContent);
        const btnListener = () => document.querySelector('form.modal__form--playerName').addEventListener('submit', setPlayerName);
        btnListener()
    }

    showModal(title = 'exchange animals', content = document.createElement('')) {
        const modalWindow = document.querySelector('article.modal__window');
        const modalClose = modalWindow.querySelector('button.modal__close');
        const modalHeader = modalWindow.querySelector('h2.modal__header');
        modalWindow.lastElementChild.appendChild(content);
        modalHeader.innerText = title;
        modalWindow.style.display = 'flex';
        modalClose.addEventListener('click', (this.closeModal))
    }

    closeModal() {
        document.querySelector('article.modal__window').style.display = 'none'
    }

    throwDices() {
        const diceA = Game.yellowDice();
        console.log(diceA);
        const diceB = Game.redDice();
        // uncomment following if multiplayer
        // const player = start.players.find(el => el.active);
        const player = start.players[0]
        console.log(player);


        function throwDice(dice) {
            const equation = Math.abs(Math.floor(Math.random() * dice.length - 1));
            return dice[equation] === undefined ? throwDice(dice) : dice[equation]
        }

        function compareDices(dice1, dice2) {

            function grow(animalName, addOne = false) {
                // console.log(/)
                const animalNum = player.animals[animalName];
                console.log('animalN', animalNum, addOne);
                if (addOne && animalNum === 0 || animalNum <= 1) {
                    return player.animals[animalName]++
                }
                if (addOne && player.animals[animalName] % 2 === 1) {
                    return player.animals[animalName] += (player.animals[animalName] + 1) / 2
                }
                if (addOne && player.animals[animalName] > 1 && player.animals[animalName % 2 !== 0]) {
                    return player.animals[animalName] += (parseInt((player.animals[animalName])) - 1) / 2 + 1
                }
                if (addOne && player.animals[animalName] > 1) {
                    return player.animals[animalName] += (parseInt(player.animals[animalName]) / 2 + 1)
                }
                return console.log(player.animals[animalName] += parseInt(player.animals[animalName]) / 2)
            }

            switch (true) {
                case dice1 === 'wolf' && dice2 === 'fox':
                    start.wolfAttack();
                    start.foxAttack();
                    break;
                case dice1 === 'wolf' && player.animals[dice2] > 0:
                    grow(dice2);
                    start.wolfAttack();
                    break;
                case dice1 === 'wolf' && player.animals[dice2] === 0:
                    start.wolfAttack();
                    break;
                case dice2 === 'fox' && player.animals[dice1] > 0:
                    grow(dice1);
                    start.foxAttack();
                    break;
                case dice2 === 'fox' && player.animals[dice1] === 0:
                    start.foxAttack();
                    break;
                case dice1 === dice2:
                    grow(dice1, true);
                    console.log('dice match');
                    break;
                case player.animals[dice1] > 0 && player.animals[dice2] > 0:
                    grow(dice1);
                    grow(dice2);
                    break;
                case player.animals[dice1] > 0:
                    grow(dice1);
                    break;
                case player.animals[dice2] > 0:
                    grow(dice2);
                    break
            }

            console.table(dice1, dice2);
            return player.active = !player.active

        }

        function getResult() {
            const diceResults = [throwDice(diceA), throwDice(diceB)];
            compareDices(diceResults[0], diceResults[1]);
            console.log(player);
            start.render()
        }

        getResult()

    }

    showInstructions() {
        const instructionsP1 = `<p>In Superfarmer, each player takes a role of the owner of the animal farm.
            The main goal is to breed, exchange and gather different animals (rabbit, sheep, pig, cow, horse and two kinds of dogs)
            and the winner is a person who can gather at least one of each kind (except the dogs). But be careful there are foxes
            around trying to snatch your rabbits and wolves which can eat all your other animals (that is why you need dogs to protect your herd).
            </p>`;

        const instructionsP2 = `<p>The turn of each player consists of two actions: first you have a possibility
            to exchange your animals according to the special table (e.g for six rabbits you get one sheep, three pigs for a cow)
            and then you roll two special 12-sided dice with the pictures of animals on the sides.
            You count the number of pairs of the animals on rolled dice (together with the ones on the farm) and this is how many new animals you get,
            divided by two. The trick is that there is a fox on one dice and the wolf which are eating your animals.
            </p>
        `;

        const instructionBtn = '<button id="instructionCloseBtn">Close</button>';
        const modalContent = document.createElement('div');

        modalContent.classList.add('modal__content', 'modal__content--instruction');
        modalContent.innerHTML = instructionsP1 + instructionsP2 + instructionBtn;
        this.showModal('Instructions', modalContent);
        document.getElementById('instructionCloseBtn').addEventListener('click', this.closeModal)
    }

    wolfAttack() {

        console.log('wolf attacks');

        const player = start.players[0]

        function clearAnimals() {
            player.animals.sheep = 0;
            player.animals.pig = 0;
            player.animals.cow = 0
        }

        if (player.animals.bDog) {
            return player.animals.bDog--
        }
        return clearAnimals()
    }

    foxAttack() {

        const player = start.players[0]

        console.log('fox attacks');

        if (player.animals.sDog) {
            return player.animals.sDog--
        }
        return player.animals.rabbit = 0
    }

    startGame() {
        const throwBtn = document.getElementById('throwDices');
        throwBtn.addEventListener('click', this.throwDices);    // listen for btn click
        start.players[0].active = true; //set first player as active
        console.log('success')
    }

    render() {
        console.log('render animals, update board state')
    }

}

const start = new Game;
start.init();