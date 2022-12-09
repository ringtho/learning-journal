import { posts } from "./data.js"
const postEl = document.querySelector('.post-container')
const viewMoreBtn = document.getElementById('view-more')


if (viewMoreBtn){
    viewMoreBtn.addEventListener('click', function(e){
        e.preventDefault()
        posts.forEach(function(post){
            if (post.display === false){
                post.display = true
            }
        })
        renderPosts()
    })
}

function renderPosts(){
    let postsHTML = ''
    posts.forEach(function(post){
        if (post.display === true){
            postsHTML += `
            <section class="post display">
                <img src="${ post.img }" class="post-img" alt="${post.alt}">
                <p class="post-date">${ post.date }</p>
                <h2 class="post-heading">${ post.title }</h2>
                <p class="post-content">${ post.content }
                </p>
            </section>
        `
        }
        
    })
    postEl.innerHTML = postsHTML
    
}

renderPosts()


