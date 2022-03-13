// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
https://jsonplaceholder.typicode.com/posts
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
fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(elements => {
    let comments = document.createElement('div')
    comments.classList.add('main')
    for (const element of elements) {
        let divComment = document.createElement('div')
        divComment.classList.add ('subsection')
        divComment.innerHTML = `<div class="both">
        <h4>${element.postId}.</h4> 
        <h4>${element.id}</h4></div>
        <h5>${element.name}</h5> 
        <h5>${element.email}</h5>  
        <p>${element.body}`
        comments.append(divComment)
        document.body.appendChild(comments)

    }
})

