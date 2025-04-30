let mealList = [];
let priceList = [];
let timeList = [];
var table = document.getElementById("meal-table")
function addMeal () {
  mealList.shift(document.getElementById("meal-name").value);
  priceList.shift(document.getElementById("meal-price").value);
  timeList.shift(document.getElementById("meal-type").value);
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = ("mealList[0]").value;
  cell2.innerHTML = ("priceList[0]").value;
  cell3.innerHTML = ("timeList[0]").value;
  
}
