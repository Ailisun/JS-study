let url = new URL(location.href)
let post = JSON.parse(url.searchParams.get('data'))
console.log(post)
let postContainer = document.getElementsByClassName('postAdd')[0]
postContainer.innerHTML =` <h4>Id: ${post.id}</h4>
 <h4>User number: ${post.userId}</h4>
 <h4>Title: ${post.title}</h4>
 <h4>Post: ${post.body}</h4>`
let commentsContainer = document.getElementsByClassName('comments')[0]
fetch(`https:jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then (value => value.json())
    .then (value => {
        for (const commentItem of value) {
            let commentContainer = document.createElement('li')
            commentContainer.innerText = commentItem.body
            commentsContainer.append(commentContainer)

        }
    })

