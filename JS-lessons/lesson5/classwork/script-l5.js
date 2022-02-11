// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let numberMin = (a,b,c) => {
//     if (a < b && a < c) {
//         console.log(a)
//     }
//     else if (b < a && b <c) {
//         console.log(b)
//     }
//     else {
//         console.log(c)
//     }
// }
// numberMin(31,15,54)
// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let numberMax = (a,b,c) => {
//     if (a > b && a > c) {
//         console.log(a)
//     }
//     if (b > a && b > c) {
//         console.log(b)
//     }
//     if (c > a && c > b){
//
//     }
// }
// numberMax(60,23,14)

// створити функцію яка повертає найбільше число з масиву
// let oneChmax = (mas) => {
//     let maxV = mas[0]
//     for (let i=0; i< mas.length; i++) {
//         if (maxV  < mas[i]) {
//             maxV = mas[i]
//         }
//
//     }
//     return maxV
// }
// console.log(oneChmax([11,22,57]))

// створити функцію яка повертає найменьше число з масиву
// let oneChmin = (mas) => {
//     let minV = mas[0]
//     for (let i=0; i< mas.length; i++) {
//         if (minV  > mas[i]) {
//             minV = mas[i]
//         }
//
//     }
//     return minV
// }
// console.log(oneChmin([11,22,57]))

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад [1,2,10]->13
// let masSum = (mas=[1,2,10]) =>{
//     let sum = 0;
//     for (const ma of mas) {
//         sum = ma + sum
//
//     }
//     return sum
// }
// console.log(masSum())
// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//  let mas = (mas) => {
//     let sum = 0;
//      for (const ma of mas) {
//         sum = (ma + sum)
//     }
//      return sum/mas.length
//  }
// console.log(mas([1,2,10]))
// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// let number = (amounts) => {
//     let min = amounts[0]
//     let max = amounts[0]
//     for (const amount of amounts) {
//         if (amount > max) {
//             max = amount
//         }
//         else if (amount < min) {
//              min = amount
//         }
//     }
//     document.write(max)
//     return min
// }
// console.log(number([32, 12, 14, -17]))
// створити функцію яка заповнює масив рандомними числами
// let random = (quantity) => {
//     let arr = []
//     for (let i = 0; i < quantity; i++) {
//         arr.push(Math.round(Math.random() * 100))
//     }
//     return arr
// }
// console.log(random(30))

// let random = () => {
//     let arr = []
//     for (let i = 0; i < 100; i++) {
//         arr.push(Math.round(Math.random() * 100))
//     }
//     return arr
// }
// console.log(random())

// Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let threeReverse = (mas) => {
//     let newArr = []
//     for (let i = mas.length-1; i >= 0; i--) {
//         newArr.push(mas[i])
//     }
//     return newArr
// }
// console.log(threeReverse([1,2,3]))
