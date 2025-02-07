document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded Successfully");

    /* ✅ Smooth Scrolling for Navigation Links */
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    /* ✅ Collapsible Accordion for Pricing */
    const accordion = document.querySelector(".accordion");
    const panel = document.querySelector(".panel");

    if (accordion) {
        accordion.addEventListener("click", function () {
            panel.style.display = (panel.style.display === "block") ? "none" : "block";
            this.classList.toggle("active");
        });
    }

    /* ✅ Testimonial Slider Animation */
    const testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    function showNextTestimonial() {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? "block" : "none";
        });
        index = (index + 1) % testimonials.length;
    }

    setInterval(showNextTestimonial, 3000); // Change testimonial every 3 seconds

    /* ✅ Lazy Loading for Images */
    const lazyImages = document.querySelectorAll("img[loading='lazy']");

    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src || entry.target.src;
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, {
        rootMargin: "50px",
        threshold: 0.5
    });

    lazyImages.forEach(img => observer.observe(img));
});
