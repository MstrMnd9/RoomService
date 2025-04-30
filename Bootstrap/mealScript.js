let mealList = [];
let priceList = [];
let timeList = [];
function addMeal () {
  mealList.push(document.getElementById("meal-name").value);
  priceList.push(document.getElementById("meal-price").value);
  timeList.push(document.getElementById("meal-type").value);
}
