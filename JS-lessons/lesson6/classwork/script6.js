// // - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
// let newName = (name) => {
//     if(name.includes('---')) return name.replaceAll('---', ' ')
//     else if(name.includes('..')) return name.replaceAll('..', ' ')
//     else if(name.includes('__')) return name.replaceAll('__', ' ')
// }
// console.log(newName(n1))
// console.log(newName(n2))
// console.log(newName(n3))
// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let random = (quantity) => {
//     let arr = []
//     for (let i = 0; i < quantity; i++) {
//         arr.push(Math.round(Math.random() * 100))
//     }}
//     return arr
// }
// console.log(random(30))
// Відсортувати його за допомоги sort
// let random = (quantity) => {
//     let arr = []
//     for (let i = 0; i < quantity; i++){
//         arr.push(Math.round(Math.random() * 100))
//     return arr.sort((a, b) => b - a)
// }
// console.log(random(30))
// масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let random = (quantity) => {
//     let arr = []
//     for (let i = 0; i < quantity; i++) {
//         arr.push(Math.round(Math.random() * 100))
//     }
//     return arr.filter(value => value % 2 === 0)
// }
// console.log(random(30))
// масив рандомних цілих числових значень/за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let random = (quantity) => {
//     let arr = []
//     for (let i = 0; i < quantity; i++) {
//         arr.push(Math.round(Math.random() * 100))
//     }
//     return arr.map(value => value.toString())
// }
// console.log(random(30))

// створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// function chysla2 (mas) {
//     let maxvalue = mas[0]
//     for (i = 1; i < mas.length; i++) {
//           return mas.sort((a,b) => b-a)
//         }
//     }
// console.log(chysla2(nums))

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// // відсортувати його за спаданням за monthDuration
// coursesAndDurationArray.sort (function (current,next){
//     return  next.monthDuration - current.monthDuration
// })
// console.log(coursesAndDurationArray)

// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filterCourse = coursesAndDurationArray.filter(function (course){
//     return course.monthDuration === 5
// })
// console.log(filterCourse)
