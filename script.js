document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section, .cover, .projects, .extras");

    const highlightNav = () => {
        let scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((link) => link.classList.remove("active"));
                const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
                if (activeLink) activeLink.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", highlightNav);

    // navLinks.forEach((link) => {
    //     link.addEventListener("click", () => {
    //         navLinks.forEach((link) => link.classList.remove("active"));
    //         link.classList.add("active");
    //     });
    // });
});