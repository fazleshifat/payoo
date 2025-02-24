document.getElementById('btn-login').addEventListener('click', function(even){
    even.preventDefault();
    
   const accountNumber = document.getElementById('accountNumber').value;
   const convertedAccNum = parseInt(accountNumber);

   const accountPin = document.getElementById('accountPin').value;
   const convertedAccPin = parseInt(accountPin);

   if( convertedAccNum === 11111111111){
    if( convertedAccPin === 1234){
        window.location.href="./main.html"
    }
    else{
        console.log('incorrect pin')
    }
   }
   else{
    console.log('put a valid account number')
   }
   
} )