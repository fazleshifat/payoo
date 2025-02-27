document.getElementById('btn-cashOut')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const account = getInputValueById('accountNumber');
        const cashOutAmount = getInputValueById('cashoutAmount');
        const cashOutPin = getInputValueById('cashoutPin');
        const mainBalance = getInnerTextById('mainBalance');

        if(cashOutAmount > mainBalance || cashOutAmount < 0){
            alert('insufficient balance');
            return;
        }
        if (cashOutAmount) {
            if (cashOutPin) {
                substract = mainBalance - cashOutAmount;
                setInnerTextByIdAndValue('mainBalance', substract);


                const container = document.getElementById('transactionContainer');

                    const div = document.createElement('div');

                    div.innerHTML = `
                    <h2 class="font-bold text-center"> <span class="text-yellow-600">Cashout</span>/=${cashOutAmount}Taka. </h2>
                    <h2 class="font-bold text-center text-yellow-300"> New Balance/=${substract}Taka. </h2>
                    <hr class="border border-yellow-300 my-2 mx-6">
                     
                    
                    `
                container.appendChild(div);

                // Clearing input fields
                document.getElementById('cashoutAmount').value = "";
                // document.getElementById('cashoutPin').value = "";
                // document.getElementById('accountNumber').value = "";
            }

            else {
                alert('Invalid PIN');
            }
        }
        else {
            alert('Invalid Amount');
        }

    })