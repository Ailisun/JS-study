// - створити функцію яка обчислює та повертає площу прямокутника
// let sp = (a,b) => a * b
// console.log(sp(5,9))

// створити функцію яка обчислює та повертає площу кола
// let sk = (r) =>  3.14 * r**2
// console.log(sk(8))

// створити функцію яка обчислює та повертає площу циліндру
// let pCl = (h,r) =>  2 * 3.14 * r * (h + r)
// console.log(pCl(12,6))

// створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1,2,3]
// let mas = (arr) => {
//     for (let i = 0; i <arr.length;i++){console.log(arr[i])}
// }
// mas(arr)

// створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let paragraf = (slova) => {
//     document.write(`<p> ${slova}  </p>`)
// }
// paragraf("words")

// створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let threeLi = (a) => {
//     document.write(`<ul>`)
//     document.write(`<li>  ${a} </li>
//  <li> ${a} </li>
//  <li> ${a} </li>`)
//      document.write(`</ul>`)
// }
// threeLi("Sth in English")
// Попереднє завдання + к-ть li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let threeLi = (b,a) => {
//     document.write(`<ul>`)
//     for (let i = 1; i <= a; i++){
//     document.write(`<li>  ${a} </li>`)}
//      document.write(`</ul>`)
// }
// threeLi("Sth in English",3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let masPrymityviv = (vvedit) => {
//     document.write(`<ul>`)
//     for ( let i=0; i < vvedit.length;i++) {
//         document.write(`<li> ${vvedit[i]} </li>`)}
//     document.write(`</ul>`)
// }
//  masPrymityviv([1, true,"string",6])

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let kids = [{Id:112233, name: "Olya", age: 4},{Id:223344, name: "Kate", age: 5}]
// let one = (kids) => {
//     for (const kid of kids) {
//         document.write(`<div> ID - ${kid.id}, NAME -${kid.name}, Age - ${kid.age}</div>`)}
//
//     }
//     one(kids)