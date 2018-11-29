const panels = document.querySelectorAll(".panel");

function toggleOpen() {
    this.classList.toggle("open");
}

function toggleActive(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
}

panels.forEach(panel1 => panel1.addEventListener("click", toggleOpen));
panels.forEach(panel1 => panel1.addEventListener("transitionend", toggleActive));