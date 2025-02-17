const glass={
    name:"glass",
    price: 200,
    color:'white',
    isClean:true 
}

console.log(glass);
//gettiny keys
const keys= Object.keys(glass)
//gettiny values
const values=Object.values(glass)

console.log(keys)
console.log(values)

//entries
//2d array
const entries=Object.entries(glass)
console.log(entries)