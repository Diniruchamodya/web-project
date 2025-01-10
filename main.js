document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const navlogo = document.getElementById("nav-logo");
    const navClose = document.getElementById("nav-close");
    const navMenu = document.getElementById("nav-menu");
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

    // Handle search icon click
    if (searchIcon) {
        searchIcon.addEventListener("click", () => {
            alert("Search here.");
        });
    }

    // Handle cart icon click
    if (cartIcon) {
        cartIcon.addEventListener("click", () => {
            alert("add to cart");
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
        // Mobile screens
        768: {
            slidesPerView: 1, // Show 1 slide at a time on smaller screens
            spaceBetween: 10,
        },
        // Tablet screens
        1024: {
            slidesPerView: 2, // Show 2 slides at a time on medium screens
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



});
