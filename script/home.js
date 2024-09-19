document.getElementById("addmoney-btn").addEventListener('click', function (event) {
    event.preventDefault();
    const addAmount = document.getElementById('amount').value;
    const addAmountfloat= parseFloat(addAmount) ;
    // console.log(typeof addAmountfloat);
    // console.log(addAmountfloat);
    const pinNumber = document.getElementById('pin-number').value;
    if(pinNumber === '1234'){
        // console.log("hey Juabyer your money added done")
        const currentAmount = document.getElementById('current-balance').innerText;
        const currentAmountFloat = parseFloat(currentAmount)
        // console.log(typeof currentAmountFloat)
        // console.log(currentAmountFloat)
        const totalBalance = currentAmountFloat + addAmountfloat;
        // console.log(totalBalance)
        document.getElementById('current-balance').innerText = totalBalance;
    }
    else{
        alert('Some things wrong please try again')
    }
})