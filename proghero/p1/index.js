const b= document.getElementById('head').innerText="hello";
// const lists= document.querySelectorAll('li');
// for(const list of lists){
//   list.style.color="red";
//   list.style.border="2px solid blue";
//   list.style.borderRadius="20px"
// } 

//where to add
const orderlist=document.getElementById('order-list');
//what to add
const add = document.createElement('li')
add.innerText='abc';
//add the child
orderlist.appendChild(add);


const hi=document.getElementById('hi');
const ad=document.createElement('ul');
ad.innerHTML=`
<li>joba</li>
<li>jui</li>`
hi.appendChild(ad)

//EVENTLISTENER
const morediv=document.getElementById('more')
morediv.addEventListener('click',function more(){
morediv.style.backgroundColor='blue'
})