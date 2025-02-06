//add btn-1



document.getElementById('add-btn-1').addEventListener('click',function(event){
    //stoping from reload
event.preventDefault();
const totalBill=document.getElementById('total-bill').innerText;
const totalBillNumber=parseFloat(totalBill);
const firstPrice=document.getElementById('price-1').innerText;
const firstPriceNumber=parseFloat(firstPrice)
const addBill=totalBillNumber + firstPriceNumber;
document.getElementById('total-bill').innerText=addBill

// console.log(addBill)
})

//add btn-2
document.getElementById('add-btn-2').addEventListener('click',function(event){
    //stoping from reload
event.preventDefault();
const totalBill=document.getElementById('total-bill').innerText;
const totalBillNumber=parseFloat(totalBill);
const firstPrice=document.getElementById('price-2').innerText;
const firstPriceNumber=parseFloat(firstPrice)
const addBill=totalBillNumber + firstPriceNumber;
document.getElementById('total-bill').innerText=addBill

// console.log(addBill)


})