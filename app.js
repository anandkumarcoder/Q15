const button = document.querySelector(".btn");
const output = document.querySelector(".output");

let ram = {
    name: "Ram",
    age: 25,
    power: 2500
}

let krishna = {
    name: "Krishna",
    age: 31,
    power: 2325
}

function powerComparison(){
    if(ram.power > krishna.power){
        output.innerText = `${ram.name} power is ${ram.power} which is more than ${krishna.name}`
    } else {
        output.innerText = `${krishna.name} power is ${krishna.power} which is more than ${ram.name}`
    }
}

button.addEventListener('click' , powerComparison)