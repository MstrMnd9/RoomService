window.onload = function () {
  loadMeals();
};

function addMeal() {
  const name = document.getElementById("meal-name").value;
  const price = document.getElementById("meal-price").value;
  const type = document.querySelector('input[name="meal-type"]:checked');

  if (!type) {
    alert("Please select a meal type.");
    return false;
  }

  const meal = {
    name,
    price,
    mealType: type.value
  };

  let meals = JSON.parse(localStorage.getItem("meals")) || [];
  meals.push(meal);
  localStorage.setItem("meals", JSON.stringify(meals));

  addMealToTable(meal);
  document.getElementById("meal-form").reset();
  return false;
}

function addMealToTable(meal) {
  const table = document.getElementById("meal-table");
  const row = table.insertRow();

  row.insertCell(0).textContent = meal.name;
  row.insertCell(1).textContent = meal.price;
  row.insertCell(2).textContent = meal.mealType;
}

function loadMeals() {
  const meals = JSON.parse(localStorage.getItem("meals")) || [];
  meals.forEach(meal => addMealToTable(meal));
}
