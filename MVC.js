const Controller = {
        initialization: function () {
            if (Module.initialization.data.welcomeScreen.welcomeScreenShown === 0) {
                Module.initialization.showWelcomeScreen()
            }
        }
    }
;

const Module = {
    initialization: {
        data: {
            welcomeScreen: {
                welcomeScreenShown: 0
            }
        },
        showWelcomeScreen: function () {
            Render.sayHello();
            return Module.initialization.data.welcomeScreen.welcomeScreenShown += 1
        }
    }

};

const Render = {
    sayHello: function () {
        return console.log('hello');
    }
};

Controller.initialization()