document.getElementById('btn-cashOut')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const account = getInputValueById('accountNumber');
        const cashOutAmount = getInputValueById('cashoutAmount');
        const cashOutPin = getInputValueById('cashoutPin');
        const mainBalance = getInnerTextById('mainBalance');
        if (cashOutAmount) {
            if (cashOutPin) {
                substract = mainBalance - cashOutAmount;
                setInnerTextByIdAndValue('mainBalance', substract);


                const container = document.getElementById('transactionContainer');

                const p = document.createElement('p');

                p.innerText = `
                    Cashout /=${cashOutAmount}Taka, from AccountNumber:${account} | TotalBalance: /=${substract}Taka
                    `
                p.classList.add('p-5', 'hr')
                container.appendChild(p);
            }

            else {
                alert('Invalid PIN');
            }
        }
        else {
            alert('Invalid Amount');
        }

    })