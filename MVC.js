const Controller = {
        initialization: function () {
            if (!Module.initialization.data.welcomeScreen.welcomeScreenShown) {
                Module.initialization.showWelcomeScreen()
            }
        }
    }
;

const Module = {
    initialization: {
        data: {
            welcomeScreen: {
                welcomeScreenShown: false
            }
        },
        showWelcomeScreen: function () {
            Render.sayHello();
            return Module.initialization.data.welcomeScreen.welcomeScreenShown = true
        }
    }

};

const Render = {
    sayHello: function () {
        return console.log('hello');
    }
};

Controller.initialization()