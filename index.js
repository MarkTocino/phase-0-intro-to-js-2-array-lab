    // Write your solution here!
const cats = [
    "Milo", "Otis", "Garfield"
];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
};
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
};
function destructivelyRemoveLastCat() {
    cats.pop();
};
function destructivelyRemoveFirstCat(){
    cats.shift();
};
function appendCat(name) {
    const appendCat = [...cats]
    appendCat.push("Broom")
    return appendCat
};
function prependCat(name){
    const prependCat = cats.slice(0)
    prependCat.unshift ("Arnold");
    return prependCat
};
function removeLastCat(name) {
    const removeLastCat = cats.slice(0)
    removeLastCat.pop()
    return removeLastCat
};
function removeFirstCat() {
    const removeFirstCat = [...cats]
    removeFirstCat.shift()
    return removeFirstCat
};