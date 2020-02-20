/**
 * Created by alexander on 12/1/18.
 */
const board = document.getElementById('board');
let round = 0;
const diceOneAnimals = ["rabbit", "sheep", "pig", "horse", "fox"]; //["r", "s,", "p", "c", "w"];
const diceTwoAnimals = ["rabbit", "sheep", "pig", "horse", "fox"]; //["r", "s,", "p", "h", "f"];
const dogs = ["big", "small"];

function rollDice(diceOneAnimals, diceTwoAnimals) {
    const rollOne = Math.floor(Math.random * diceOneAnimals.length);
    const rollTwo = Math.floor(Math.random * diceTwoAnimals.length);
    console.log("dice 1" + rollOne + "dice 2 " + rollTwo);
    return rollOne + rollTwo;
}