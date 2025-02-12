//data access
const data =[{id:0, name:"jb",age:26}]

console.log(data[0].name)

const products={
    count:500,
    data:[
        {id:1, name:"hp", price:50000 },
        {id:2, name:"asus", price:13000}
    ]
}

const product1={
    name:"potato",
    info:{
        num:20,
        catagoty:{
            type:1, color:"brown",serial:[1,2,40]
        }
    }
}
console.log(products.data[1].price)
console.log(product1.info.catagoty.color)
console.log(product1.info.catagoty.serial[2])

//optional chain
console.log(product1.info.catagory?.color)