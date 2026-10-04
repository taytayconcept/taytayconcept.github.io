        // BACK TO THE TOP

        const backToTop = document.getElementById("back-to-top");

            // Show button after scrolling down 300px
        window.addEventListener("scroll", () => {
             if (window.scrollY > 300) {
        backToTop.style.display = "block";
        } else {
                  backToTop.style.display = "none";
           }
        });

           // Scroll smoothly to top on click
        backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        });
        document.getElementById("back-to-top").addEventListener("click", function(e) {
        e.preventDefault();  // prevents the default jump
        window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
        }); 

        const nav = document.querySelector("nav");
const toggle = document.querySelector(".menu-toggle");
const overlay = document.querySelector(".overlay");

/* TOGGLE MENU */
function toggleMenu() {
    nav.classList.toggle("show");
    overlay.classList.toggle("show");
}

/* CLICK ☰ */
toggle.addEventListener("click", toggleMenu);

/* CLICK OUTSIDE */
overlay.addEventListener("click", () => {
    nav.classList.remove("show");
    overlay.classList.remove("show");
});

/* CLICK LINKS */
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
        overlay.classList.remove("show");
    });
});

/* AUTO CLOSE ON SCROLL */
window.addEventListener("scroll", () => {
    if (nav.classList.contains("show")) {
        nav.classList.remove("show");
        overlay.classList.remove("show");
    }
});
