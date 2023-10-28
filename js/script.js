
const nav = ["HOME", "ABOUT", "BLOG",  "GALLERY", "CONTACT",];
const links  = ["index.html",  "about.html", "blog.html",  "gallery.html",  "contact.html", ];
let navsigrdze = nav.length;
let navtext= "<ul>";
for(let i=0; i<navsigrdze; i++){
    navtext += '<li><a href="' + links [i] + '">' + nav[i] + "</a></li>";
    console.log(navtext);
}
navtext += "</ul>";
console.log(navtext)
document.getElementById("nav").innerHTML = navtext;




let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

$('.owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    responsive:{
        1600:{
            items:4
        }
    }
});
$('.owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:false,
    margin:10,
    responsive:{
        1600:{
            items:4
        }
    }
});
function showchatbox(){
    document.getElementById("messagebox").style.display = "block";
}
function hidechatbox(){
    document.getElementById("messagebox").style.display = "none";
}



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))

