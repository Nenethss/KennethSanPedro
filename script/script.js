const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle(".");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


    
var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        icon.src = "moon.png" 
        icon1.src = "img/insta.png"
        icon2.src = "img/fb.png"
        icon3.src = "img/linked.png"
        icon5.src = "img/insta.png"
        icon6.src = "img/fb.png"
        icon7.src = "img/linked.png"
        icon4.src = "img/git.png"
    } else {
        icon.src = "sun.png" 
        icon1.src = "img/instagram.png"
        icon2.src = "img/facebook.png"
        icon3.src = "img/linkedin.png"
        icon5.src = "img/instagram.png"
        icon6.src = "img/facebook.png"
        icon7.src = "img/linkedin.png"
        icon4.src = "img/github.png"
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('first-show');
        } else {
            entry.target.classList.remove('first-show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.first-hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observerer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('second-show');
        } else {
            entry.target.classList.remove('second-show');
        }
    });
});

const hiddensElements = document.querySelectorAll('.second-hidden');
hiddensElements.forEach((el) => observerer.observe(el));

const hid = document.querySelector('.loading');


