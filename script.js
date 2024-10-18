// Datos de ejemplo (en una aplicación real, estos vendrían de una base de datos)
const products = [
    { id: 1, name: "PlayStation 5", price: 499.99, category: "consolas", image: "https://i.postimg.cc/FRWB5fnR/Play5.jpg" },
    { id: 2, name: "Xbox Series X", price: 499.99, category: "consolas", image: "https://i.postimg.cc/253Hdj5N/Xbox-Serie-X.jpg" },
    { id: 3, name: "Nintendo Switch", price: 299.99, category: "consolas", image: "https://i.postimg.cc/MTVmtn2N/Nintendo-Switch.jpg" },
    { id: 4, name: "DualSense Controller", price: 69.99, category: "accesorios", image: "https://i.postimg.cc/J08cFRRn/Dual-Sense-Controller.jpg" },
    { id: 5, name: "Xbox Wireless Controller", price: 59.99, category: "accesorios", image: "https://i.postimg.cc/xC2zfghp/Xbox-Wireless-Controller.jpg" },
    { id: 6, name: "The Legend of Zelda: BOTW", price: 59.99, category: "juegos", image: "https://i.postimg.cc/sgxPq6Cp/The-Legend-Of-Zelda.jpg" },
    { id: 7, name: "God of War: Ragnarök", price: 69.99, category: "juegos", image: "https://i.postimg.cc/BvDFfRY1/God-Of-War-Ragnarok.jpg" },
    { id: 8, name: "Halo Infinite", price: 59.99, category: "juegos", image: "https://i.postimg.cc/MHsMYwTg/Halo-Infiniti.jpg" },
    { id: 9, name: "MSI Katana A17", price: 1582.78, category: "computador", image: "https://i.postimg.cc/k5rVsfJM/MSI.jpg" },
    { id: 10, name: "Apple Sphere", price: 1802.78, category: "computador", image: "https://i.postimg.cc/QMXFvVTv/Apple-Esfera.jpghttps://i.postimg.cc/QMXFvVTv/Apple-Esfera.jpg" },
    { id: 11, name: "ASUS ROG Strix G16", price: 1882.91, category: "computador", image: "https://i.postimg.cc/43dJzct4/Asus-Rog-Strix.jpg" },
    { id: 12, name: " Microsoft Surface Laptop", price: 1482.91, category: "computador", image: "https://i.postimg.cc/VkwTQcL3/Microsoft-Surface-Laptop.jpg" },
    { id: 13, name: "Control Joy", price: 138, category: "accesorios", image: "https://i.postimg.cc/8cb3KKQ2/Set-Control-Joy.jpg" },
    { id: 14, name: "Mario & Luigi: Brothership", price: 78, category: "juegos", image: "https://i.postimg.cc/P5Fmbmc2/Mario-Luigi.jpg" },
    { id: 15, name: "Acer Nitro 34", price: 375.72, category: "monitor", image: "https://i.postimg.cc/J0wxNbs9/Monitor-Acer.jpg" },
    { id: 16, name: "Odyssey", price: 354.21, category: "monitor", image: "https://i.postimg.cc/qMTQgxVK/Monitor-Samsung.jpg" },
    { id: 17, name: "Apple Monitor", price: 332.99, category: "monitor", image: "https://i.postimg.cc/9QS7wcRk/Monitor-Apple.jpg" },
    { id: 18, name: "Playstation Portal", price: 275.80, category: "consolas", image: "https://i.postimg.cc/kXYVL7c5/Ps5-Portable.jpg" },
    { id: 19, name: "Acer Monitor", price: 215.99, category: "monitor", image: "https://i.postimg.cc/vZ6mjfTP/Monitor-Acer-Nitro-KG272-UP.jpg" },
    { id: 20, name: "Kotion Gamer", price: 12.65, category: "accesorios", image: "https://i.postimg.cc/X7B373Wq/Kotion-Gamer.jpg" },
    { id: 21, name: "Maouse Gamer", price: 13.99, category: "accesorios", image: "https://i.postimg.cc/nVyVmM0B/Mouse-Redragon.jpg" },
    

    

    
        
];

let cart = [];

function displayProducts(category = 'all') {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    
    products.forEach(product => {
        if (category === 'all' || product.category === category) {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" style="width:100%; height:auto;">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Añadir al carrito</button>
            `;
            productList.appendChild(productElement);
        }
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        updateCartDisplay();
    }
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    
    totalAmount.textContent = total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
    // Simular una pantalla de carga
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
    }, 2000);

    displayProducts();
    
    document.querySelectorAll('.category-filter').forEach(filter => {
        filter.addEventListener('click', (e) => {
            e.preventDefault();
            displayProducts(e.target.dataset.category);
        });
    });
    
    document.getElementById('cart-icon').addEventListener('click', () => {
        document.getElementById('cart').classList.toggle('hidden');
    });
    
    document.getElementById('checkout-btn').addEventListener('click', () => {
        alert('¡Gracias por tu compra!');
        cart = [];
        updateCartCount();
        updateCartDisplay();
    });
});