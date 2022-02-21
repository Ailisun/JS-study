// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який : (cпитатися)
// a) додає клас з назвою групи, елементу з ід main_header
// let addClass = document.getElementById('main_header')
//     addClass.children.namedItem('xxx')
// a) додає клас з назвою групи, елементу з ід main_header
let addClass = document.getElementById('main_header')
addClass.classList.add('dec-2021')
// b) робить шириниу елементу ul 400px
// let w400 = document.getElementsByTagName('ul')
// w400[0].style.width = '400px'

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let w50 = document.getElementsByClassName('linkList')
// for (const w50Element of w50) {
//     w50Element.style.width = '50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// let getText = document.getElementsByClassName('listElement2')
// console.log(getText[0].innerText)

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let liColor = document.getElementsByTagName('li')
// console.log(liColor)
// for (const element of liColor) {
//     element.style.backgroundColor = 'gray'
// }
// f) отримує всі елементи 'a' та додає їм клас anchor
// let newClass = document.getElementsByTagName('a')
// for (const element of newClass) {
//     element.classList.add('anchor')
// }
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let sizeChange = document.getElementsByTagName('a')
// for (const element of sizeChange) {
//     if(element.innerText ==='link3') {
//         element.style.fontSize = '40px'
//     }

// -
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let addClass = document.getElementsByTagName('a')
// console.log(addClass)
// for (const item of addClass) {
//     let newClass = item.innerText
//     item.classList.add(`element_${newClass}`)
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let newColor = document.body.getElementsByClassName('sub-header')
// for (const each of newColor) {
//     each.style.backgroundColor = prompt('Enter the color to change')
// }
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let subColor = document.getElementsByClassName('sub-header')
// for (const element of subColor) {
//     if (element.innerHTML === 'content 2 segment') {
//         element.style.color = prompt('enter the color')
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let newText = document.getElementsByClassName('content_1')
// // console.log(newText)
// newText[0].innerHTML = prompt('Enter text')

// l) отримати елементи p та змінити їм padding на 20px
// let siseP = document.getElementsByTagName('p')
// for (const p_element of siseP) {
//     p_element.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let newName = document.getElementsByClassName('text2')
// newName[0].innerHTML = 'feb-2021'