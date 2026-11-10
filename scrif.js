
// Product Database
const products = [
    { id: 1, name: "T-Shirt", price: 650 },
    { id: 2, name: "Smart Watch", price: 1500 },
    { id: 3, name: "Headphones", price: 1200 },
    { id: 4, name: "Sports Shoes", price: 2000 },
    { id: 5, name: "Backpack", price: 1000 },
    { id: 6, name: "Sunglasses", price: 800 }
];

// Shopping Cart
let cart = [];

// Add Product to Cart
function addToCart(id) {
    const product = products.find(item => item.id === id);

    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
    alert(product.name + " added to cart!");
}

// Update Cart
function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const totalPrice = document.getElementById("totalPrice");

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;

cartItems.innerHTML += `
<div class="cart-item">
 <div>
<strong>${item.name}</strong>
<p>৳ ${item.price} × ${item.quantity}</p>
</div>

<div>
<button onclick="changeQuantity(${item.id}, -1)">−</button>
<span>${item.quantity}</span>
<button onclick="changeQuantity(${item.id}, 1)">+</button>
<button onclick="removeItem(${item.id})">Remove</button>
</div>
</div>
;
});

    cartCount.textContent = count;
    totalPrice.textContent = total.toLocaleString("en-US");
}

// Change Quantity
function changeQuantity(id, amount) {
    const item = cart.find(product => product.id === id);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        removeItem(id);
    } else {
        updateCart();
    }
}

// Remove Product
function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Show and Hide Cart
function toggleCart() {
    const cartSection = document.getElementById("cartSection");

    if (cartSection.style.display === "block") {
        cartSection.style.display = "none";
    } else {
        cartSection.style.display = "block";
        cartSection.scrollIntoView({ behavior: "smooth" });
    }
}

// Search Products
function searchProducts() {
    const searchValue = document
        .getElementById("searchInput")
        .value.toLowerCase()
        .trim();

    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        const name = card.dataset.name.toLowerCase();

        if (name.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Search using Enter Key
document.getElementById("searchInput")
    .addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchProducts();
        }
    });

// Checkout Demo
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    alert(
        "Thank you for shopping at EMON SHOP!\n" +
        "Your total is ৳ " + total.toLocaleString("en-US") +
        "\nThis is a demo checkout. No order has been placed."
    );
}

function renderCartPage() {
    const cartItems = document.getElementById("cartItems");

    if (!cartItems) return;

    const subtotalElement = document.getElementById("subtotal");
    const grandTotalElement = document.getElementById("grandTotal");

    cartItems.innerHTML = "";

    let subtotal = 0;

    if (cart.length === 0) {
        cartItems.innerHTML =
            '<div class="empty-cart"><h3>Your cart is empty!</h3><a href="index.html">Start Shopping</a></div>';
    }

    cart.forEach(item => {
        subtotal += item.price * item.quantity;

cartItems.innerHTML += `
<

        `;
    });

    const delivery = cart.length > 0 ? 100 : 0;

    subtotalElement.textContent = subtotal;
    grandTotalElement.textContent = subtotal + delivery;
}

const oldChangeQuantity = changeQuantity;
changeQuantity = function(id, amount) {
    oldChangeQuantity(id, amount);
    renderCartPage();
};

const oldRemoveItem = removeItem;
removeItem = function(id) {
    oldRemoveItem(id);
    renderCartPage();
};

renderCartPage();

const products = [
    {id:1, name:"Men's T-Shirt", price:650},



    {id:2, name:"Smart Watch", price:1500},



    {id:3, name:"Headphones", price:1200},





    {id:4, name:"Sports Shoes", price:2000},





    {id:5, name:"Travel Backpack", price:1000},



    {id:6, name:"Sun Glasses", price:800},



    {id:7, name:"Women's Fashion", price:1800},



    {id:8, name:"Casual Shirt", price:950},



    {id:9, name:"Casual Sneakers", price:2200},



    {id:10, name:"Digital Watch", price:1750},



    {id:11, name:"Wireless Earbuds", price:1300},



    {id:12, name:"Digital Camera", price:8500},




    {id:13, name:"Classic Watch", price:1100},




    {id:14, name:"Women's Handbag", price:1600},




    {id:15, name:"Photo Camera", price:9000},




    {id:16, name:"Luxury Perfume", price:1250},



    {id:17, name:"Running Shoes", price:2500},




    {id:18, name:"Casual T-Shirt", price:550},




    {id:19, name:"School Backpack", price:900},



    {id:20, name:"Music Headphones", price:1400},




    {id:21, name:"Fashion Eyewear", price:750},




    {id:22, name:"Fashion Dress", price:2100},




    {id:23, name:"Premium Watch", price:3000},



    {id:24, name:"Ladies Bag", price:1900}
];














{id:25, name:"HP Pavilion Laptop", price:65000},
{id:26, name:"Dell Inspiron Laptop", price:72000},
{id:27, name:"Apple MacBook", price:125000},
{id:28, name:"Lenovo IdeaPad", price:58000},
{id:29, name:"ASUS VivoBook", price:62000},
{id:30, name:"Acer Aspire 5", price:55000},
{id:31, name:"Gaming Laptop", price:115000},
{id:32, name:"MSI Gaming Laptop", price:135000},
{id:33, name:"Desktop Computer", price:48000},
{id:34, name:"RGB Gaming PC", price:95000},
{id:35, name:"LED Computer Monitor", price:18000},
{id:36, name:"Mini Desktop PC", price:38000}


function orderWatch(name, price) {
    const message = `Hello, I want to order ${name}. Price: ৳${price}.`;
    const whatsappNumber = "8801XXXXXXXXX";

    window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
    );
}
