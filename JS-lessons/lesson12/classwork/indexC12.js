// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
// https://jsonplaceholder.typicode.com/posts

function getAllPosts () {
    let result =  fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(elements => {
            let allItems = document.createElement('div')
            allItems.classList.add('general')
            for (const element of elements) {
                let divSection = document.createElement('div')
                divSection.classList.add('section')
                divSection.innerHTML = `<h3>Number:${element.id}</h3> 
                <h4>Title:${element.title}
                </h4><p>Body: ${element.body}</p>`

                let button = document.createElement('button')
                button.innerText = 'info'
                button.addEventListener('click', function () {
                    let comments = fetch('https://jsonplaceholder.typicode.com/comments?postId=' + element.id)
                        .then (commentResponse => commentResponse.json())
                        .then ( commentElement => {
                            // console.log(commentElement)
                            for (const commentDivElement of commentElement) {
                                let commentDiv = document.createElement('div')
                                commentDiv.classList.add('buttonForComment')
                                commentDiv.innerHTML = `<h4> Comment:${commentDivElement.body}</h4>`
                                divSection.append(commentDiv)
                            }

                        })
                })


                allItems.append(divSection)
                allItems.append(button)
                document.body.append(allItems)

            }
        })
    return result




}
