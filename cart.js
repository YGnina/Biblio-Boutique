{/* <script>
    // Sample cart data (you should replace this with your actual cart data)
    const cartItems = [
        { itemNumber: 1, itemName: "Book 1", price: 20.99 },
        { itemNumber: 2, itemName: "Book 2", price: 15.49 },
        // Add more cart items as needed
    ];

    // Function to update the cart table
    function updateCartTable() {
        const cartTableBody = document.querySelector("tbody");
        cartTableBody.innerHTML = "";

        let total = 0;

        cartItems.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.itemNumber}</td>
                <td>${item.itemName}</td>
                <td>Rs.${item.price.toFixed(2)}</td>
                <td><button class="btn btn-danger" onclick="removeCartItem(${item.itemNumber})">Remove</button></td>
            `;
            cartTableBody.appendChild(row);

            total += item.price;
        });

        const totalCell = document.querySelector("tfoot td:last-child");
        totalCell.textContent = `Rs.${total.toFixed(2)}`;
    }

    // Call the function to initially populate the cart table
    updateCartTable();

    // Function to remove an item from the cart (you can implement this)
    function removeCartItem(itemNumber) {
        // Implement item removal logic here
        // Update cartItems array and call updateCartTable() again
    }
</script> */}
