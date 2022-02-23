// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let createDiv = document.createElement('div')
// // createDiv.style.padding = '20px'
// // createDiv.classList.add('wrap')
// //
// // let collapse = document.createElement('div')
// // collapse.style.width = '400px'
// // collapse.style.height = '300px'
// // collapse.style.backgroundColor = 'green'
// // collapse.style.display = 'flex'
// // collapse.style.justifyContent = 'space-evenly'
// // collapse.classList.add('collapse')
// //
// // let alpha = document.createElement('div')
// // alpha.innerHTML = 'Something in English'
// // alpha.style.color = 'black'
// // collapse.classList.add('alpha')
// //
// // let beta = document.createElement('div')
// // beta.innerHTML = 'Something in Italian'
// //     beta.style.color = 'white'
// //     beta.style.fontSize = '20px'
// // beta.classList.add('beta')
// //
// // collapse.append(alpha, beta)
// // createDiv.appendChild(collapse)
// // document.body.append(createDiv)
// //
// // let createDiv2 = createDiv.cloneNode(true)
// // document.body.append(createDiv2)


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// function allOptions (mas) {
//     let ul = document.getElementsByClassName('menu')[0]
//     for (let i = 0; i < mas.length; i++) {
//         let li = document.createElement('li')
//         li.appendChild(document.createTextNode(mas[i]))
//         ul.appendChild(li)
//     }
// }
//
// allOptions(['Main','Products','About us','Contacts'])


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (const item of coursesAndDurationArray) {
//     let newDiv = document.createElement('div')
//     newDiv.innerHTML = item.title + ' ' +  item.monthDuration
//     document.body.append(newDiv)
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// for (const item of coursesAndDurationArray) {
//     let newDiv = document.createElement('div')
//     newDiv.classList.add('item')
//     let h1 = document.createElement('h1')
//     h1.classList.add('heading')
//     h1.innerHTML = item.title
//
//     let p = document.createElement('p')
//     p.classList.add('description')
//     p.innerHTML = item.monthDuration
//
//     newDiv.appendChild(h1)
//     newDiv.appendChild(p)
//     document.body.append(newDiv)
// }
