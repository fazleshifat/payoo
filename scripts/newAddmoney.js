document.getElementById('btn-addMoney')
    .addEventListener('click', function (event) {
        event.preventDefault();
       
        
        const amount = getInputValueById('amount');
        const pin = getInputValueById('accountPin')
        const account = getInputValueById('accountNumber');
        const mainBalance = getInnerTextById('mainBalance');

        const bank = document.getElementById('bank').value;

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

                    const div = document.createElement('div');

                    div.innerHTML = `
                    <h1 class="text-center text-yellow-300 bg-purple-400">Added Money from #${bank} </h1>
                    <h2 class="font-bold text-center"> <span class="text-green-600">Added</span>/=${amount}Taka. </h2>
                    <h2 class="font-bold text-center text-yellow-300"> New Balance/=${sum}Taka. </h2>
                    <hr class="border border-yellow-300 my-2 mx-6">
                    
                    `
                    container.appendChild(div);

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