// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a = 'hello world'
// let b = 'lorem ipsum'
// let c = 'javascript is cool'
// console.log(a.length, b.length, c.length)
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let sum = a +' '+ b + ' ' + c
// let upperCase = sum.toUpperCase()
//     console.log(upperCase)
//     - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let lowerCase = sum.toLowerCase()
// console.log(lowerCase)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// // console.log (str.replaceAll(' ',''))
//  let newStr = str.startsWith(' ') && str.endsWith(' ') ? str.replace(' ', '') : str.replaceAll(' ','')
// console.log(newStr)

// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = (str) => {
//     return str.split(' ')
// }
// let newArr = arr(str)
// console.log(newArr)

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let str = 'Каждый охотник желает знать';
// let delete_characters = (substr, index) => {
//     return str.substr(0, index)
// }
// console.log(delete_characters(str,17))

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
// let insertDash = (str) => {
//     if (str.includes(' ')) {
//         return str.replaceAll(' ', '-')
//     }
// }
// console.log((insertDash(str)).toUpperCase())

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// const str = 'The quick brown fox jumps over the lazy dog.'; (просто пример перед глазами с инета)
// console.log(str.slice(3));

// let newStr = (str) => {
//     return str[0].toUpperCase() + str.slice(1)
// }
// console.log(newStr('oaineawvc'))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let cutted = (str) => {
    let splitedStr =  str.split(' ')

    for (let i = 0; i < splitedStr.length; i++) {
        splitedStr[i] = splitedStr[i][0].toUpperCase() + splitedStr[i].substr(1);
    }
    console.log(splitedStr.join(' '))
}
cutted('laiefaevsd wadvsfc')



// но у нас в решенных было так
// let cutted = (str) => {
//     return str.split(' ').map(slovo=>slovo.charAt(0).toUpperCase() + slovo.slice(1)).join(' ')
// }
// console.log(cutted('laiefaevsd wadvsfc'))
