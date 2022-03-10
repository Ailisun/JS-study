// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// document.getElementById('btn').onclick = function () {
//     document.getElementById('text').hidden = true;
// }
// let clickButton = document.getElementById('text')
// let button = document.getElementById('btn')
// button.onclick = function () {
//     clickButton.style.display = 'none';
// }

// Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.getElementById('btn')
// button.onclick = function () {
//     this.style.display = 'none';
// }

// створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form = document.forms[0]
// let inputData = form.age;
// inputData.addEventListener('input', (e) => {
//     let yourInput = e.target
//     let DatafromInput = yourInput.value
//     if (DatafromInput < 18) {
//         alert('please leave this page')
//     }
// // })
// // - Создайте меню, которое раскрывается/сворачивается при клике

// let ulElemenet = document.getElementsByClassName("menu");
// let titleElement = document.getElementsByClassName("title");
// titleElement.onclick = function(){
//     ulElemenet.classList.toggle("hidden");
// }
// Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    { title: ' Good Morning', body:'could you make me coffee?'},
    { title: ' Lunch', body:'I have to work'},
    { title: ' Night', body:'Wanna kanapku'}
]
let general = document.createElement('div')
for (const elem of comments) {
    let createBlock = document.createElement('div')
    let titleShow = document.createElement('h3')
    let commentShow = document.createElement('p')
    let buttonShow = document.createElement('button')

   titleShow.innerHTML = elem.title
   commentShow.innerHTML = elem.body
    buttonShow.innerHTML = 'close me'

    buttonShow.onclick = function (){
        commentShow.classList.add('pHidden');
    }
    createBlock.append(titleShow,commentShow,buttonShow)
    general.append(createBlock)
}
document.body.append(general)
//спросить у Тараса почему не работает