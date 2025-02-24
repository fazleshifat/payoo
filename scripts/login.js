document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    
   const accountNumber = document.getElementById('accountNumber').value;
   const convertedAccNum = parseInt(accountNumber);

   const accountPin = document.getElementById('accountPin').value;
   const convertedAccPin = parseInt(accountPin);

   if( accountNumber.length === 11){
    if( convertedAccPin === 1234){
        window.location.href="./main.html"
    }
    else{
        alert('incorrect pin')
    }
   }
   else{
    alert('put a valid account number')
   }
   
} )