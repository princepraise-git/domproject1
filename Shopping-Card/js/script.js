
//WORKING ON THE LIKE BUTTON/ICON
var likeIcons = document.querySelectorAll(".fa-heart");
likeIcons.forEach(function (icon) {
  let isliked = false;
  icon.addEventListener("click", function () {
    isliked = !isliked;
    if (isliked === true) {
      icon.style.color = "red";
    } else {
      icon.style.color = "black";
    }
  });
});

//WORKING ON THE INCREMENT/PLUS BUTTON
var plusButtons = document.querySelectorAll(".fa-plus-circle");

let total = 0;
var totalElement = document.querySelector(".total");
//event listener
plusButtons.forEach(function (plusClick) {
  plusClick.addEventListener("click", function () {
    //increment quantity
    var quantityClass = plusClick.nextElementSibling;
    let quantity = parseInt(quantityClass.textContent);
    quantity = quantity + 1;
    quantityClass.textContent = quantity;
    //Update Total
    var priceValue = plusClick
      .closest(".card-body")
      .querySelector(".unit-price");

    var itemAmount = parseInt(priceValue.textContent.slice(0, -1));
    /*slice(0) extracts the entire string, including the dollar sign.
- slice(0, -1) extracts the string except for the last character, which is the dollar sign.
*/

    //WORKING ON THE TOTAL TO INCREASE PER ITEM
    total = total + itemAmount;

    totalElement.textContent = total + " $ ";
  });
});

//WORKING ON THE DECREMENT/MINUS BUTTON & TOTAL AFTER MINUS
var minusButtons = document.querySelectorAll(".fa-minus-circle");

minusButtons.forEach(function (minusClick) {
  minusClick.addEventListener("click", function () {
    var quantityClass = minusClick.previousElementSibling;
    let quantity = parseInt(quantityClass.textContent);

    if (quantity <= 0) {
      return;
    }
    // Decrement quantity by 1
    quantity = quantity - 1;

    // Update quantity display
    quantityClass.textContent = quantity;

    // Get the price element
    var priceValue = minusClick
      .closest(".card-body")
      .querySelector(".unit-price");

    // Get the item price
    var itemAmount = parseInt(priceValue.textContent.slice(0, -1));

    // Decrement total by item price

    total = total - itemAmount;
    totalElement.textContent = total + " $ ";
  });
});

//WORKING ON THE DELETE ICON
var deleteIcons = document.querySelectorAll(".fa-trash-alt");

deleteIcons.forEach(function (delIcon) {
  delIcon.addEventListener("click", function () {
    var itemsContainer = delIcon.closest(".card");
    var QuantityElement = itemsContainer.querySelector(".quantity");
    var PriceElement = itemsContainer.querySelector(".unit-price");

    var itemQuantity = parseInt(QuantityElement.textContent);
    var itemPrice = parseInt(PriceElement.textContent.slice(0, -1));

    total = total - itemQuantity * itemPrice;
    totalElement.textContent = total.toString() + " $ ";

    itemsContainer.remove();
    console.log(total);
  });
});
