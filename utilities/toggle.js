// initial status of cashout ssection
document.getElementById('cashoutSection').style.display = 'none';
document.getElementById('transactionHistorySection').style.display = 'none';

// toggle on Addmoney Box
document.getElementById('addMoneyBox')
    .addEventListener('click', function () {
        handleToggle('addMoneySection', 'block');
        handleToggle('cashoutSection', 'none');
        handleToggle('transactionHistorySection', 'none');
    })


// toggle on Cashout Box
document.getElementById('cashOutBox')
    .addEventListener('click', function () {
        handleToggle('cashoutSection', 'block');
        handleToggle('addMoneySection', 'none');
        handleToggle('transactionHistorySection', 'none');
    })


// toggle on Transaction History Box
document.getElementById('transactionHistoryBox')
    .addEventListener('click', function () {
        handleToggle('transactionHistorySection', 'block');
        handleToggle('addMoneySection', 'none');
        handleToggle('cashoutSection', 'none');
    })