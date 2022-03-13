// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// let name = document.getElementById('name');
// let age = document.getElementById('age');
// let btn = document.getElementById('btn');
// let save = (userName, userAge) => {
//     let user = {
//         name: userName,
//         age: userAge
//     };
//     localStorage.setItem('key', JSON.stringify(user));
// };
//
// btn.onclick = () => {
//     save(name.value, age.value);
// }


// aбо

let f1= document.forms.f1
f1.onsubmit = function (e) {
    e.preventDefault()
// e.target це те саме що f1
    let nameInput = e.target.username.value
    let ageInput = e.target.age.value
    let user = {nameInput, ageInput}
    // let user = {nameInput:nameInput, ageInput:ageInput} ключ і значення(для себе позначаю)
    localStorage.setItem(nameInput, JSON.stringify(user))
}
// //скоротити можна так(лекція):
// let f1= document.forms.f1
// f1.onsubmit = function (e) {
//     e.preventDefault()
//     localStorage.setItem(nameInput, JSON.stringify({
//         nameInput:e.target.username.value, ageInput:e.target.age.value
//     }))
// }

//Завдання з машинами:
// let model = document.getElementById('model');
// let type = document.getElementById('type');
// let volume = document.getElementById('volume');
// let buttonCar = document.getElementById('buttonCar');
//
//
// let data = (mdlData, typeData, vlData) => {
//     mdlData:model;
//      typeData: type;
//      vlData:volume;
//     let arrCar =[mdlData, typeData, vlData]
//     localStorage.setItem('car_info', arrCar.toString());
// }
// buttonCar.onclick = () => {
//     data(model.value, type.value, volume.value);

    // Ще один варіант нижче
let model = document.getElementById('model');
let type = document.getElementById('type');
let volume = document.getElementById('volume');
let buttonCar = document.getElementById('buttonCar');


let data = () => {
    let arrCar =[`${model.value}`,`${type.value}`, `${volume.value}`]
    localStorage.setItem('car_info', JSON.stringify(arrCar))
}
buttonCar.onclick = () => {
    data();
}

//Прикольніший варіант (показали на леції, додала запам)

// let CarsArr= localStorage.getItem('cars')
// let CarsArr= JSON.parse(localStorage.getItem('cars'))
// document.forms.forCars.onsubmit = function (e) {
//     e.preventDefault()
//     let model = e.target.model.value
//     let type = e.target.type.value
//     let volume = e.target.volume.value
//     let car = {model, type, volume}
//     CarsArr.push(car)
//     localStorage.SetItem('cars', JSON.stringify(CarsArr))
// }