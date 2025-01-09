// ...existing code...

function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

function calculateBMI(weight, height) {
  return (weight / (height * height)).toFixed(2);
}

function calculateCGPA(grades) {
  const total = grades.reduce((acc, grade) => acc + grade, 0);
  return (total / grades.length).toFixed(2);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

let displayValue = "";

function appendNumber(number) {
  displayValue += number;
  document.getElementById("display").value = displayValue;
}

function appendOperator(operator) {
  displayValue += ` ${operator} `;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
    document.getElementById("display").value = displayValue;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (!isNaN(key)) {
    appendNumber(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    appendOperator(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    clearDisplay();
  }
});
