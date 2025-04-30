let mealList = [];
let priceList = [];
let timeList = [];

function addMeal() {
  const name = document.getElementById("meal-name").value;
  const price = document.getElementById("meal-price").value;
  const type = document.getElementById("meal-type").value;

  mealList.push(name);
  priceList.push(price);
  timeList.push(type);

  const table = document.getElementById("meal-table");
  const row = table.insertRow(-1); // Add to end

  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);

  cell1.innerHTML = name;
  cell2.innerHTML = price;
  cell3.innerHTML = type;

  // Optional: reset form fields
  document.getElementById("meal-form").reset();
}
