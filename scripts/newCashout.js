document.getElementById('btn-cashOut')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const cashOutAmount = getInputValueById('cashoutAmount');
        const cashOutPin = getInputValueById('cashoutPin');
        const mainBalance = getInnerTextById('mainBalance');
        if (cashOutAmount) {
            if (cashOutPin) {
                substract = mainBalance - cashOutAmount;
                setInnerTextByIdAndValue('mainBalance', substract);
                console.log(substract);
            }

            else {
                alert('Invalid PIN');
            }
        }
        else {
            alert('Invalid Amount');
        }

    })