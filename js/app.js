let number = document.getElementById("number");

let button = document.getElementById("addone");
let resetbutton = document.getElementById("reset");

let add = 1;

function addNumber() {
  let newValue = add++;
  number.textContent = newValue;
}
function resetnumber() {
  number.textContent = 0;
  add = 1;
}

button.addEventListener("click", addNumber);
resetbutton.addEventListener("click", resetnumber);
