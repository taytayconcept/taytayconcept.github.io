    const faqQuestions = document.querySelectorAll('.faq-question');

        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                question.classList.toggle('active');
                if (answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                    answer.style.paddingTop = 0;
                    answer.style.paddingBottom = 0;
                } else {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                    answer.style.paddingTop = "15px";
                    answer.style.paddingBottom = "15px";
                }
            });
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
   
