// console.log('home js connected')

const validPin = 1234;

// function to get input value number
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);

  return inputFieldValueNumber;
}
// funtion to get input value
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

// function to get innertext
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);

  return elementValueNumber;
}

// function to set innertext
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}
// add money btn-----------------------------
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValueNumber("add-amount");
    const pin = getInputValueNumber("add-pin");
    // console.log(bank, accountNumber, amount, pin);
    const availableBalance = getInnerText("available-balance");
    // console.log(availableBalance);

    if (accountNumber.length != 11) {
      alert("Please provide valid account number");
      return;
    }

    if (pin !== validPin) {
      alert("Please provide valid pin number");
      return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

    setInnerText(totalNewAvailableBalance);
  });
// cash out money btn----------------------------------
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log('withdraw clicked')
  const amount = getInputValueNumber("withdraw-amount");

  const availableBalance = getInnerText("available-balance");

  const totalNewAvailableBalance = availableBalance - amount;

  setInnerText(totalNewAvailableBalance)
});

//   toggling feature
document.getElementById("add-btn").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";

  document.getElementById("add-money-parent").style.display = "block";
  document.getElementById("transfer-money-parent").style.display = "none";
});
document.getElementById("cash-out-btn").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "block";

  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("transfer-money-parent").style.display = "none";
});


document.getElementById('transfer-btn').addEventListener('click',function(){
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "block";
})