document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navMenu = document.getElementById("nav-menu");
    const navlogo = document.getElementById("nav-logo");
    const searchIcon = document.getElementById("search-icon");
    const cartIcon = document.querySelector(".cart-icon");


    // Toggle menu visibility
    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show-menu");
        });
    }


    if (navClose) {
        navClose.addEventListener("click", () => {
            navMenu.classList.remove("show-menu");
        });
    }





    // Close men when clicking outside
    document.addEventListener("click", (event) => {
        const isClickInside = navMenu.contains(event.target) || navToggle.contains(event.target);
        if (!isClickInside) {
            navMenu.classList.remove("show-menu");
        } u
    });


    document.addEventListener("click", (event) => {
        const isClickInside = navlogo.contains(event.target) || navToggle.contains(event.target);
        if (!isClickInside) {
            navlogo.classList.remove("show-menu");
        } u
    });
});



/*   menu     */
// Sample code to simulate adding items to a cart
const cart = [];

function addToCart(item) {
    cart.push(item);
    alert(item + " has been added to your cart!");
    console.log(cart);  // For testing purposes
}

// Attach addToCart function to each "Add to Cart" button
document.querySelectorAll('button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const pizzaName = button.parentElement.querySelector('h3').innerText;
        addToCart(pizzaName);
    });
});




/* customer */

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true, // Infinite loop
    navigation: {
        nextEl: '.swiper-button-next', // Next button
        prevEl: '.swiper-button-prev', // Previous button
    },
    pagination: {
        el: '.swiper-pagination', // Pagination dots
        clickable: true, // Allow clicking on dots to navigate
    },
    autoplay: {
        delay: 3500, // Auto-slide every 5 seconds
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    breakpoints: {
        0: {
            slidesPerView: 1, // Show 1 slide at a time on smaller screens
            spaceBetween: 10,
        },
        // Mobile screens
        480: {
            slidesPerView: 1, // Show 1 slide at a time on smaller screens
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2, // Show 1 slide at a time on smaller screens
            spaceBetween: 10,
        },
        // Tablet screens
        1024: {
            slidesPerView: 3, // Show 2 slides at a time on medium screens
            spaceBetween: 15,
        },
        // Default for larger screens
        1280: {
            slidesPerView: 3, // Show 3 slides at a time
            spaceBetween: 20,
        },
    },
});



/* contact */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    // Form submission handler
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission

        const firstName = document.getElementById("firstName").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Simple validation
        if (!firstName || !email || !message) {
            alert("Please fill out all required fields.");
            return;
        }

        // Simulate form submission (you can replace this with an actual backend API call)
        alert(`Thank you, ${firstName}! Your message has been submitted.`);
        form.reset(); // Reset form fields
    });




    /* preloader */
    var loader = document.getElementById("preloader"); // Use the ID without the period
    window.addEventListener("load", function () {
        loader.style.display = "none";
    });


});





// Add this script in script.js
document.getElementById('search-icon').addEventListener('click', function () {
    document.getElementById('search-bar').classList.toggle('show-search');
});

let cartCount = 0;
function addToCart() {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
}

// Adding event listeners for "Menu" and "Product" links 
document.querySelectorAll('[data-add-to-cart]').forEach(function (item) {
    item.addEventListener('click', function () {
        addToCart();
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartButton = document.getElementById('close-cart');
    const cartContent = document.querySelector('.cart-content');
    let cartCount = 0;

    function updateCartCount() {
        document.getElementById('cart-count').textContent = cartCount;
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            const item = event.target.closest('.menu-item');
            const itemName = item.querySelector('h3').textContent;
            const itemPrice = item.querySelector('.price font').textContent;

            // Add item to cart logic
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <h4>${itemName}</h4>
                <p>${itemPrice}</p>
                <button class="remove-item">Remove</button>
            `;
            cartContent.appendChild(cartItem);

            // Increment cart count and show cart sidebar
            cartCount++;
            updateCartCount();
            cartSidebar.classList.add('show');
        });
    });

    cartContent.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-item')) {
            const cartItem = event.target.closest('.cart-item');
            cartContent.removeChild(cartItem);

            // Decrement cart count
            cartCount--;
            updateCartCount();

            // If no items are left in the cart, hide the sidebar
            if (cartContent.children.length === 0) {
                cartSidebar.classList.remove('show');
            }
        }
    });

    closeCartButton.addEventListener('click', function () {
        cartSidebar.classList.remove('show');
    });
});


