let shoppingList = [];

function addItem() {
  let newItem = document.getElementById("itemInput").value;
  if (newItem.trim() !== "") {
    shoppingList.push(newItem);
    document.getElementById("itemInput").value = "";
    displayList(shoppingList);
  }
}

function displayList(items) {
  let outputDiv = document.getElementById("output");
  let htmlContent = "<div class='shopping-list'>";
  htmlContent += "<h3>Shopping List:</h3>";

  if (items.length === 0) {
    htmlContent += "<p>Your shopping list is empty</p>";
  } else {
    for (let i = 0; i < items.length; i++) {
      htmlContent += `<p>${i + 1}. ${items[i]}</p>`;
    }
  }

  htmlContent += "</div>";
  outputDiv.innerHTML = htmlContent;
}

displayList(shoppingList);
