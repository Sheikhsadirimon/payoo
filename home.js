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

// function to toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
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

  setInnerText(totalNewAvailableBalance);
});

//   toggling feature
document.getElementById("add-btn").addEventListener("click", function () {
  handleToggle("add-money-parent");

  const formBtns = document.getElementsByClassName("form-btn");

  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]" , "bg-[#0874f20d]");
    console.log(btn)
    btn.classList.add("border-gray-300")
  }

  document.getElementById("add-btn").classList.remove("border-gray-300");
  document.getElementById("add-btn").classList.add("border-[#0874f2]" , "bg-[#0874f20d]");
});

document.getElementById("cash-out-btn").addEventListener("click", function () {
  handleToggle("cash-out-parent");

  const formBtns = document.getElementsByClassName("form-btn");

  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]" , "bg-[#0874f20d]");
    console.log(btn)
    btn.classList.add("border-gray-300")
  }

  document.getElementById("cash-out-btn").classList.remove("border-gray-300");
  document.getElementById("cash-out-btn").classList.add("border-[#0874f2]" , "bg-[#0874f20d]");
});

document.getElementById("transfer-btn").addEventListener("click", function () {
  handleToggle("transfer-money-parent");
});

document.getElementById("bonus-btn").addEventListener("click", function () {
  handleToggle("get-bonus-parent");
});
