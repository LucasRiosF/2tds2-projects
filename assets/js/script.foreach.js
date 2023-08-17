/*const companies = ["Apple", "Google", "Facebook"];

companies.forEach(company => {
    console.log(`Hey, ${company}!`);
});*/

/*
const names = ["Whinds", "Freeway", "Teste", "Maria"];

names.forEach((name) => {
    console.log(`Hi, ${name}!`);
});*/


/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

numbers.forEach((number, index) => {
    if(number % 2 == 0) {
        console.log(number, `este número esta na posição ${index}`);
    }
});*/


/*const cars = [
    {
        marca: "Ford",
        modelo: "Focus",
    },
    {
        marca:"BMW",
        modelo:"BMW Z4",
    },
    {
        marca:"Fist",
        modelo:"Palio",
    },
    {
        marca:"Audi",
        modelo:"A3",
    },
];

cars.forEach((car) => {
    console.log(`Marca: ${car.marca} -
    Modelo: ${car.modelo}`);
});*/


class Car{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}

class CarsList{
    constructor() {
        this.cars = [];
    }

    addCar(car) {
        this.cars.push(car);
    }
}

const carslist = new CarsList();

function createCar(){
    const marca = document.getElementById("carBrand").value;
    const modelo = document.getElementById("carModel").value;
    
    const car = new Car(marca, modelo);
    
    carslist.addCar(car);

    document.getElementById("carBrand").value = "";
    document.getElementById("carModel").value = "";

    carslist.cars.forEach((car) => {
        console.log(`Marca:${car.marca} - Modelo:${car.modelo}`)
    })
}