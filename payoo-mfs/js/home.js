//add money to the account
/*step-1: add an event handler to the add money button inside the form
prevent page reload after form submit
step-2: get money tobe added to the account balance
step-3: verify pin number
*/
document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    //prevent page reloard after form submit
    event.preventDefault();

    //step-2: get money to be added to the account
   const addMoneyInput= document.getElementById('input-add-money').value

    console.log(addMoneyInput)
    //get the pin number
    const pinNumberInput=document.getElementById('input-pin-number').value
    console.log(pinNumberInput)
// step-3: verify pin number
//weong way to validate pin number
if(pinNumberInput==='1234'){
    console.log('right information');
    //step 4: get the current balance
    const balance=document.getElementById('account-balance').innerText
    console.log(balance);

    //step-5: add addMoneyInput with balance

   const addMoneyNumber=parseFloat(addMoneyInput);
   const balanceNumber=parseFloat(balance);
   const newBalance=balanceNumber+addMoneyNumber;
    console.log(newBalance);

    //step-6: Update the balance in the UI/DOM
    document.getElementById('account-balance').innerText=newBalance

}
else{
    alert('wrong information')
}

})