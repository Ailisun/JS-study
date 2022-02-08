// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function ss(a,b) {
//      return a * b
// }
// console.log (ss(4, 6))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function  kolo (r){
//     return 3.14 * r**2
// }
// console.log (kolo(7))
// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// S=2πR(h+R)
// function cylindr (h,r){
//      return 2 * 3.14 * r * (h + r)
// }
// console.log(cylindr(7,4))
// створити функцію яка приймає масив та виводить кожен його елемент
// let mes = [1, 2, 3 ]
// function printArr (x) {
//      for (let i = 0; i < x.length; i++) {
//           console.log(x[i])
//      }
// }
// printArr(mes)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function netext(slova){
//      document.write(`<p>` + slova  + `</p>`)
// }
// netext("dog")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function  list (a) {
//      document.write(`<ul>`)
//      document.write(`<li>  ${a} </li>
// <li> ${a} </li>
// <li> ${a} </li>`)
//      document.write(`</ul>`)
//
// }
// list("ytgftvgcnz")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function  list (counter,a) {
//      document.write(`<ul>`)
//      for (let i = 1; i <= counter; i++)
//      document.write(`<li>  ${a} </li>`)
//      document.write(`</ul>`)
// }
// list(7,"ytgftvgcnz")
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function general (mas) {
//      document.write(`<ul>`)
//      for (let i = 0; i < mas.length; i++) document.write(`<li> ${mas[i]} </li>`)
//      document.write(`</ul>`)
// }
// general([4, true, "hello", 4.5])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let xxx = [
//      {id:34, name: "Tania", age: 45},
//      {id:15, name: "Fedir", age: 30},
//      {id:25, name: "Nazar", age: 25}]
// function one (persons) {
//      for (const person of persons) {
//           document.write(`<div> ID - ${person.id}, NAME -${person.name}, Age - ${person.age}</div>`)
//      }
// }
// one(xxx)

