// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля` (dont understand)
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Cars (model, producer, year, speed, maxSpeed) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.speed = speed;
//     this.maxSpeed = maxSpeed;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.newSpeed = function (speed) {
//         this.maxSpeed = this.maxSpeed + speed}
//     this.newYear = function (yearn) {
//         this.year = yearn
//     }
//     this.driverIncar = function (driver) {
//         this.driver = driver
//     }
//
// }
//
// let car = new Cars ('bmw', 'Germany', '2019', 2.4, 2)
// console.log(car)
// car.drive()
// car.newSpeed(30)
// car.drive()
// car.newYear(2022)
// console.log(car)
// car.driverIncar('Olha')
// console.log(car)

//     this.info = function () { //уточнити !!
//         for (const key in this) {
//             if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
//         }
// class Cars1 {
//     model;
//     producer;
//     year;
//     speed;
//     maxSpeed;
//
//     constructor(model, producer, year, speed, maxSpeed) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.speed = speed;
//         this.maxSpeed = maxSpeed;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     newSpeed(speed) {
//         this.maxSpeed = this.maxSpeed + speed
//     }
//
//     newYear(yearn) {
//         this.year = yearn
//     }
//
//     driverIncar(driver) {
//         this.driver = driver
//     }
// }
// let car2 = new Cars1 ('bmw', 'Germany', '2019', 2.4, 2)
// console.log(car2)
// car2.drive()
// car2.newSpeed(70)
// car2.drive()
// car2.newYear(2022)
// console.log(car2)
// car2.driverIncar('Olha')
// console.log(car2)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.


class Cinderellas {
    imya;
    age;
    sizeFeet;

    constructor(imya, age, sizeFeet) {
        this.imya = imya;
        this.age = age;
        this.sizeFeet = sizeFeet;
    }
}
let cinderellaArr = [
    new Cinderellas ('katya', 22, 38),
    new Cinderellas ('anya', 12, 35),
    new Cinderellas ('nastia', 15, 32),
    new Cinderellas ('olya', 19, 39),
    new Cinderellas ('angelina', 30, 42),
    new Cinderellas ('malvina', 45, 36),
    new Cinderellas ('alina', 24, 34),
    new Cinderellas ('tamara', 16, 36),
    new Cinderellas ('tosya', 17, 35),
    new Cinderellas ('yana', 53, 39),
]

class Prince {
    imya;
    age;
    shoose;

    constructor(imya, age, shoose) {
        this.imya = imya;
        this.age = age;
        this.shoose = shoose;
    }
}

let princeD = new Prince('Adolf',26,34)
// let tuffli = (cinderellaArr, princeD) => {
//     for (const cinderellaArrElement of cinderellaArr) {
//         if (cinderellaArrElement.sizeFeet === princeD.shoose){
//             return `Trueshnaya Cinderella is ${cinderellaArrElement.imya}`
//         }
//     }
//
// }
//
// console.log(tuffli(cinderellaArr,princeD))
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let findCinderella = cinderellaArr.find((element)=> {
    if (element.sizeFeet === princeD.shoose){
        console.log(`Look at the ${element.imya}`)
    }
})
console.log(findCinderella)
