let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// let userBox = document.getElementById('users')
// let addBest = []
//
//
// for (const user of users) {
//     let divUsers = document.createElement('div')
//     divUsers.innerText = user.name
//
//
//     let favButton = document.createElement('button')
//     favButton.innerText = 'Add to favorite'
//     favButton.onclick = function (e) {
//         addBest.push(user)
//         localStorage.setItem('bests', JSON.stringify(addBest))
//     }
//
//     // let anchor = document.createElement('a')
//     // anchor.href ='favoritespage.html'
//     // anchor.innerText = `Follow best members?`?ud=${JSON.stringify(user)}
//     divUsers.append(favButton)
//     // userBox.append(divUsers, anchor)
//     userBox.append(divUsers)
// }
// В наступному і попередньому варіанті чогось не знаходить сторінку html, пробувала в другому варіанті робити як нам показували на лекції, але також не йде




// Правильніший варіант (другий)
// let userBox = document.getElementById('users')
// let favorites = JSON.parse(localStorage.getItem('favorites')) || []
// for (const user of users) {
//     let userDiv = document.createElement('div')
//     userDiv.innerText = user.name + ' '
//     let button = document.createElement('button')
//     button.innerText = 'Add'
//     button.onclick = function (e) {
//         favorites.push(user)
//         localStorage.setItem('favorites', JSON.stringify(favorites))
//     }
// userDiv.append(button)
//     userBox.append(userDiv)
// }