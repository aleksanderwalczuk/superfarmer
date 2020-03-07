const Controller = {
        initialization: function () {
            if (!Module.data.welcomeScreen.welcomeScreenShown) {
                Module.initialization.showWelcomeScreen()
            }
            // load saved data or saved initial
            Module.loadData() || Module.saveGameData()
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
        players: []

    },

    saveGameData: function () {
        const gameData = Module.data;
        localStorage.setItem('FarmerGame', JSON.stringify(gameData))
    },

    loadData: function () {
        const gameData = JSON.parse(localStorage.getItem('FarmerGame')) || 0;
        if(gameData === 0) return false;
        Module.data = gameData;
        Module.data.loaded = true
    }

};

const Render = {
    sayHello: function () {
        return console.log('hello');
    }
};

Controller.initialization();