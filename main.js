

document.addEventListener("DOMContentLoaded", () => {


    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });



    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".navbar a");

    function activeNav() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", activeNav);

    activeNav();



    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (!topBtn) return;

        if (window.scrollY > 400) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }



    const revealElements = document.querySelectorAll(

        ".card, .project-card, .hero-text, .hero-image, .about-image, .about-text"

    );

    revealElements.forEach(el => {

        el.classList.add("hidden");

    });

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });

    revealElements.forEach(el => observer.observe(el));

});


const typingElement = document.querySelector(".hero-text h2");

if (typingElement) {

    const words = [
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "PHP Developer",
        "MySQL Developer"
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    function typeEffect() {

        const current = words[wordIndex];

        if (!deleting) {

            typingElement.textContent = current.substring(0, letterIndex++);

            if (letterIndex > current.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;

            }

        } else {

            typingElement.textContent = current.substring(0, letterIndex--);

            if (letterIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(typeEffect, deleting ? 60 : 120);

    }

    typeEffect();

}



const counters = document.querySelectorAll(".stats .card h2");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = parseInt(counter.textContent);

            let count = 0;

            const speed = target / 120;

            function updateCounter() {

                count += speed;

                if (count < target) {

                    counter.textContent = Math.floor(count) + "+";

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent = target + "+";

                }

            }

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});



const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background = "rgba(15,23,42,.98)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(15,23,42,.90)";
        header.style.boxShadow = "none";

    }

});


document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const size = Math.max(this.clientWidth, this.clientHeight);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left = (e.offsetX - size / 2) + "px";
        ripple.style.top = (e.offsetY - size / 2) + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    document.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.clientX) / 35;
        const y = (window.innerHeight / 2 - e.clientY) / 35;

        heroImage.style.transform =
            `translate(${x}px,${y}px)`;

    });

}


document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});


document.querySelectorAll("img").forEach(img => {

    img.addEventListener("mousemove", e => {

        const rect = img.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = (rect.height / 2 - y) / 18;

        const rotateY = (x - rect.width / 2) / 18;

        img.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.05)`;

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "";

    });

});



const navbar = document.querySelector(".navbar");

if (navbar) {

    navbar.addEventListener("dblclick", () => {

        if (navbar.style.opacity === "0") {

            navbar.style.opacity = "1";
            navbar.style.pointerEvents = "auto";

        } else {

            navbar.style.opacity = "0";
            navbar.style.pointerEvents = "none";

        }

    });

}


window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .8s";

        document.body.style.opacity = "1";

    }, 100);

});



console.log("Welcome to Biruk Zelalem Portfolio");



const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar ul");

hamburger.addEventListener("click",()=>{

    menu.classList.toggle("active");

});




const navbar = document.querySelector(".navbar");

navbar.addEventListener("dblclick",()=>{

    navbar.style.display="none";

});