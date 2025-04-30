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

  renderMealTable();
  document.getElementById("meal-form").reset();
  return false;
}

function renderMealTable() {
  const tableBody = document.getElementById("meal-table").getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Clear existing rows
  const meals = JSON.parse(localStorage.getItem("meals")) || [];

  meals.forEach((meal, index) => {
    const row = tableBody.insertRow();
    row.setAttribute("data-index", index);
    row.insertCell(0).textContent = meal.name;
    row.insertCell(1).textContent = meal.price;
    row.insertCell(2).textContent = meal.mealType;

    const actionCell = row.insertCell(3);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteMeal(index);
    actionCell.appendChild(deleteBtn);
  });
}

function deleteMeal(index) {
  let meals = JSON.parse(localStorage.getItem("meals")) || [];
  meals.splice(index, 1);
  localStorage.setItem("meals", JSON.stringify(meals));
  renderMealTable();
}

function clearAllMeals() {
  if (confirm("Are you sure you want to delete all meals?")) {
    localStorage.removeItem("meals");
    renderMealTable();
  }
}

function loadMeals() {
  renderMealTable();
}
