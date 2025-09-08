document.addEventListener("DOMContentLoaded", () => {
  const seeBtn = document.getElementById("seeFeaturesBtn");
  const featuresSection = document.getElementById("features");

  if (seeBtn && featuresSection) {
    seeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      featuresSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  const ctaBtn = document.getElementById("cta");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
      alert("Nice! Buttons provide visual and motion feedback via CSS.");
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  
  // const ctaBtn = document.getElementById("cta");
  // if (ctaBtn) {
  //   ctaBtn.addEventListener("click", () => {
  //     alert("Nice! Buttons provide visual and motion feedback via CSS.");
  //   });
  // }


  const form = document.querySelector(".contact form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); 
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();

      if (name.length >= 2 && email !== "") {
        alert("Thanks! Your (demo) form was submitted.");
        form.reset(); 
      } else {
        alert("Please enter a valid name and email.");
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleThemeBtn");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const logoIcon = document.querySelector(".logo-icon");

  if (logoIcon) {
    logoIcon.addEventListener("click", () => {
      document.body.style.transform = "scale(0.6)";
      document.body.style.transition = "transform 0.5s ease";
    });
  }
});





