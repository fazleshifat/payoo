document.getElementById('cashOutToggle').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutToggle = document.getElementById('cashoutSection');
    const addMoneySection = document.getElementById('addMoneySection');
    cashOutToggle.classList.remove('hidden');
    addMoneySection.classList.add('hidden');
    console.log('cashout clicked')
})