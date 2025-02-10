//object destructuring
const obj={
    name:"abc",
    age:34,
    surname:"khan"
}

const {name,age,surname}=obj
console.log(name,age,surname)

const {age:boyosh}=obj
console.log(boyosh)