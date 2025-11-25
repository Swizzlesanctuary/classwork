//* hamburger menu *//
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById("burger");
    const navMenu = document.getElementById("navMenu");
    let overlay = document.querySelector('.menu-overlay');


    if (!burger || !navMenu) {
        return;
    }

    function openMenu() {
        navMenu.classList.add('open');
        overlay.classList.add('visible');
        burger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (navMenu.classList.contains('open')) closeMenu();
        else openMenu();
    });

});



//* სლაიდერი მეინ და იჩ ვორქ *//

let slideIndex = 1;
(function initSlideshowIfNeeded() {
    const slides = document.getElementsByClassName("mySlides");
    if (!slides || slides.length === 0) return;

    showSlides(slideIndex);

    window.plusSlides = function (n) {
        showSlides(slideIndex += n);
    };

    function showSlides(n) {
        const slidesLocal = document.getElementsByClassName("mySlides");
        if (slidesLocal.length === 0) return;
        if (n > slidesLocal.length) slideIndex = 1;
        if (n < 1) slideIndex = slidesLocal.length;
        for (let i = 0; i < slidesLocal.length; i++) {
            slidesLocal[i].style.display = "none";
        }
        slidesLocal[slideIndex - 1].style.display = "block";
    }
})();




//* ლოგინი *//
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username")?.value.trim();
        const password = document.getElementById("password")?.value.trim();


        if (!username || !password) {
            alert("გთხოვთ შეავსოთ ყველა ველი.");
            return;
        }

        if (password.length < 6) {
            alert("ფასვორდი უნდა შედგებოდეს მინიმუმ 6 სიმბოლოსგან.");
            return;
        }

        alert("მობრძანდით.");
        loginForm.reset();
    });
}



//* რეგისტრაცია *//

const regForm = document.getElementById("regForm");

if (regForm) {
    regForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const pass = document.getElementById("password")?.value.trim();
        const latinEmail = /^[A-Za-z0-9@._-]+$/;

        if (!name || !email || !pass) {
            alert("გთხოვთ შეავსოთ ყველა ველი ლათინური ასოებით.");
            return;
        }
        if (pass.length < 6) {
            alert("ფასვორდი უნდა შედგებოდეს მინიმუმ 6 სიმბოლოსგან.");
            return;
        }

        if (!email.includes("@") || !email.includes(".") || !latinEmail.test(email)) {
            alert("გთხოვთ იმეილი შეავსოთ სწორად");
            return;
        }

        alert("რეგისტრაცია დასრულებულია.");
    });
}


//*კონტაქტი*//

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const first = document.getElementById('firstName')?.value.trim();
        const last = document.getElementById('lastName')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const city = document.getElementById('city')?.value.trim();
        const message = document.getElementById('message')?.value.trim();


        if (!first && !last) {
            alert("გთხოვთ შეიყვანოთ სახელი და გვარი.");
            return;
        }


        if (!email || !email.includes('@') || !email.includes('.')) {
            alert("გთხოვთ იმეილი შეავსოთ სწორად");
            return;
        }


        if (!city) {
            alert("გთხოვთ აირჩიოთ ქალაქი.");
            return;
        }


        if (!message || message.length < 10) {
            alert("მესიჯი უნდა შედგებოდეს მინიმუმ 10 სიმბოლოსგან.");
            return;
        }


        alert("თქვენი შეტყობინება წარმატებით გაიგზავნა!");
        contactForm.reset();
    });
}



//*api homepage*//

async function getJokeFromApi() {
    const data = await fetch("https://official-joke-api.appspot.com/random_joke")
    const joke = await data.json();
    return joke;
}

function showPopup() {
    const buttonIsClosingThePopover = document.getElementById("mypopover").checkVisibility();
    if (buttonIsClosingThePopover) {
        document.getElementById("joke").textContent = "";
    } else {
        getJokeFromApi().then(updateJokeDivText);
    }
}

function updateJokeDivText(joke) {
    document.getElementById("joke").textContent = `${joke.setup} ${joke.punchline}`;
}




//* api ებაუთი *//

async function getColorFromApi(color) {
    const data = await fetch("https://raw.githubusercontent.com/Swizzlesanctuary/classwork/8464ddff4587f38e541194c2cf2d631ab2357b42/final/colors.json");
    const json = await data.json();

    const colorInfo = json.color_facts.find(
        item => item.color === color
    );

    if (!colorInfo) {
        return {
            color: "ვერ ვიპოვეთ ეს ფერი",
            fact: "სხვა ფერი სცადე. მაგ: ლურჯი, წითელი..."
        };
    }
    return colorInfo;
}


function showColorFacts() {
    const color = document.getElementById("colorInput").value;
    getColorFromApi(color).then(updateColorFactsDivText);
}

function updateColorFactsDivText(colorFacts) {
    document.getElementById("colorFacts").textContent =
        `${colorFacts.color} — ${colorFacts.fact}`;
}



//*რენდომაიზერი სორტი*//

function randomWork() {
    const images = Array.from(document.querySelectorAll(".galleryContainer a"));
    const rows = document.querySelectorAll(".galleryContainer");
    images.sort(() => Math.random() - 0.5);

    rows[0].innerHTML = "";
    rows[1].innerHTML = "";

    rows[0].appendChild(images[0]);
    rows[0].appendChild(images[1]);
    rows[0].appendChild(images[2]);

    rows[1].appendChild(images[3]);
    rows[1].appendChild(images[4]);
    rows[1].appendChild(images[5]);
}
