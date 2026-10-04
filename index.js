        // FADE IN FADE OUT - ALL SECTIONS
        const faders = document.querySelectorAll('section');

        const appearOptions = {
            threshold: 0.2, // 20% visible bago mag-appear
        };

        const appearOnScroll = new IntersectionObserver(function(entries, observer){
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('visible');
                }else {
                    entry.target.classList.remove('visible');
                }
            });
        }, appearOptions);

        faders.forEach(fader => {
            fader.classList.add('fade-in'); // lagay initial class
            appearOnScroll.observe(fader);
        });

        window.addEventListener('load', () => {
        document.querySelector('.hero-text').classList.add('loaded');
        });

        /* FOOTERS 

        const socialIcons = document.querySelectorAll('.footer-media a img');
        
        // Fade IN (stagger)
        socialIcons.forEach((icon, index) => {
            setTimeout(() => {
                icon.classList.add('visible');
            }, 300 + index * 200);
        });
        
        // Fade OUT when scrolling away
        window.addEventListener('scroll', () => {
            const footer = document.querySelector('.footer');
            const rect = footer.getBoundingClientRect();
            
            if (rect.top > window.innerHeight || rect.bottom < 0) {
        // footer not visible → fade OUT
        socialIcons.forEach(icon => {
            icon.classList.remove('visible');
        });
        } else {
        // footer visible → fade IN again
        socialIcons.forEach((icon, index) => {
            setTimeout(() => {
                icon.classList.add('visible');
            }, index * 150);
        });
        }
        }); */
        
        // FOR MOBILE RESPONSIVENESS ONLY

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

document.addEventListener("DOMContentLoaded", () => {

  const containers = document.querySelectorAll(
    ".services, .packagess, .portfolio-grid, .test-container, .choose"
  );

  containers.forEach(container => {

    let scrollAmount = container.clientWidth;
    let autoScroll;

    function startAutoScroll() {
      autoScroll = setInterval(() => {
        if (container.scrollLeft + scrollAmount >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }, 3000); // ⏱ speed (3 seconds)
    }

    function stopAutoScroll() {
      clearInterval(autoScroll);
    }

    // Start autoplay
    startAutoScroll();

    // Pause when user interacts
    container.addEventListener("touchstart", stopAutoScroll);
    container.addEventListener("mouseenter", stopAutoScroll);

    // Resume after interaction
    container.addEventListener("touchend", startAutoScroll);
    container.addEventListener("mouseleave", startAutoScroll);

  });

});

        /*const btn = document.getElementById("packageBtn");
        const dropdown = btn.parentElement;

        btn.addEventListener("click", function(e) {
        if (!dropdown.classList.contains("active")) {
            e.preventDefault(); // stop redirect first click
            dropdown.classList.add("active");
        }
        // second click = normal redirect
        });

        // close when clicking outside
        document.addEventListener("click", function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("active");
        }
        });*/

      
