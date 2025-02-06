// Creating Elements Here
const items= document.getElementById('items')
const newCreation=document.createElement('ul')
newCreation.innerHTML=`
<li>Shop With Us</li>
<li>Count Balance Easily</li>
`
items.appendChild(newCreation)