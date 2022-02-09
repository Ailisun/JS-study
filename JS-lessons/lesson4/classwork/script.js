// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function chysla (a, b, c) {
//     let mas = [a, b, c]
//     mas.sort()
//     console.log(mas[0])
// }
// chysla(9,6,1)

// function chysla2 (a, b, c) {
//     let mas = [a, b, c]
//     let minvalue = mas[0]
//     for (i = 0; i < mas.length; i++) {
//         if (minvalue > mas[i] ) {
//             minvalue = mas[i]
//         }
//     }
//     console.log(minvalue)
// }
// chysla2(9,6,1)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function chysla2 (a, b, c) {
//     let mas = [a, b, c]
//     let maxvalue = mas[0]
//     for (i = 1; i < mas.length; i++) {
//         if (maxvalue < mas[i] ) {
//             maxvalue = mas[i]
//         }
//     }
//     console.log(maxvalue)
// }
// chysla2(9,6,1)

// створити функцію яка повертає найбільше число з масиву

// function chysla2 (mas) {
//     let maxvalue = mas[0]
//     for (i = 1; i < mas.length; i++) {
//         if (maxvalue < mas[i] ) {
//             maxvalue = mas[i]
//         }
//     }
//     return(maxvalue)
// }
// console.log(chysla2([2,6,8]))
// створити функцію яка повертає найменьше число з масиву
// function chysla2 (mas) {
//     let minvalue = mas[0]
//     for (i = 1; i < mas.length; i++) {
//         if (minvalue > mas[i] ) {
//             minvalue = mas[i]
//         }
//     }
//     return(minvalue)
// }
// console.log(chysla2([2,6,8]))
// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sum (arr) {
//     let result = 0
//     for (const arrElement of arr) {
//         result = result + arrElement
//     }
//     return result
// }
// sum([1,2,10])
// console.log(sum ([1,2,10]))

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function middleNumber (arr)  {
//     let result = 0
//     for (const arrElement of arr) {
//         result = result + arrElement
//     }
//     return result / arr.length
//
// }
// let result = middleNumber([3,6,8])
// console.log(result)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше;
// function chyslaAll (arr) {
//     let minvalue = arr[0]
//     let maxvalue = arr[0]
//     for (i = 1; i < arr.length; i++) {
//         if (minvalue > arr[i] ) {
//             minvalue = arr[i]
//         }
//         else if (maxvalue < arr[i]){
//             maxvalue = arr[i]
//         }
//     }
//     console.log(maxvalue)
//     return(minvalue)
// }
// console.log(chyslaAll([2,6,8]))

// створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function numberRandom (arrayNumber) {
//     let mas = []
//     for (i = 0; i < arrayNumber; i++)
//         mas.push ( Math.round( Math.random() * 100 ))
//     return mas
//
// }
//
// document.write(numberRandom(6))
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function numberRandom (arrayNumber,limit) {
//     let mas = []
//     for (i = 0; i < arrayNumber; i++)
//         mas.push ( Math.round( Math.random() * limit ))
//     return mas
//
// }
//
// document.write(numberRandom(6,60))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function mas (a,b,c) {
// let arr = [a,b,c]
//     for (let i = arr.length-1; i >= 0; i--) {
//         let newArr = []
//        newArr = arr[i]
//         console.log(newArr)
//     }
// }
// mas(1,2,3)
