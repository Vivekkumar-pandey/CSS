// mobile menu

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.onclick = () => {

    navMenu.classList.toggle("active");

};


// typing effect

const words = ["Programming", "Web Development", "Full Stack", "Data Science"];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

    current = words[i];

    document.getElementById("typing").textContent = current.substring(0, j);

    if (!isDeleting && j < current.length) {

        j++;

        setTimeout(type, 120);

    }

    else if (isDeleting && j > 0) {

        j--;

        setTimeout(type, 60);

    }

    else {

        isDeleting = !isDeleting;

        if (!isDeleting) i = (i + 1) % words.length;

        setTimeout(type, 800);

    }

}

type();



// theme toggle

document.getElementById("themeToggle").onclick = () => {

    document.body.classList.toggle("light");

};