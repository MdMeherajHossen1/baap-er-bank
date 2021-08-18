document.getElementById('diposit-btn').addEventListener('click',function (){
    const dipositAmount = document.getElementById('diposit-amount');
    const dipositValueText = dipositAmount.value;
    const dipositNewAmount = parseFloat(dipositValueText);
    // previcious amount  
    const totalDiposit = document.getElementById('total-diposit');
    const dipositAmountText = totalDiposit.innerText;
   const dipositPreviousAmount = parseFloat(dipositAmountText);

   const totalDipositAmount = dipositNewAmount + dipositPreviousAmount;
    totalDiposit.innerText = totalDipositAmount;

    // update account balance
    const totalBalance = document.getElementById('balance');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    const newTotalBalance = previousTotalBalance + dipositNewAmount;
    totalBalance.innerText = newTotalBalance;
    dipositAmount.value = '';
});


document.getElementById('withdraw-btn').addEventListener('click', function (){
     
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawText = withdrawAmount.value;
    const withdrawNewAmount = parseFloat(withdrawText);
    console.log(withdrawNewAmount);

    // withdraw previous amount
    const totalWithdraw = document.getElementById('total-withdraw');
    const totalWithdrawText = totalWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(totalWithdrawText);
    
    const totalWithdrawAmount = previousWithdrawAmount + withdrawNewAmount;
    totalWithdraw.innerText = totalWithdrawAmount;

    // update total amount
    const totalBalance = document.getElementById('balance');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);

    const newTotalBalance = previousTotalBalance - withdrawNewAmount;
    totalBalance.innerText = newTotalBalance;

    // clear withdraw amount
    withdrawAmount.value = '';
});
