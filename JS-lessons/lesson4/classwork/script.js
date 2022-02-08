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
