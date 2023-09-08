// account login/register form

var log_form = document.getElementById("loginForm");
var reg_form = document.getElementById("registerForm");
var login_btn = document.getElementById("login");
var reg_btn = document.getElementById("register");

function login() {
    login_btn.style.display = "none";
    reg_btn.style.display = "block";
    log_form.style.display = "flex";
    reg_form.style.display = "none";
}

function register() {
    reg_btn.style.display = "none";
    login_btn.style.display = "block";
    reg_form.style.display = "flex";
    log_form.style.display = "none";
}

// add to cart function

let cart = [];

// Function to add a product to the cart
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: parseFloat(productPrice),
    };

    cart.push(product);

    // Update the cart count and total price
    updateCartInfo();

    // Add the item to the cart display
    displayCartItem(product);
}

// Function to update the cart count and total price in the navbar
function updateCartInfo() {
    const cartInfo = document.getElementById("cart-info");
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    cartInfo.innerHTML = `Cart (${cart.length} items): $${total.toFixed(2)}`;
}

// Function to display a cart item in the cart container
function displayCartItem(product) {
    const cartItems = document.getElementById("cart-items");
    const row = cartItems.insertRow();
    row.innerHTML = `
        <td>${cart.length}</td>
        <td>${product.name}</td>
        <td>$${product.price.toFixed(2)}</td>
        <td><button class="btn btn-danger remove-from-cart" data-product="${product.name}">Remove</button></td>
    `;

    // Add a click event listener to the "Remove" button
    const removeButton = row.querySelector(".remove-from-cart");
    removeButton.addEventListener("click", (event) => {
        const productName = event.target.getAttribute("data-product");
        removeFromCart(productName);
    });
}

// Function to remove a product from the cart
function removeFromCart(productName) {
    // Find the index of the product to remove
    const index = cart.findIndex((product) => product.name === productName);

    if (index !== -1) {
        cart.splice(index, 1); // Remove the product from the cart array

        // Update the cart count and total price
        updateCartInfo();

        // Remove the item from the cart display
        const cartItems = document.getElementById("cart-items");
        cartItems.deleteRow(index);

        // Update item numbers in the cart display
        const rows = cartItems.rows;
        for (let i = 0; i < rows.length; i++) {
            rows[i].cells[0].textContent = i + 1;
        }
    }
}

// Event listener for "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
        const productName = event.target.getAttribute("data-product");
        const productPrice = event.target.getAttribute("data-price");
        addToCart(productName, productPrice);
    });
});
