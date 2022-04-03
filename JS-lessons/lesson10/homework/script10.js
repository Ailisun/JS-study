// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

document.getElementById('btn').onclick = function () {
    document.getElementById('text').hidden = true;
}
let clickButton = document.getElementById('text')
let button = document.getElementById('btn')
button.onclick = function () {
    clickButton.style.display = 'none';
    this.style.display = 'none';
}

// Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.getElementById('btn')
// button.onclick = function () {
//     this.style.display = 'none';
// }

// створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


// document.getElementById('btn').onclick = function () {
//   let age =   document.getElementById('age').value;
//      if (+age < 18) {
//         alert('You're not old enough for this');
//     } else {
//         alert('Welcome, buddy');
//     }
// }
// // - Создайте меню, которое раскрывается/сворачивается при клике

// let menuElemenet = document.getElementsByClassName("menu");
// let titleElement = document.getElementsByClassName("title");
// titleElement.onclick = function(){
//     menuElemenet.classList.toggle("hidden");
// } //тут питання, чому через getElement не працює, a querySelector працює

// let menuElement = document.querySelector('.menu');
//     let titleElement = menuElement.querySelector('.title');
//
//     titleElement.onclick = function() {
//         menuElement.classList.toggle('hidden');
//     };
//
// Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comments = [
//     { title: ' Good Morning', body:'could you make me coffee?'},
//     { title: ' Lunch', body:'I have to work'},
//     { title: ' Night', body:'Wanna kanapku'}
// ]
// let general = document.createElement('div')
// for (const elem of comments) {
//     let createBlock = document.createElement('div')
//     let titleShow = document.createElement('h3')
//     let commentShow = document.createElement('p')
//     let buttonShow = document.createElement('button')
//
//    titleShow.innerHTML = elem.title
//    commentShow.innerHTML = elem.body
//     buttonShow.innerHTML = 'close me'
//
//     buttonShow.onclick = function (){
//         commentShow.classList.add('xxx')
//     }
//     createBlock.append(titleShow,commentShow,buttonShow)
//     general.append(createBlock)
// }
// document.body.append(general)
