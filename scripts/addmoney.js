const btnAddMoney = document.getElementById('btn-addMoney');
btnAddMoney.addEventListener('click', function(event){
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    console.log(convertedAmount, typeof convertedAmount);
   
    const pin = document.getElementById('accountPin').value;
    const convertedPin = parseInt(pin);
    console.log(convertedPin, typeof convertedPin);

    const mainBalance = document.getElementById('mainBalance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    console.log(convertedMainBalance, typeof convertedMainBalance);

    if(convertedPin === 1234){
        sum = convertedMainBalance + convertedAmount;
        console.log(sum);
        convertedMainBalance.innerText = sum;
        document.getElementById('mainBalance').innerText = sum;
    }
    else{
        alert('put valid number')
    }
})