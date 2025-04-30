function addMeal() {
  // Get the values from form
  const name = document.getElementById("meal-name").value;
  const price = document.getElementById("meal-price").value;
  const type = document.querySelector('input[name="meal-type"]:checked');

  // Ensure a meal type is selected
  if (!type) {
    alert("Please select a meal type.");
    return false;
  }

  const mealType = type.value;

  // Add the values to the table
  const table = document.getElementById("meal-table");
  const newRow = table.insertRow(-1); // Add at the end

  const nameCell = newRow.insertCell(0);
  const priceCell = newRow.insertCell(1);
  const typeCell = newRow.insertCell(2);

  nameCell.textContent = name;
  priceCell.textContent = price;
  typeCell.textContent = mealType;

  // Reset the form
  document.getElementById("meal-form").reset();

  // Prevent page reload
  return false;
}
