document.getElementById('btn-addMoney')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = getInputValueById('amount');
        const pin = getInputValueById('accountPin')
        const account = getInputValueById('accountNumber');
        const mainBalance = getInnerTextById('mainBalance');
        
        if (account.toString().length === 11) {
            if (amount) {
                if (pin === 1234) {
                    sum = mainBalance + amount;
                    setInnerTextByIdAndValue('mainBalance', sum);
                    console.log(sum);
                }
                else {
                    alert('Invalid PIN');
                }
            }

            else {
                alert('Invalid Amount')
            }
        }
        else {
            alert('Invalid Account Number')
        }

    })