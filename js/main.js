const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const mobile_menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll('.counter');
let flag = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scroll');
    mobile_menu.classList.toggle('show-menu');
}

function scrollPage() {
    const scrollPos = window.scrollY;
    if (scrollPos > 100 && !flag) {
        countUp();
        flag = true;
    } else if (scrollPos < 100 && flag) {
        reset();
        flag = false;
    }
}

function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';
        const update = () => {
            const target = +counter.getAttribute('data-target');
            const curr = +counter.innerText;
            const increment = target / 100;
            if (curr < target) {
                counter.innerText = `${Math.ceil(curr + increment)}`;
                setTimeout(update, 75);
            } else
                counter.innerText = target;
        }
        update();
    });
}


function reset() {
    counters.forEach((counter) => (counter.innerHTML = '0'));
};