const menu = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menu.onclick = () => {
    navLinks.classList.toggle("active");
};

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

sections.forEach((section)=>{
    section.classList.add("hidden");
    observer.observe(section);
});

document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    alert("Thank you! Your message has been received.");
});