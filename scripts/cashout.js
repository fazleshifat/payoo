document.getElementById('cashOutToggle')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const cashOutToggle = document.getElementById('cashoutSection');
        const addMoneySection = document.getElementById('addMoneySection');
        cashOutToggle.classList.remove('hidden');
        addMoneySection.classList.add('hidden');
        console.log('cashout clicked')
    })

const cashOut = document.getElementById('btn-cashOut')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // Main balance
        const mainBalance = document.getElementById('mainBalance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        // console.log(convertedMainBalance, typeof convertedMainBalance);

        // Amount Feild
        const cashoutAmount = document.getElementById('cashoutAmount').value;
        const convertedCashoutAmount = parseFloat(cashoutAmount);
        // console.log(convertedAmount, typeof convertedAmount);

        // Pin number feild
        const cashoutPin = document.getElementById('cashoutPin').value;
        const convertedCashoutPin = parseInt(cashoutPin);
        // console.log(convertedPin, typeof convertedPin);

        // accessing element for appending items
        // const newInvalidAcc = document.getElementById('invalidAccount');
        const newInvalidAmount = document.getElementById('cashoutInvalidAmount');
        const newInvalidPin = document.getElementById('cashoutInvalidPin');


        // cashout calculation

        if (convertedCashoutAmount) {
            if (convertedCashoutPin === 1234) {
                subtraction = convertedMainBalance - convertedCashoutAmount;
                console.log(subtraction);
                document.getElementById('mainBalance').innerText = subtraction;
            }
            else {
                // alert('put a valid pin number')
                newInvalidPin.innerText = '*Invalid PIN';
                newInvalidPin.style.color = 'red'; // Make it red for better visibility
            }
        }
        else {
            // alert('put valid amount')
            newInvalidAmount.innerText = '*Invalid Amount ';
            newInvalidAmount.style.color = 'red'; // Make it red for better visibility
        }


    })