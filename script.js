// Tombol Dark Mode
document.getElementById("darkToggle").onclick = function () {
    document.body.classList.toggle("dark");
};

// Fade-in saat discroll
const faders = document.querySelectorAll(".fade");

function showOnScroll() {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

