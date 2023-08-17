/*let personSimple = "John Doe";

const personObject = {
firstName : "John",
lastName :"Doe",
age : 50,
eyeColor : "blue"
}

personObject.age = 10;

console.log(personSimple);
console.log(personObject);

*/


/*
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    introduce() {
        console.log(`Olá meu nome é ${this.name} e tenho ${this.age} anos.`);
    }
}

const user1 = new User (`John`, 30);
user1.introduce();
*/



/*
class Pizza {
    constructor(base, sauce, toppings, cheese) {
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese;
    }

    getDescription(){
        return `A delicious pizza with ${this.base} base, ${this.sauce} sauce, ${this.toppings} toppings, and a lots of cheese`;
    }

    getTimerBase(){

      if (this.base == `traditional`){
        return 10;
    } else if (this.base == `integral`){
        return 15;
    } else {
        return `this base does not exist`;
    }
 }
}


const myPizza = new Pizza (`traditional`, `tomato`, `pepperoni`, `mozzarella`);
console.log(myPizza.getDescription());
console.log(`time to prepared the pizza =` + myPizza.getTimerBase())
*/









/*
class Pizza {
    constructor(base, sauce, toppings, cheese) {
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese;
    }

    getDescription(){
        return `A delicious pizza with ${this.base} base, ${this.sauce} sauce, ${this.toppings} toppings, and a lots of cheese`;
    }

    getTimerBase(){
      if (this.base == `traditional`){
        return 10;
    } else if (this.base == `integral`){
        return 15;
    } else {
        return `this base does not exist`;
    }
   }

   getTimerSauce(){
    if (this.sauce == `tomato`) {
        return 5;
     } else {
        return `this sauce does not exist`
     }
    }

   getTimerToppings(){
    if(this.toppings == `pepperoni`){
        return 10;
    } else {
        return `this topping does not exist`
    }
    }

    getTimerCheese(){
        if(this.cheese == `mozzarela`){
            return 15;
        } else if(this.cheese == `dish cheese`){
            return 10;
        } else {
            return `this cheese does not exist`
        }
     }
   }


const myPizza = new Pizza (`traditional`, `tomato`, `pepperoni`, `dish cheese`);
console.log(myPizza.getDescription());
console.log(`time to prepared the pizza =` + myPizza.getTimerBase())
console.log(`time to prepared the pizza =` + myPizza.getTimerSauce())
*/

class Calculator {
    add(a, b) {
        return a + b;
    }
    multiply(a, b){
        return a * b;
    }
    subtract(a, b){
        return a - b;
    }
}

const calculator = new Calculator();

const sumResult = calculator.add(5, 3);
console.log("Sum:", sumResult);

const multiplicationResult = calculator.multiply(4, 2);
console.log("Multiplication:", multiplicationResult);

const subtractionResult = calculator.subtract(10, 4);
console.log("Subtraction:", subtractionResult);



class Witch {
    constructor(name, patron, house, colorEyes) {
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.colorEyes = colorEyes;
    }

    getName(){
        return `o nome do bruxo(a) é: ${this.name}`;
    }
    getHouse(){
        return `Ele(a) esta na casa: ${this.house}`;
    }
    getPatron(){
        return `Seu patrono é: ${this.patron}`;
    }
}

const witch1 = new Witch('Harry Potter', 'Deer', 'Grynffindor', 'green');

console.log(witch1.getName())



class TypeWitch extends Witch {
    constructor(name, patron, house, colorEyes, TypeWitch) {
        super(name, patron, house, colorEyes);
        this.TypeWitch = TypeWitch;
    }
    getTypeWitch(){
        if(this.TypeWitch == "p"){
            return "este bruxo é  sangue puro"
        }else if(this.TypeWitch == "M"){
            return "Este bruxo é mestiço";
        }else {
            return "este é um trouxa";
        }
    }
}

const harry = new TypeWitch('Harry Potter', 'Corvo', 'Sonserine', 'Verde/azul', 'M');
console.log(harry.getTypeWitch());



class CamaraSecreta {
    constructor(name, pwd){
        this.name = name;
        let _pwd = pwd; //atributo privado

        //metodo privado
        this.verifyPwd = (pwdInput) => {
            return pwdInput == _pwd; // true or false
        }
        
        //metodo privado, mas nao no JS
        this.acessToChamber = () => {
            let pwdInput = prompt("Digite a senha");
            if(this.verifyPwd(pwdInput)){
                console.log(`Bem vindo a camara secreta ${this.name}`)
            }else{
                console.log("Acesso negado trouxa")
            }
        }
        
    };

    //metodo publico
    showName(){
        console.log(`nome do bruxo: ${this.name}`)
    }
}

 const myAcess1 = new CamaraSecreta('Harry Potter', 'senha123')

 //metodo publico
 myAcess1.showName(); //top

 myAcess1.name = 'HP'; // funciona pois o atributo é publico
 myAcess1.pwd = '123';//nao funciona, atributo privado

 //metodo privado
 myAcess1.acessToChamber();