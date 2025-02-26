function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>displayalldata(data))
}

function displayalldata(data){
    // for(const user of data){
    //     console.log(user.name)
    // }
    const ul=document.getElementById('users-list');
    for(const user of data){
        console.log(user.name);
        const li=document.createElement('li');
        li.innerText=`user: ${user.name}`;
        ul.appendChild(li)
    }
}