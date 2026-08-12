const aceCarousel = document.querySelector("[data-ace-carousel]");

if (aceCarousel) {
    const aceSlides = [
        // Wireframes
        {
            src: "../images/projects/ace_home_wf.png",
            title: "Home screen",
            phase: "Wireframe",
            alt: "Wireframe of the Ace Restaurant home screen"
        },
        {
            src: "../images/projects/ace_menu_wf.png",
            title: "Menu screen",
            phase: "Wireframe",
            alt: "Wireframe of the Ace Restaurant menu screen"
        },
        {
            src: "../images/projects/ace_order_wf.png",
            title: "Order screen",
            phase: "Wireframe",
            alt: "Wireframe of the Ace Restaurant order screen"
        },
        {
            src: "../images/projects/ace_nutrition_wf.png",
            title: "Nutrition screen",
            phase: "Wireframe",
            alt: "Wireframe of the Ace Restaurant nutrition screen"
        },
        {
            src: "../images/projects/ace_profile_wf.png",
            title: "Profile screen",
            phase: "Wireframe",
            alt: "Wireframe of the Ace Restaurant profile screen"
        },

        // Drafts
        {
            src: "../images/projects/ace_cover.png",
            title: "Early application screen",
            phase: "Draft",
            alt: "Early Ace Restaurant application screen"
        },
        {
            src: "../images/projects/ace_home.png",
            title: "Home screen",
            phase: "Draft",
            alt: "Draft of the Ace Restaurant home screen"
        },
        {
            src: "../images/projects/ace_menu.png",
            title: "Menu screen",
            phase: "Draft",
            alt: "Draft menu screen with item quantity controls"
        },
        {
            src: "../images/projects/ace_menu_2.png",
            title: "Menu interaction",
            phase: "Draft",
            alt: "Draft menu screen with quantities selected"
        },
        {
            src: "../images/projects/ace_order.png",
            title: "Order screen",
            phase: "Draft",
            alt: "Draft Ace Restaurant order summary screen"
        },
        {
            src: "../images/projects/ace_nutrition.png",
            title: "Nutrition screen",
            phase: "Draft",
            alt: "Draft nutrition screen showing selected calories"
        },
        {
            src: "../images/projects/ace_profile.png",
            title: "Profile screen",
            phase: "Draft",
            alt: "Draft Ace Restaurant customer profile screen"
        },

        // Final designs
        {
            src: "../images/projects/ace_home_final.png",
            title: "Home screen",
            phase: "Final design",
            alt: "Final Ace Restaurant home screen"
        },
        {
            src: "../images/projects/ace_menu_final.png",
            title: "Menu screen",
            phase: "Final design",
            alt: "Final Ace Restaurant menu screen"
        },
        {
            src: "../images/projects/ace_deals_final.png",
            title: "Deals screen",
            phase: "Final design",
            alt: "Final Ace Restaurant deals screen"
        },
        {
            src: "../images/projects/ace_order_final.png",
            title: "Order screen",
            phase: "Final design",
            alt: "Final Ace Restaurant order screen"
        },
        {
            src: "../images/projects/ace_nutrition_final.png",
            title: "Nutrition screen",
            phase: "Final design",
            alt: "Final Ace Restaurant nutrition screen"
        },
        {
            src: "../images/projects/ace_profile_final.png",
            title: "Profile screen",
            phase: "Final design",
            alt: "Final Ace Restaurant profile screen"
        }
    ];

    const image = aceCarousel.querySelector("#ace-carousel-image");
    const title = aceCarousel.querySelector("#ace-slide-title");
    const phase = aceCarousel.querySelector("#ace-stage");
    const counter = aceCarousel.querySelector("#ace-slide-counter");
    const previous = aceCarousel.querySelector(".ace-carousel-previous");
    const next = aceCarousel.querySelector(".ace-carousel-next");
    const phaseButtons = aceCarousel.querySelectorAll("[data-ace-start]");

    let currentSlide = 0;

    function showAceSlide(index) {
        currentSlide = (index + aceSlides.length) % aceSlides.length;

        const slide = aceSlides[currentSlide];

        image.src = slide.src;
        image.alt = slide.alt;
        title.textContent = slide.title;
        phase.textContent = slide.phase;
        counter.textContent = `${currentSlide + 1} / ${aceSlides.length}`;

        phaseButtons.forEach((button) => {
            const start = Number(button.dataset.aceStart);
            let isActive = false;

            if (currentSlide < 5) {
                isActive = start === 0;
            } else if (currentSlide < 12) {
                isActive = start === 5;
            } else {
                isActive = start === 12;
            }

            button.classList.toggle("is-active", isActive);
        });

        const nextIndex = (currentSlide + 1) % aceSlides.length;
        const preloadImage = new Image();
        preloadImage.src = aceSlides[nextIndex].src;
    }

    previous.addEventListener("click", () => {
        showAceSlide(currentSlide - 1);
    });

    next.addEventListener("click", () => {
        showAceSlide(currentSlide + 1);
    });

    phaseButtons.forEach((button) => {
        button.addEventListener("click", () => {
            showAceSlide(Number(button.dataset.aceStart));
        });
    });

    aceCarousel.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            showAceSlide(currentSlide - 1);
        }

        if (event.key === "ArrowRight") {
            showAceSlide(currentSlide + 1);
        }

        if (event.key === "Home") {
            showAceSlide(0);
        }

        if (event.key === "End") {
            showAceSlide(aceSlides.length - 1);
        }
    });

    showAceSlide(0);
}

