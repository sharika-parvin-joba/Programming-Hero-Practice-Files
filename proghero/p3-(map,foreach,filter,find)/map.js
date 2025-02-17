const numbers=[2,3,4,5,6];
const doubled=[];
for(const num of numbers){
    const double=num*2;
    doubled.push(double)
}
console.log(doubled)

//map function
//map==> loops through each element of the array and do the operation you that you passed in the call back function and hold the result from each operation in an array and finally returns you the array

const newNumbers=[12,13,14,15,26]

function doubleIt(n){
    console.log("new number:",n)
    return n*2
}
//shortcut
const double2=nn=>nn*2;

const result=newNumbers.map(doubleIt)
console.log(result)
//shortcut
const out=newNumbers.map(double2)
console.log(out)

//shaortcut 3
const output2=numbers.map(n=>n*2)
console.log(output2)