const numbers= [1,6,8,4];
//for(let i=0; i<numbers.length;i++){}

//while

//for of - NOT POSSIBLE FOR OBJECT
//for of - array
//array
for(const num of numbers){
    console.log(num)
}
//array string
const info= "sharika parvin joba";
for(const char of info){
    console.log(char)
}

//OBJECT
const glass={
    name:"glass",
    price: 200,
    color:'white',
    isClean:true 
}

//for in - object
for(const key in glass){
    const value = glass[key]
    console.log(key,value)
}