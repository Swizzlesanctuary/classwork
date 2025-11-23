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



const regForm = document.getElementById("regForm");

if (regForm) {
    regForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const pass = document.getElementById("password")?.value.trim();

        if (!name || !email || !pass) {
            alert("გთხოვთ შეავსოთ ყველა ველი.");
            return;
        }

        if (pass.length < 6) {
            alert("ფასვორდი უნდა შედგებოდეს მინიმუმ 6 სიმბოლოსგან.");
            return;
        }

        alert("რეგისტრაცია დასრულებულია.");
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById("burger");
    const navMenu = document.getElementById("navMenu");

    if (!burger || !navMenu) {

        return;
    }

    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
    }

    function openMenu() {
        navMenu.classList.add('open');
        overlay.classList.add('visible');
        burger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navMenu.classList.remove('open');
        overlay.classList.remove('visible');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (navMenu.classList.contains('open')) closeMenu();
        else openMenu();
    });

    overlay.addEventListener('click', closeMenu);
    navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
});





//*kontaqti*//

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    const validators = {
        firstLastName: v => v.trim().length >= 1 || "გთხოვთ შეიყვანოთ სახელი და გვარი.",
        email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "გთხოვთ შეიყვანოთ სწორი ელ.ფოსტა.",
        city: v => v.trim().length > 0 || "გთხოვთ აირჩიოთ ქალაქი.",
        message: v => v.trim().length >= 10 || "მესიჯი უნდა შედგებოდეს მინიმუმ 10 სიმბოლოსგან."
    };



    function showFieldError(name, message) {
        const el = document.querySelector(`.error[data-for="${name}"]`);
        if (el) el.textContent = message || '';
    }

    function clearErrors() {
        document.querySelectorAll('.error').forEach(e => e.textContent = '');
        status.textContent = '';
        status.className = 'form-status';
    }

    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        const data = {
            firstName: form.firstName.value || '',
            lastName: form.lastName.value || '',
            email: form.email.value || '',
            city: form.city.value || '',
            message: form.message.value || ''
        };

        let hasError = false;
        for (const key of Object.keys(validators)) {
            const result = validators[key](data[key]);
            if (result !== true) {
                hasError = true;
                showFieldError(key, result);
            } else {
                showFieldError(key, '');
            }
        }

        if (hasError) {
            status.textContent = 'გთხოვთ შეავსოთ ფორმა სწორად.';
            status.classList.add('error');
            return;
        }

        // Simulate sending...
        document.getElementById('sendBtn').disabled = true;
        status.textContent = 'გაგზავნილია — იდებითი ემული...';
        status.classList.remove('error');
        status.classList.add('success');

        // Simulate async send with timeout (replace with fetch to real endpoint)
        setTimeout(() => {
            // pretend success
            status.textContent = 'თქვენი შეტყობინება წარმატებით გაიგზავნა. მადლობა!';
            form.reset();
            document.getElementById('sendBtn').disabled = false;
        }, 800);
    });

});



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
