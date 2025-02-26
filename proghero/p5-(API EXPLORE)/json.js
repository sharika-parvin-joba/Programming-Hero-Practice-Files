//JSON-(JAVASCRIPT OBJECT NOTATION)
//JSON is often used to send data between web applications and servers
//a simple format used to store and transport data

const user={id:1,name:'abc',job:'actor'};
const stringified=JSON.stringify(user);
console.log(user);
console.log(stringified);


const shop = {
    owner: 'ALI',
    address:{
        street:'dhaka',
        city:'dhaka',
        country:'BD'
    },
    products:['pc','laptop','keyboard','mic'],
    revenue:45000,
    isOpen:true,
    isNew:false
}

console.log(shop);
const shopJson=JSON.stringify(shop);
console.log(shopJson)
const shopObj=JSON.parse(shopJson);
console.log(shopObj)