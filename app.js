const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const nextButton = document.querySelector("#next-button");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const cashGivenLabel = document.querySelector("#cash-given-label");
const billAmountLabel = document.querySelector("#bill-amount-label");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener("click", function nextButtonHandler(){
    if(billAmount.value!=""){
    cashGiven.style.display = "inline-block"
    checkButton.style.display = "block"
    cashGivenLabel.style.display = "inline-block"
    }
  
});
checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    
    // 12
    if (cashGiven.value >= billAmount.value) {
      // 2022> 12 => true
      const amountToBeReturned = cashGiven.value - billAmount.value; // 2022 - 12 = 2010
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Do you wanna wash plates?");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});



function calculateChange(amountToBeReturned) {
  // 2010
  // go over all the available
  for (let i = 0; i < availableNotes.length; i++) {
    // no of notes need for the denomination
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    // 2010 / 2000 = 1 || 10 / 500 = 0

    // amount left after calculating the number of notes needed
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    // 2010 % 2000 = 10 || 10 % 500 = 10

    // updating the no of notes in the table for the current amount
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}