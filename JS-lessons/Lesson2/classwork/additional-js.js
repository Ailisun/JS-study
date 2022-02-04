// let friends = [ "Ivan", "Slavik", "Grisha", "Lera", "Ira"]
// if (friends.length >= 3) {
//     console.log('There is a large array')
// }
// else {
//     console.log('There is a small array')
// }

//Перепишіть конструкцію if з використанням умовного оператора '?'
// let a = +prompt('Enter first number')
// let b = +prompt ('Enter second number')
// let result = ( a + b)
// result < 4 ? console.log('Malo') : console.log(' Bagato')

// Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
//  let tt = -43
//  Math.sign(tt) === 1 || Math.sign(tt) === 0 ? console.log('positive') : console.log('negative')

//  - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//  Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
let arr = [ 14, 3, 6]
console.log (arr)
let sortedArray = [...arr]
sortedArray.sort()
console.log(sortedArray)

if (arr[0] > arr[1] && arr[0] < arr[2]) {
    console.log('Золота середина', arr[0] )
}
else { console.log('Не є серединою')}
