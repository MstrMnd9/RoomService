window.onload = function () {
  loadMealsToDropdown();
  loadOrders();
};


function loadMealsToDropdown() {
  const select = document.getElementById("meal");
  const meals = JSON.parse(localStorage.getItem("meals")) || [];

  meals.forEach(meal => {
    const option = document.createElement("option");
    option.value = meal.name;
    option.textContent = meal.name;
    select.appendChild(option);
  });
}

function submitOrder() {
  const room = document.getElementById("room-number").value;
  const meal = document.getElementById("meal").value;
  const time = document.getElementById("order-time").value;
  const notes = document.getElementById("notes").value;
  const newOrder = {
    id: Date.now(),
    room,
    meal,
    time,
    notes
  };

  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(newOrder);
  localStorage.setItem("orders", JSON.stringify(orders));

  addOrderToTable(newOrder);
  document.getElementById("order-form").reset();
  return false;
}

function loadOrders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.forEach(order => addOrderToTable(order));
}

function addOrderToTable(order) {
  const table = document.getElementById("order-table").getElementsByTagName("tbody")[0];
  const row = table.insertRow();
  row.setAttribute("data-id", order.id);

  row.insertCell(0).textContent = order.room;
  row.insertCell(1).textContent = order.meal;
  row.insertCell(2).textContent = order.time;
  row.insertCell(3).textContent = order.notes;

  const actionCell = row.insertCell(4);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    deleteOrder(order.id);
  };
  actionCell.appendChild(deleteBtn);
}

function deleteOrder(orderId) {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders = orders.filter(order => order.id !== orderId);
  localStorage.setItem("orders", JSON.stringify(orders));

  const row = document.querySelector(`tr[data-id='${orderId}']`);
  if (row) row.remove();
}


function clearAllOrders() {
  if (confirm("Are you sure you want to delete all orders?")) {
    localStorage.removeItem("orders");
    const tbody = document.getElementById("order-table").getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
  }

}
