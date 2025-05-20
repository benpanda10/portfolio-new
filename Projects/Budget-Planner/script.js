// Global Variables
let totalIncome = 0;
let yearlyIncome = 0;
let rentInput = 0;
let utilitiesInput = 0;
let totalHousingExpenses = 0;

// Function: Add Salary -- Capture input, display back in summary.

function addSalary() {
  let salaryInput = document.getElementById("salaryInput");
  let salary = Number(salaryInput.value);
  console.log(salary);

  if (salary > 0) {
    totalIncome = salary;
    updateSummary(); // Calling the 'updateSummary' function -- Update summary area.
  }

  // Yearly Projection
  document.getElementById("yearlyIncome").innerHTML = totalIncome * 12;
}

function addRent() {
  let input = document.getElementById("rentInput");
  let amount = Number(input.value);
  console.log(amount);

  if (amount > 0) {
    rentInput = amount;
    updateSummary();
  }
}

function addUtilties() {
  let input = document.getElementById("utilitiesInput");
  let amount = Number(input.value);
  console.log(amount);

  if (amount > 0) {
    utilitiesInput = amount;
    updateSummary();
}
}


function totalExpenses() {
  let input = rentInput + utilitiesInput
  let amount = Number(input.value);
  console.log(amount);

  if (amount > 0) {
    totalHousingExpenses = amount;
    updateSummary();
}
}

function updateSummary() {
  document.getElementById("totalIncome").innerHTML = totalIncome;
  salaryInput.value = "";

  // display monthly rent in summary
  document.getElementById("rentExpenses").innerHTML = rentInput;
  rentInput.value = "";

    // display monthly ultilites in summary
    document.getElementById("utilitesExpenses").innerHTML = utilitiesInput;
    utilitiesInput.value = "";

  //display Housing Expense
  document.getElementById(housingExpenses).innerHTML = totalHousingExpenses;
}


