// initial status of cashout ssection
document.getElementById('cashoutSection').style.display = 'none';

// toggle on addmoney Box
document.getElementById('addMoneyBox')
    .addEventListener('click', function () {
        handleToggle('addMoneySection', 'block');
        handleToggle('cashoutSection', 'none');
    })


// toggle on cashout Box
document.getElementById('cashOutBox')
    .addEventListener('click', function () {
        handleToggle('addMoneySection', 'none');
        handleToggle('cashoutSection', 'block');
    })

