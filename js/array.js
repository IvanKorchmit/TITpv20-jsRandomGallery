let fruit = ["orange", "banana", "apple"]
fruit.forEach(element => {
    console.log(element);
});

function pickRand() {
    let random = Math.floor(Math.random()*fruit.length)
    return random;
}
console.log(fruit[pickRand()]);

fruit.push('avocado');
console.log(fruit);

let ind = fruit.indexOf('banana');
console.log("Index of banana: ", ind);
fruit.splice(ind,1);
console.log(fruit);