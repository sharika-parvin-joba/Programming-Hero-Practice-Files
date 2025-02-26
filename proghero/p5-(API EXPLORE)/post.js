function loadPosts(){
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(data=>displayPosts(data))
}

function displayPosts(posts){
    const postCon=document.getElementById('posts-container');
    for(const post of posts){
       const addpost=document.createElement('div');
       addpost.classList.add('post')
       console.log(post);
       addpost.innerHTML=`
       <h4>User-${post.userId}</h4>
       <h5>Post: ${post.title}</h5>
       <p>Post Description : ${post.body}</p>
       `
       postCon.appendChild(addpost)
    }
}

loadPosts()