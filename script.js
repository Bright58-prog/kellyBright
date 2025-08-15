const titles = [
    "Future Biomedical Scientist",
    "Web Developer",
    "Graphic Designer",
    "Video Editor",
    "Photographer",
    "Song Composer",
    "Technology Enthusiast",
];

let i = 0;
let j = 0;
let currentTitle = "";
let isDeleting = false;
let speed = 150;

function type() {
    currentTitle = titles[i];
    document.querySelector(".typing").textContent =
        isDeleting
            ? currentTitle.substring(0, j--)
            : currentTitle.substring(0, j++);

    if (!isDeleting && j === currentTitle.length) {
        isDeleting = true;
        speed = 100;
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % titles.length;
        speed = 150;
    }

    setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", type);
