//function expression
function add(a,b){
    const result=a+b;
    return result;
}
const sum=add(5,90);
console.log(sum);

//arrow function

const add2=(a,b)=> a+b;
const total=add2(2,3);
console.log(total)

//more arrow function

//single or one perameter

const getAge=(person)=>person.age;
const student={name:'abc', age:23};
const age=getAge(student)
console.log(age);

//no parameter

const getPI=()=> Math.PI
  console.log(getPI())

//large arrow function
//jeita return korbo oitar shamne return keyword use korbo

const doMath=(x,y,z)=>{
    const sum=x+y+z;
    const multi=x*y;
    const result=sum+multi;
    return result;
}
console.log(doMath(1,2,3))