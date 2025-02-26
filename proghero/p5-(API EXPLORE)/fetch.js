//API-APPLICATION PROGRAMMABLE INTERFACE
/* fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

*/

const url='https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
// .then(response=> response.json())
// .then(json=>console.log(json))

function loadData(){
    fetch(url)//get the data from the url
.then(response=> response.json()) //convert the data to js object
.then(json=>console.log(json)) //display js obj
}