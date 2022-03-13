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

// for (const user of users) {
//     let divUsers = document.createElement('div')
//     divUsers.classList.add('person')
//     divUsers.innerText = user.name
//
//  let favButton = document.createElement('button')
// favButton.innerText = 'Add to favorite'
// divUsers.append(favButton)
// favButton.onclick = function () {
//
//     }
//
// document.body.append(divUsers)
// }


// Правильніший варіант
let userBox = document.getElementById('users')
let favorites = JSON.parse(localStorage.getItem('favorites'))
for (const user of users) {
    let userDiv = document.createElement('div')
    userDiv.innerText = user.name + ' '
    let button = document.createElement('button')
    button.innerText = 'Add'
    button.onclick = function (e) {
        favorites.push(user)
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }
userDiv.append(button)
    userBox.append(userDiv)
}