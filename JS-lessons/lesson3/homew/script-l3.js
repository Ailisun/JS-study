// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arr1 = [1, 2, 3, 4, 5]
// console.log(arr1)
// let arr2 =['one', 'two', 'three', 'four', 'five']
// console.log(arr2)
// let arr3 = [ true, 1, 'two', 4, 'five']
// console.log(arr3)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let general = []
// general[0] = true
// general[1] = 22
// general [2] = 'hello'
// console.log(general)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let colors = [
//     {name:'rose', numberinShop: 33},
//     {name:'red', numberinShop: 15},
//     {name:'black', numberinShop: 1},
//     {name:'blue', numberinShop: 4},
//     {name:'white', numberinShop: 2},
//     {name:'orange', numberinShop: 14},
//     {name:'violet', numberinShop: 21},
//     {name:'gray', numberinShop: 3},
//     {name:'brown', numberinShop: 5},
//     {name:'green', numberinShop: 10}
//
// ]
// for (let i = 0; i < 10; i++) {
//     console.log(colors[i]);
// }

// document.write(`<div class="colors-box">`)
// for (const color of colors) {
//     document.write(`<div>${color.name} ${color.numberinShop}</div>`)
// }

// for (let i = 0; i < 10; i++) {
//     document.write(`<div> Довільний текст всередині</div>`);
// }

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i} Довільний текст всередині</div>`);
// }

// let i = 0
// while (i < 20) {
//     document.write(`<h1>Великий заголовок</h1>`)
//     i++
// }

// let i = 0
// while (i < 20) {
//     document.write(`<h1>${i}Великий заголовок</h1>`)
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (i=0; i<arr.length; i++) {
//     console.log(arr[i])
// }

// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let num = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez']
// let i = 0
// while (i <num.length) {
//     console.log(num[i])
//     i++
// }

// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [ 1, false, 'dose', 33, 45, true, false, 'name', 100, false]
// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = [ 1, false, 'dose', 33, 45, true, false, 'name', 100, false]
// for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'boolean') {
//         console.log(arr[i])
//     }
// }

// //За допомогою if та typeof вивести тільки числові елементи
// for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {
//         console.log(arr[i])
//     }
// }

//За допомогою if та typeof вивести тільки рядкові елементи
// for (i = 0; i< arr.length; i++ ) {
//     if (typeof arr[i] === 'string') {
//         console.log(arr[i])
//     }
// }

// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = []
// arr[0] = 'uno'
// arr[1] = 2
// arr[2] = true
// arr[3] = 4
// arr[4] = 'world'
// arr[5] = false
// arr[6] = false
// arr[7] = 8
// arr[8] = 'words'
// arr[9] = true
// for (i=0; i<arr.length; i++) {
//     console.log(arr[i])
// }

// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i < 10; i++) {
//     console.log('поточний номер' + ' ' + i)
//     document.write('Krok' + ' ' +  i)
// }
//Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//  for (i = 0; i < 100; i++ ) {
//      console.log('поточний номер' + ' ' + i)
//      document.write('Krok' + ' ' +  i)
//  }
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// pochatok = 0
// for (i = 0; i < 100; i++ ) {
//     console.log('поточний номер' + ' ' + pochatok)
//      document.write('Krok' + ' ' +  pochatok)
//     pochatok += 2
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log('chyslo' + ' ' + [i])
//     }
// }

// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log('chyslo' + ' ' + [i])
//     }
// }