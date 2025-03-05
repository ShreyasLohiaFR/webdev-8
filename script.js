function getCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}
function addToCart(item) {
    const cart = getCart();
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}
function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
}
function displayCart() {
    const cart = getCart();
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        const img = document.createElement('img');
        img.src = item.imgSrc;
        itemElement.appendChild(img);
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-btn');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => {
            removeFromCart(index);
            displayCart();
        };
        itemElement.appendChild(removeButton);
        cartContainer.appendChild(itemElement);
    });
}
if (window.location.pathname.includes('cart.html')) {
    displayCart();
}
if (window.location.pathname.includes('index.html')) {
    const addButtons = document.querySelectorAll('.add');
    const items = [
        { imgSrc: "pngwing.com.png" },
        { imgSrc: "PngItem_1404116.png" },
        { imgSrc: "PngItem_1404313.png" },
        { imgSrc: "PngItem_1404395.png" },
        { imgSrc: "PngItem_1404329.png" },
        { imgSrc: "PngItem_2671221.png" },
        { imgSrc: "PngItem_5267316.png" },
        { imgSrc: "PngItem_5294290.png" },
    ];
    addButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            addToCart(items[index]);
        });
    });
}