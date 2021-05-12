let totalPrice = 0
let totalCalories = 0


let getResult = document.querySelector('#check').addEventListener("click", calk)

function calk() {
calcPrice()
calcCalories()
render()
  totalPrice = 0
  totalCalories = 0
}

function calcPrice() {
  let allInput = document.querySelectorAll('input').forEach((item) => {
    if (item.checked) {
      totalPrice += + item.getAttribute("data-price")

    }
  });
  console.log(totalPrice);
  return totalPrice
}

function calcCalories() {
  let allInput = document.querySelectorAll('input').forEach((item) => {
    if (item.checked) {
      totalCalories += + item.getAttribute("data-calories")

    }
  });
  console.log(totalCalories);
  return totalCalories
}

function render() {
  let price = document.querySelector("#price").innerHTML =totalPrice
  let calories = document.querySelector("#calories").innerHTML =totalCalories
}
