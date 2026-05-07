const parallaxRoot = document.body;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function updateParallax() {
    if (prefersReducedMotion.matches) {
        parallaxRoot.style.setProperty("--parallax-y", "0");
        return;
    }

    const offset = Math.round(window.scrollY * -0.16);
    parallaxRoot.style.setProperty("--parallax-y", offset);
}

let ticking = false;

window.addEventListener("scroll", () => {
    if (ticking) {
        return;
    }

    window.requestAnimationFrame(() => {
        updateParallax();
        ticking = false;
    });

    ticking = true;
}, { passive: true });

prefersReducedMotion.addEventListener("change", updateParallax);
updateParallax();
