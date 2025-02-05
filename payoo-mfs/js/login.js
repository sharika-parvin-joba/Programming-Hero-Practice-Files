document.getElementById('button-login')
.addEventListener('click',function(event){
    //prevent default behaviour
    event.preventDefault();
  //get the phone number
  const phoneNumber= document.getElementById('phone-number').value
    // console.log(phoneNumber);
  //get the pin number
  const pinNumber=document.getElementById('pin-number').value;
  console.log(phoneNumber,pinNumber);

  if(phoneNumber==="5" && pinNumber==="1234"){
    console.log('u r logged in')
    window.location.href='/home.html'
  }
  else{
    alert('wrong information')
  }
})