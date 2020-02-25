class Player {
    constructor(name, active) {

        name = this.name,
            //I
            active = this.active
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