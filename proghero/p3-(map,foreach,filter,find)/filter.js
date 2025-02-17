//filter selects elements based on a condition and returns an array with the elements that fulfilled the condition
// keo na milleh ekta empty array dibe
//filter always ekta arrray return korbe
const numbers=[1,2,3,4,5];
const player=[12,23,48,35,60,30,63,70];
const selected=player.filter(p=>p>50);
console.log(selected)

const oddselect=player.filter(p=>p%2===1)
console.log(oddselect)

