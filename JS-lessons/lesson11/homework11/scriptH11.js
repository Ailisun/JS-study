// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// let { name, age } = document.forms.userForm;
let name = document.getElementById('name');
let age = document.getElementById('age');
let btn = document.getElementById('btn');
let save = (userName, userAge) => {
    let user = {
        name: userName,
        age: userAge
    };
    localStorage.setItem('key', JSON.stringify(user));
};

btn.onclick = () => {
    save(name.value, age.value);
}

// let inputData = document.getElementsByName('name')
// localStorage.setItem("name", inputData.value)


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

let model = document.getElementById('model');
let type = document.getElementById('type');
let volume = document.getElementById('volume');
let buttonCar = document.getElementById('buttonCar');


let data = () => {
    let arrCar =[`${model.value}`,`${type.value}`, `${volume.value}`]
    localStorage.setItem('car_info', arrCar.toString());
}
buttonCar.onclick = () => {
    data();
}