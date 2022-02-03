// let chyslo1 = prompt('Введіть перше число')
// let chyslo2 = prompt('Введіть друге число')
//  if (chyslo1 > chyslo2) {
//      console.log(chyslo1)
//  }
//  else if  ( chyslo1 === chyslo2) {
//      console.log(chyslo1, 'Рівні числа')
//  }
//  else {
//      console.log(chyslo2)
//  }

// let chataN = +prompt('Вкажи номер квартири')
// if  (chataN >0 && chataN <=20 ) {
//     console.log('Перший підїзд')
// }
// else if (chataN >=21 && chataN <= 48) {
//     console.log('Другий підїзд')
// }
//
// else if (chataN >=49 &&  chataN <= 90) {
//     console.log('Третій підїзд')
// }
// else {
//     console.log('Загубився, чи шо?')
// }

// let number = +prompt('Введи число')
// number === 10 ? console.log ('Virno') : console.log('Nevirno')

// let gra = +prompt('enter your number')
// switch (gra) {
//     case 1 :
//         console.log('Avto')
//         break
//     case 2 :
//         console.log('Phone')
//         break
//     case 3:
//         console.log('Trip')
//         break
//     case 4:
//         console.log('Toy')
//         break
//     case 5:
//         console.log('Sweets')
//         break
//     default :
//         console.log('Wrong number')
// }

// let lessonInOkten = +prompt('Яка температура сьогодні?')
// if  (lessonInOkten >= 10 && lessonInOkten <= 22) {
//     console.log('Йди вчитися')
// }
// else {
//     console.log('Лишайся вдома')
// }

let x = {}
 console.log(typeof x)
if (typeof x === 'number') {
    console.log('1')
}
else if (typeof x === 'string') {
    console.log('2')
}
else if (typeof x === 'boolean') {
    console.log('3')
}
else if (typeof x === 'object') {
    console.log('4')
}
else {
    console.log('sth else')
}
