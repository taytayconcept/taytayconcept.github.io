document.addEventListener("DOMContentLoaded", function () {

/* eto binago ko dito mula line 5 hanggang 29 */

/* ================= GOOGLE MAP SEARCH ================= */

const searchButton = document.getElementById("searchLocation");
const locationInput = document.querySelector(".location-search-row input");
const mapFrame = document.getElementById("googleMap");

searchButton.addEventListener("click", () => {

    if (locationInput.value.trim() !== "") {

        mapFrame.src =
        `https://maps.google.com/maps?q=${encodeURIComponent(locationInput.value)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    }

});

/* ENTER KEY SUPPORT */
locationInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        e.preventDefault();
        searchButton.click();
    }

});




  const form = document.getElementById("eventForm");
  const button = form.querySelector("button[type='submit']");
  const status = document.getElementById("statusMessage");

  const email = document.getElementById("email");
  const guestCount = document.getElementById("guestCount"); 

  // EMAIL VALIDATION MESSAGE
  email.oninvalid = () => {
    if (email.value === "") {
      email.setCustomValidity("Please complete this field");
    } else {
      email.setCustomValidity("Please include a valid email address.");
    }
  };

  email.oninput = () => email.setCustomValidity("");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // DEFAULT VALIDATION
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // STRICT EMAIL CHECK
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      email.setCustomValidity("Please include a valid email address.");
      email.reportValidity();
      return;
    }

    // GUEST COUNT VALIDATION
    const guests = parseInt(guestCount.value, 10);

if (isNaN(guests)) {
  guestCount.setCustomValidity("Please enter number of guests.");
  guestCount.reportValidity();
  return;
}

if (guests < 20) {
  guestCount.setCustomValidity("Minimum of 20 guests is required.");
  guestCount.reportValidity();
  return;
}

if (guests > 200) {
  guestCount.setCustomValidity("Maximum of 200 guests only.");
  guestCount.reportValidity();
  return;
}

// reset if valid
guestCount.setCustomValidity("");

    // SERVICES CHECK
    const services = document.querySelectorAll('input[name="services"]:checked');
    if (services.length === 0) {
      status.textContent = "Please select at least one service.";
      status.className = "error";
      return;
    }

    // PACKAGES CHECK
    const packages = document.querySelectorAll('input[name="packages"]:checked');
    if (packages.length === 0) {
      status.textContent = "Please select at least one package.";
      status.className = "error";
      return;
    }

    // LOADING STATE
    button.disabled = true;
    button.textContent = "Sending...";
    button.classList.add("loading");

    status.textContent = "Sending your booking...";
    status.className = "loading";

    setTimeout(() => {
      status.textContent = "Booking submitted successfully! Our team will contact you soon for confirmation and details.";
      status.className = "success";

      form.reset();

      // ✅ keep disabled
      button.disabled = true;

      // ✅ change button text
      button.textContent = "We received your event booking request.";
      button.classList.remove("loading");
      button.classList.add("success");

    }, 1500);
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
const boxes = document.querySelectorAll(".contact-box");

boxes.forEach(box => {
    box.addEventListener("click", (e) => {
        e.preventDefault();

        // close others
        boxes.forEach(b => {
            if (b !== box) b.classList.remove("active");
        });

        // toggle clicked one
        box.classList.toggle("active");
    });
});
const dateInput = document.getElementById("eventDate");

const today = new Date();
const yyyy = today.getFullYear();
const mm   = String(today.getMonth() + 1).padStart(2, "0");
const dd   = String(today.getDate()).padStart(2, "0");

dateInput.min = `${yyyy}-${mm}-${dd}`;
dateInput.max = `${yyyy + 10}-12-31`;

  // Contact input format...
  const phone = document.getElementById("phone");
  phone.addEventListener("input", function () {
    let numbers = this.value.replace(/[^0-9]/g, "");

    if (numbers.length > 0 && !numbers.startsWith("09")) {
      numbers = "09" + numbers.replace(/^0+/, "");
    }

    numbers = numbers.slice(0, 11);

    let formatted = "";
    if (numbers.length > 0) formatted = numbers.substring(0, 4);
    if (numbers.length >= 5) formatted += "-" + numbers.substring(4, 7);
    if (numbers.length >= 8) formatted += "-" + numbers.substring(7, 11);

    this.value = formatted;
    phone.setCustomValidity("");
  });

}); // ← dito na magtatapos ang DOMContentLoaded
