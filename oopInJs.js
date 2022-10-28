//Function constructor
function Car(model, color){
    this.model = model;
    this.color = color;

    this.sound = () => {
        return "grgrgrgr"
    }
}
//instances of class Car
const Mercedes = new Car("Mercedes", "Blue");
const Volkswagen = new Car("Volksvagen", "Red");
const Audi = new Car("Audi", "Red");
const BMW = new Car("BMW", "White");

console.log(Mercedes.model);
console.log(Volkswagen.color);
console.log(Audi.sound());
console.log(BMW.model);


//Created Class Animal using new syntax
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sound() {return " ";
}

//extended class Animal
}
class Cat extends Animal{
    constructor(name, age){
        super(name, age);
    }
    sound(){return "Meow!";
}
}
class Dog extends Animal{
    constructor(name, age){
        super(name, age);
    }
    sound(){return "Woof!";
}
}
class Mouse extends Animal{
    constructor(name, age){
        super(name, age);
    }
    sound(){return "Beep!";
}
}
class Horse extends Animal{
    constructor(name, age){
        super(name, age);
    }
    sound(){return "Whaeh!";
}
}

//instance of extended class Animal
const Tom = new Cat("Tom", 5);
const Lucky = new Dog("Lucky", 7);
const Jery = new Mouse("Jery", 1);
const Mustang = new Horse("Mustang", 1);

console.log("The Cat name is " + Tom.name + " make sound " + Tom.sound());
console.log("The Dog name is " + Lucky.name + " make sound " + Lucky.sound());
console.log("The Mouse name is " + Jery.name + " make sound " + Jery.sound());
console.log("The Horse name is " + Mustang.name + " make sound " + Mustang.sound());