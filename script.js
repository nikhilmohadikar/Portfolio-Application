// Toggle icon navbar
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const Talk = document.querySelector("#talk");
const displayNumber = document.querySelector("#display-number");
const readMore = document.querySelector("#read-more");
const Button = document.querySelector("#button");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
})

// Scroll Section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active NavBar Links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // Active section when animation scrolls
            sec.classList.add("show-animate");
        }
        else {
            sec.classList.remove("show-animate");
        }
    })

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar links ( Scroll )
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");

    // Footer animation
    let footer = document.querySelector('footer');

    footer.classList.toggle("show-animate", this.innerHeight + this.screenY >= document.scrollingElement.scrollHeight);
}

Talk.onclick = () => {
    displayNumber.classList.toggle("active");
}

readMore.addEventListener("click", () => { 
    if(projects.style.display === "null")
    {
        console.log("Null")
    }
    else{
        console.log("else");
        projects.classList.add("active");
        Button.remove();
    }
})
