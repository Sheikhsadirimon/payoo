// console.log('home js connected')

const validPin = 1234;
const transactionData = [];

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

// function to toggle button
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");

  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    // console.log(btn);
    btn.classList.add("border-gray-300");
  }

  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}
// add money btn-----------------------------
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;

    const accountNumber = document.getElementById("account-number").value;

    const amount = getInputValueNumber("add-amount");

    if (amount <= 0) {
      alert("Invalid Amount");
      return;
    }

    const pin = getInputValueNumber("add-pin");

    const availableBalance = getInnerText("available-balance");

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

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
  });
// cash out money btn----------------------------------
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log('withdraw clicked')
  const amount = getInputValueNumber("withdraw-amount");

  const availableBalance = getInnerText("available-balance");

  if (amount <= 0 || amount > availableBalance) {
    alert("Invalid Amount");
    return;
  }

  const totalNewAvailableBalance = availableBalance - amount;

  setInnerText(totalNewAvailableBalance);
  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
});

document
  .getElementById("transactions-btn")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    transactionContainer.innerText = "";

    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div
            class="bg-white rounded-xl p-3 flex justify-between items-center mt-3"
          >
            <div class="flex items-center">
              <div class="p-2 bg-[#f4f5f7] rounded-full">
                <img src="assets/wallet1.png" alt="" />
              </div>
              <div class="ml-3">
                <h1>${data.name}</h1>
                <p>${data.date}</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        `;

      transactionContainer.appendChild(div);
    }
  });

//   toggling feature
document.getElementById("add-btn").addEventListener("click", function () {
  handleToggle("add-money-parent");
  handleButtonToggle("add-btn");
});

document.getElementById("cash-out-btn").addEventListener("click", function () {
  handleToggle("cash-out-parent");
  handleButtonToggle("cash-out-btn");
});

document.getElementById("transfer-btn").addEventListener("click", function () {
  handleToggle("transfer-money-parent");
  handleButtonToggle("transfer-btn");
});

document.getElementById("bonus-btn").addEventListener("click", function () {
  handleToggle("get-bonus-parent");
  handleButtonToggle("bonus-btn");
});
document.getElementById("bill-btn").addEventListener("click", function () {
  handleToggle("pay-bill-parent");
  handleButtonToggle("bill-btn");
});
document
  .getElementById("transactions-btn")
  .addEventListener("click", function () {
    handleToggle("transactions-parent");
    handleButtonToggle("transactions-btn");
  });
