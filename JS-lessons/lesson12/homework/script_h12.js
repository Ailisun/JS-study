// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(elements => {
    let allItems = document.createElement('div')
    allItems.classList.add('general')
    for (const element of elements) {
        let divElements = document.createElement('div')
        divElements.classList.add('info')
        divElements.innerHTML = `<h3>Number:${element.id}</h3> <h4>Title:${element.title}</h4><p><u>Comment:</u>${element.body}</p>`
        allItems.append(divElements)
        document.body.append(allItems)
    }
})

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

