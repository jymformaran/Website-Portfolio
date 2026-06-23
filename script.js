let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active');

}



const loader = document.getElementById("loader");
const loadingText = document.getElementById("loading-text");

const messages = [
    "Initializing systems...",
    "Decrypting profile...",
    "Loading abilities...",
    "Loading missions...",
    "Synchronizing records...",
];

const totalDuration = 6000;
const intervalTime = totalDuration / messages.length;

// Check if loader has already been shown
if (sessionStorage.getItem("loaderShown")) {

    // Hide loader immediately
    loader.style.display = "none";

} else {

    // Mark loader as shown
    sessionStorage.setItem("loaderShown", "true");

    let current = 0;
    loadingText.textContent = messages[current];

    const interval = setInterval(() => {
        current++;

        if (current < messages.length) {
            loadingText.textContent = messages[current];
        } else {
            clearInterval(interval);
        }
    }, intervalTime);

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("fade-out");

            setTimeout(() => {
                loader.style.display = "none";
            }, 600);

        }, totalDuration);
    });

}