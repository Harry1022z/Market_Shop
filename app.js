const products = [
    { name: "Robux 29.9K", price: 40000, image: "/img/Robux.jpeg", quantity: 10 },
    { name: "Robux 59.9K", price: 80000, image: "/img/Robux.jpeg", quantity: 22 },
    { name: "Robux 114.9K", price: 170000, image: "/img/Robux.jpeg", quantity: 15 },
    { name: "PUBG UC 30", price: 20000, image: "/img/PUBGUC.png", quantity: 15 },
    { name: "PUBG UC 60", price: 40000, image: "/img/PUBGUC.png", quantity: 20 },
    { name: "PUBG UC 300", price: 200000, image: "/img/PUBGUC.png", quantity: 10 },
    { name: "PUBG UC 600", price: 400000, image: "/img/PUBGUC.png", quantity: 12 },
    { name: "FreeFire 100 Diamonds", price: 4200, image: "/img/Diamantes.jpg", quantity: 10 },
    { name: "FreeFire 310 Diamonds", price: 12000, image: "/img/Diamantes.jpg", quantity: 8 },
    { name: "FreeFire 1060 Diamonds", price: 38600, image: "/img/Diamantes.jpg", quantity: 5 },
    { name: "CodPoints 200 CP", price: 199000, image: "/img/CodPoints.png", quantity: 15 },
    { name: "CodPoints 500 CP", price: 499000, image: "/img/CodPoints.png", quantity: 10 },
    { name: "Minecoins 320", price: 199000, image: "/img/Minecoins.jpeg", quantity: 18 },
    { name: "Minecoins 1020", price: 599000, image: "/img/Minecoins.jpeg", quantity: 15 },
    { name: "Gemas Clash Royale 80", price: 99000, image: "/img/Gemas.jpg", quantity: 30 },
    { name: "Gemas Clash Royale 1200", price: 360000, image: "/img/Gemas.jpg", quantity: 12 },
    { name: "Gemas Dragon City 100", price: 120000, image: "/img/GemasDG.png", quantity: 25 },
    { name: "Pavos 1000", price: 120000, image: "/img/Pavos.png", quantity: 20 },
    { name: "Pavos 2800", price: 340000, image: "/img/Pavos.png", quantity: 15 },
    { name: "Pavos 13500", price: 1100000, image: "/img/Pavos.png", quantity: 5 },
];



let cart = [];

// Display products
function displayProducts() {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';
    products.forEach((product, index) => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: ${product.price} COP</p>
                <p>Available quantity: ${product.quantity}</p>
                <button onclick="addToCart(${index})">Add to Cart</button>
            </div>
        `;
        productsContainer.innerHTML += productCard;
    });
}

// Add product to cart
function addToCart(index) {
    const product = products[index];
    if (product.quantity > 0) {
        const cartItem = cart.find(item => item.name === product.name);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        product.quantity--;
        displayProducts();
        displayCart();
    } else {
        alert('Product out of stock');
    }
}

// Display cart
function displayCart() {
    const cartTableBody = document.querySelector('#cart tbody');
    cartTableBody.innerHTML = '';
    cart.forEach((item, index) => {
        const total = item.price * item.quantity;
        const cartRow = `
            <tr>
                <td>${item.name}</td>
                <td>${item.price} COP</td>
                <td>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                </td>
                <td>${total} COP</td>
                <td><button class="remove-button" onclick="removeFromCart(${index})">Remove</button></td>
            </tr>
        `;
        cartTableBody.innerHTML += cartRow;
    });
    updateTotal();
}

// Update quantity in the cart
function updateQuantity(index, quantity) {
    quantity = parseInt(quantity);
    if (quantity <= 0) {
        removeFromCart(index);
    } else {
        const product = products.find(p => p.name === cart[index].name);
        const difference = quantity - cart[index].quantity;

        if (product.quantity >= difference) {
            cart[index].quantity = quantity;
            product.quantity -= difference;
        } else {
            alert('Not enough quantity available');
            displayCart();
        }
    }
    displayCart();
}

// Remove product from cart
function removeFromCart(index) {
    const item = cart[index];
    const product = products.find(p => p.name === item.name);
    product.quantity += item.quantity;
    cart.splice(index, 1);
    displayProducts();
    displayCart();
}

// Calculate and display the total of the cart
function updateTotal() {
    const totalElement = document.getElementById('total');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalElement.textContent = `Total: ${total} COP`;
}

// Add new product
document.getElementById('product-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('product-name').value;
    const price = parseInt(document.getElementById('product-price').value);
    const quantity = parseInt(document.getElementById('product-quantity').value);
    const imageInput = document.getElementById('product-image');
    const imageUrl = URL.createObjectURL(imageInput.files[0]);

    const editIndex = this.getAttribute('data-edit-index');
    if (editIndex) {
        // Edit product
        products[editIndex] = { name, price, quantity, image: imageUrl };
        this.removeAttribute('data-edit-index'); // Clear edit index
    } else {
        // Add new product
        products.push({ name, price, quantity, image: imageUrl });
    }
    
    displayProducts();
    displayManageProducts();
    this.reset(); // Clear the form
});

// Display products in the management section
function displayManageProducts() {
    const manageProductsTableBody = document.querySelector('#manage-products-table tbody');
    manageProductsTableBody.innerHTML = '';
    products.forEach((product, index) => {
        const manageRow = `
            <tr>
                <td>${product.name}</td>
                <td>${product.price} COP</td>
                <td>${product.quantity}</td>
                <td>
                    <button class="edit-button" onclick="editProduct(${index})">Edit</button>
                    <button class="remove-button" onclick="removeProduct(${index})">Remove</button>
                </td>
            </tr>
        `;
        manageProductsTableBody.innerHTML += manageRow;
    });
}

// Edit product
function editProduct(index) {
    const product = products[index];
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-quantity').value = product.quantity;
    // Save the index of the product for editing
    document.getElementById('product-form').setAttribute('data-edit-index', index);
}

// Remove product from the list
function removeProduct(index) {
    products.splice(index, 1);
    displayProducts();
    displayManageProducts();
}

// Navigation
function showProducts() {
    document.getElementById('product-list').classList.remove('hidden');
    document.getElementById('cart').classList.add('hidden');
    document.getElementById('manage-products').classList.add('hidden');
}

function showCart() {
    document.getElementById('product-list').classList.add('hidden');
    document.getElementById('cart').classList.remove('hidden');
    document.getElementById('manage-products').classList.add('hidden');
}

function showManageProducts() {
    document.getElementById('product-list').classList.add('hidden');
    document.getElementById('cart').classList.add('hidden');
    document.getElementById('manage-products').classList.remove('hidden');
}

// Checkout function
function checkout() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (total > 0) {
        alert(`Total to pay: ${total} COP`);
        cart = []; // Clear the cart
        displayProducts();
        displayCart();
        setTimeout(() => {
            showProducts(); // Redirect to the product page after 2 seconds
        }, 2000);
    } else {
        alert('The cart is empty.');
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    displayCart();
    displayManageProducts();
    showProducts(); // Show the product section by default on load
});
