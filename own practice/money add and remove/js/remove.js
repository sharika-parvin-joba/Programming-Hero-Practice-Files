//common function
function removeElement(id){
    const selectedElement=document.getElementById(id).innerText;
    const selectedElementNumber=parseFloat(selectedElement)
    return selectedElementNumber;
}
//common function end

//remove button
document.getElementById('remove-1').addEventListener('click',function(event){
  event.preventDefault('');
  const removeItems=removeElement('total-bill');
//   const removeItemsPrice=parseFloat(removeItems);
  const price1=removeElement('price-1');
//   const price1Number= parseFloat(price1);
  const totalBalance= removeItems-price1;
  document.getElementById('total-bill').innerText=totalBalance;
})

document.getElementById('remove-2').addEventListener('click',function(event){
    event.preventDefault('');
    const removeItems=removeElement('total-bill');
  //   const removeItemsPrice=parseFloat(removeItems);
    const price1=removeElement('price-2');
  //   const price1Number= parseFloat(price1);
    const totalBalance= removeItems-price1;
    document.getElementById('total-bill').innerText=totalBalance;
  })