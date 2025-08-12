const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn-cal");
let expr = "";

const opSymbols = { "/": "÷", "*": "×", "+": "+", "-": "−" };

function render() {
  if (!expr) {
    display.textContent = "0";
  } else {
    display.textContent = expr.replace(/[/*+-]/g, (m) => opSymbols[m]);
  }
}

function evaluate() {
  try {
    if (/^[\d.+\-*/() ]+$/.test(expr)) {
      const val = eval(expr);
      expr = val.toString();
    } else {
      throw new Error("Invalid characters");
    }
  } catch {
    expr = "";
    alert("Invalid expression");
  }
  render();
}

function input(key) {
  if (key === "Escape" || key === "c" || key === "C") {
    expr = "";
    return render();
  }
  if (key === "Backspace") {
    expr = expr.slice(0, -1);
    return render();
  }
  if (key === "Enter" || key === "=") return evaluate();

  if (/^[0-9]$/.test(key)) {
    expr += key;
  } else if (key === ".") {
    if (!expr.endsWith(".")) expr += key;
  } else if (["/", "*", "-", "+"].includes(key)) {
    if (expr && !/[/*+\-]$/.test(expr)) expr += key;
  }
  render();
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => input(btn.dataset.value));
});

window.addEventListener("keydown", (e) => {
  const k = e.key;
  if (k === "Enter") e.preventDefault();
  input(k);
});

render();
