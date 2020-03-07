const Controller = {
        initialization: function () {
            if (!Module.data.welcomeScreen.welcomeScreenShown) {
                Module.initialization.showWelcomeScreen()
            }
            // load saved data or saved initial
            Module.loadData() || Module.saveGameData();
            Render.handlePlayersNum()
        },
    }
;

const Module = {
    initialization: {

        showWelcomeScreen: function () {
            Render.sayHello();
            return Module.data.welcomeScreen.welcomeScreenShown = true
        }
    },

    data: {
        welcomeScreen: {
            welcomeScreenShown: false
        },
        loaded: false,
        players:
            {
                num: 0
            }


    },

    saveGameData: function () {
        const gameData = Module.data;
        localStorage.setItem('FarmerGame', JSON.stringify(gameData))
    },

    loadData: function () {
        const gameData = JSON.parse(localStorage.getItem('FarmerGame')) || 0;
        if (gameData === 0) return false;
        Module.data = gameData;
        Module.data.loaded = true
    },

    handlePlayersNum: function () {

    }

};

const Render = {
    sayHello: function () {
        return console.log('hello');
    },
    handlePlayersNum: function () {
        //modal where user can set num of players
        const modalWrapper = document.querySelector('.modal__wrapper');
        const modalHeading = modalWrapper.querySelector('.modal__heading');
        const btnIncrease = modalWrapper.querySelector('.players__btn--increase');
        const btnDecrease = modalWrapper.querySelector('.players__btn--decrease');
        const btnSubmit = modalWrapper.querySelector('.counter__submit');

        //set modal heading
        modalHeading.textContent = 'Set number of players';
        //update value in html
        function updatePlayerCounter() {
            modalWrapper.querySelector('.players__number').textContent = Module.data.players.num.toString()
        }

        function setPlayersNum(e) {
            e.preventDefault();
            const players = Module.data.players.num;
            //todo: change alert to a separate fn
            if (players === 0) return alert('players can\'t be 0');
            console.log('submitted players num: ' + players)
        }

        // add listeners
        //update counter
        btnIncrease.addEventListener('click', () => {
            const currentNum = Module.data.players.num;
            if (currentNum >= 4) return;
            Module.data.players.num++;
            updatePlayerCounter()
        });

        btnDecrease.addEventListener('click', () => {
            const currentNum = Module.data.players.num;
            if (currentNum <= 0) return;
            Module.data.players.num--;
            updatePlayerCounter()
        });
        btnSubmit.addEventListener('click', setPlayersNum);
        //run counter on init
        updatePlayerCounter()
    }
};

Controller.initialization();