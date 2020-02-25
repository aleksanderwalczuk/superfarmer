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
    constructor(domId) {
        this.domId = domId
    }
}