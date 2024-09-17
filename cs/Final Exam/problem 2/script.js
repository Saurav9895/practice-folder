function addNumbers() {
  const firstNumber = parseInt(document.getElementById("firstNumber").value);
  const secondNumber = parseInt(document.getElementById("secondNumber").value);

  const sum = firstNumber + secondNumber;
  document.getElementById("result").textContent = "The sum is: " + sum;
}
