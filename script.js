// FalconLiving — interactions

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Sticky nav background on scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 12);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile menu toggle
const toggle = document.getElementById("navToggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// Scroll reveal with a subtle stagger for grouped items
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.parentElement
            ? Array.from(el.parentElement.children).indexOf(el) * 90
            : 0;
          setTimeout(() => el.classList.add("in"), Math.min(delay, 300));
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.15 }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("in"));
}

// Notify form
const form = document.getElementById("notifyForm");
const msg = document.getElementById("notifyMsg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.email.value.trim();
  if (!email) return;
  msg.textContent = `🎉 You're on the list! We'll ping ${email} the moment a unit drops.`;
  form.reset();
});
