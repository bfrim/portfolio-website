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

    const sciFiVideo = document.querySelector('.sci-fi-video');
    const sciFiCard = sciFiVideo.closest('.image-card');

    sciFiCard.addEventListener('mouseenter', () => {
        sciFiVideo.play();
    });

    sciFiCard.addEventListener('mouseleave', () => {
        sciFiVideo.pause();
        sciFiVideo.currentTime = 0;
    });

    let isPlaying = false;
    sciFiCard.addEventListener('click', (e) => {
        if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
            e.preventDefault();
            if (isPlaying) {
                sciFiVideo.pause();
                sciFiVideo.currentTime = 0;
                isPlaying = false;
            } else {
                sciFiVideo.play();
                isPlaying = true;
            }
        }
    });
});
