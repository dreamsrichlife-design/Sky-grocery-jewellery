let products = JSON.parse(localStorage.getItem("products")) || [];

function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}

function addProduct(name, desc, price) {
    products.push({ name, desc, price });
    saveProducts();
    displayProducts();
}

function displayProducts() {
    const container = document.getElementById("product-list");
    if (!container) return;

    container.innerHTML = "";
    products.forEach(p => {
        container.innerHTML += `
        <div class="product">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <p>Price: ₹${p.price}</p>
            <a href="https://wa.me/919996337667?text=I%20want%20to%20order%20${encodeURIComponent(p.name)}" target="_blank">
                <button>Order on WhatsApp</button>
            </a>
        </div>
        `;
    });
}

document.addEventListener("DOMContentLoaded", displayProducts);
