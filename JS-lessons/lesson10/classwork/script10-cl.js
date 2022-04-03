// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let comments=[]
// let form = document.forms[0];
// form.onsubmit = function (e) {
//     e.preventDefault()
//     console.log(e.target.comment1.value)
//     console.log(e.target.comment2.value)
//
// }

// let firstPart = document.createElement('div');
//
// firstPart.style.margin = '30px';
// document.body.appendChild(firstPart);
// let secondPart = document.createElement('div');
// secondPart.style.margin = '30px';
// document.body.appendChild(secondPart);
//
// let formOne = document.createElement('form');
// formOne.setAttribute('name', 'formOne');
// firstPart.appendChild(formOne);
// let formTwo = document.createElement('form');
// formTwo.setAttribute('name', 'formTwo');
// secondPart.appendChild(formTwo);
//
// let firstInput = document.createElement('input');
// firstInput.setAttribute('name', 'firstInput');
// let secondInput = document.createElement('input');
// secondInput.setAttribute('name', 'secondInput');
//
// let thirdInput = document.createElement('input');
// thirdInput.setAttribute('name', 'thirdInput');
// let fourInput = document.createElement('input');
// fourInput.setAttribute('name', 'fourInput');
//
// let button = document.createElement('button');
// button.innerText = 'Push';
// button.style.marginLeft = '30px'
// document.body.appendChild(button);
//
// formOne.append(firstInput,secondInput);
// formTwo.append(thirdInput,fourInput);
//
//
// button.addEventListener('click', function (){
//     console.log(document.forms.formOne.firstInput.value);
//     console.log(document.forms.formOne.secondInput.value);
//     console.log(document.forms.formTwo.thirdInput.value);
//     console.log(document.forms.formTwo.fourInput.value);
// })

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//        При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

//test for me
// var tableString = "<table>",
//     body = document.getElementsByTagName('body')[0],
//     div = document.createElement('div');
//
// for (row = 1; row < 7; row += 1) {
//
//     tableString += "<tr>";
//
//     for (col = 1; col < 5; col += 1) {
//
//         tableString += "<td>" + "row [" + row + "]" + "col [" + col + "]" + "</td>";
//     }
//     tableString += "</tr>";
// }
//
// tableString += "</table>";
// div.innerHTML = tableString;
// body.appendChild(div);


// завдання
// let inputOne = document.createElement('input');
//
// let inputTwo = document.createElement('input');
//
// let inputThree = document.createElement('input');
//
// let button = document.createElement('button');
// button.innerText = 'Create table';
// document.body.append(inputOne, inputTwo, inputThree, button);
//
//
// button.addEventListener('click', function () {
//     let tr = inputOne.value;
//     let td = inputTwo.value;
//     let enterText = inputThree.value;
//
//     function createTable(tr, td, addText) {
//         let table = document.createElement('table');
//         let divFortable = document.createElement('div');
//         table.style.border = '2px solid blue';
//         divFortable.appendChild(table);
//         document.body.appendChild(divFortable);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '2px solid green';
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '2px solid green';
//                 td.innerText = `${addText}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//     createTable(tr, td, enterText);
// })

// - Сворити масив не цензцрних слів/Сворити інпут текстового типу.Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.Перевірку робити при натисканні на кнопку
//
// let words = ['Bastard', 'Jerk', 'Nazi'];
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'Send';
// document.body.append(input, button);
//
// button.addEventListener('click', function () {
//     let data = input.value;
//
//     for (let element of words) {
//         if (element === data) {
//             alert('Get lost!');
//             input.value = '';
//             return;
//         }
//     }
//     console.log(data)
//
// })

// - Сворити масив не цензцрних слів.Сворити інпут текстового типу.Потрібно перевіряти чи не містить ціле речення в собі погані слова.Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let words = ['Bastard', 'Jerk', 'Nazi'];
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'Send';
// document.body.append(input, button);
//
// input.addEventListener('input', (e) => {
//     for (const element of words) {
//         if (e.target.value.toLowerCase().includes(element)) {
//             alert('Go away')
//         }
//     }
//     button.addEventListener('click', function (e) {
//         console.log(input.value)
//     })
// })