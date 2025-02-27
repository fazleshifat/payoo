document.getElementById('btn-addMoney')
    .addEventListener('click', function (event) {
        event.preventDefault();
       
        const bank = getInputValueById('bank');
        const amount = getInputValueById('amount');
        const pin = getInputValueById('accountPin')
        const account = getInputValueById('accountNumber');
        const mainBalance = getInnerTextById('mainBalance');

        if(amount < 0){
            alert('Invalid Amount');
            return;
        }

        if (account.toString().length === 11) {
            if (amount) {
                if (pin === 1234) {
                    sum = mainBalance + amount;
                    setInnerTextByIdAndValue('mainBalance', sum);

                    const container = document.getElementById('transactionContainer');

                    const p = document.createElement('p');

                    p.innerText = `
                    Added /=${amount}Taka, from AccountNumber:${account} ||Bank Name: ${bank}||TotalBalance: /=${sum}Taka
                    `
                    p.classList.add('p-5')
                    container.appendChild(p);

                    // Clearing input fields
                    document.getElementById('amount').value = "";
                    // document.getElementById('accountPin').value = "";
                    // document.getElementById('accountNumber').value = "";
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