var text = "Welcome to \nthe \nsplit \nuniverse";

var chars = text.split('');
var container = document.getElementById("welcome");
let cube = document.querySelector(".image-cube");
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let pos = 0;
const myBtn = document.getElementById("myBtn")
const more = document.getElementById("more")
const less = document.getElementById("less")
const myBtn1 = document.getElementById("myBtn-1")
const more1 = document.getElementById("more-1")
const less1 = document.getElementById("less-1")
const myBtn2 = document.getElementById("myBtn-2")
const more2 = document.getElementById("more-2")
const less2 = document.getElementById("less-2")
const myBtn3 = document.getElementById("myBtn-3")
const more3 = document.getElementById("more-3")
const less3 = document.getElementById("less-3")
const myBtn5 = document.getElementById("myBtn-5")
const more5 = document.getElementById("more-5")
const less5 = document.getElementById("less-5")
const myBtn6 = document.getElementById("myBtn-6")
const more6 = document.getElementById("more-6")
const less6 = document.getElementById("less-6")
const myBtn7 = document.getElementById("myBtn-7")
const more7 = document.getElementById("more-7")
const less7 = document.getElementById("less-7")
const myBtn8 = document.getElementById("myBtn-8")
const more8 = document.getElementById("more-8")
const less8 = document.getElementById("less-8")
const myBtn9 = document.getElementById("myBtn-9")
const more9 = document.getElementById("more-9")
const less9 = document.getElementById("less-9")
const myBtn10 = document.getElementById("myBtn-10")
const more10 = document.getElementById("more-10")
const less10 = document.getElementById("less-10")

less.style.display = "none";
less1.style.display = "none";
less2.style.display = "none";
less3.style.display = "none"
less5.style.display = "none"
less6.style.display = "none"
less7.style.display = "none"
less8.style.display = "none"
less9.style.display = "none"
less10.style.display = "none"

function readMore(){
  if(less.style.display === 'none'){
    console.log('Yep');
    more.style.display = "block";
    less.style.display = "block";
    myBtn1.style.display = "block";
    less1.style.display = "none";
    more1.style.display = "none";
    myBtn2.style.display = "block";
    less2.style.display = "none";
    more2.style.display = "none";
    myBtn3.style.display = "block";
    less3.style.display = "none";
    more3.style.display = "none";
    myBtn5.style.display = "block";
    less5.style.display = "none";
    more5.style.display = "none";
    myBtn6.style.display = "block";
    less6.style.display = "none";
    more6.style.display = "none";
  }
}

function hideMore(){
  if(less.style.display === "block"){
    myBtn.style.display = "block";
    less.style.display = "none";
    more.style.display = "none";
  }
}

function readMore1(){
  if(less1.style.display === 'none'){
    more1.style.display = "block";
    less1.style.display = "block";
    myBtn2.style.display = "block";
    less2.style.display = "none";
    more2.style.display = "none";
    myBtn.style.display = "block";
    less.style.display = "none";
    more.style.display = "none";
    myBtn3.style.display = "block";
    less3.style.display = "none";
    more3.style.display = "none";
    myBtn5.style.display = "block";
    less5.style.display = "none";
    more5.style.display = "none";
    myBtn6.style.display = "block";
    less6.style.display = "none";
    more6.style.display = "none";
  }
}

function hideMore1(){
  if(less1.style.display === "block"){
    myBtn1.style.display = "block";
    less1.style.display = "none";
    more1.style.display = "none";
    
  }
}

function readMore2(){
  if(less2.style.display === 'none'){
    more2.style.display = "block";
    less2.style.display = "block";
    myBtn1.style.display = "block";
    less1.style.display = "none";
    more1.style.display = "none";
    myBtn.style.display = "block";
    less.style.display = "none";
    more.style.display = "none";
    myBtn3.style.display = "block";
    less3.style.display = "none";
    more3.style.display = "none";
    myBtn5.style.display = "block";
    less5.style.display = "none";
    more5.style.display = "none";
    myBtn6.style.display = "block";
    less6.style.display = "none";
    more6.style.display = "none";
  }
}

function hideMore2(){
  if(more2.style.display === "block"){
    myBtn2.style.display = "block";
    less2.style.display = "none";
    more2.style.display = "none";
  }
}

function readMore3(){
  if(less3.style.display === 'none'){
    more3.style.display = "block";
    less3.style.display = "block";
    myBtn1.style.display = "block";
    less1.style.display = "none";
    more1.style.display = "none";
    myBtn.style.display = "block";
    less.style.display = "none";
    more.style.display = "none";
    myBtn2.style.display = "block";
    less2.style.display = "none";
    more2.style.display = "none";
    myBtn5.style.display = "block";
    less5.style.display = "none";
    more5.style.display = "none";
    myBtn6.style.display = "block";
    less6.style.display = "none";
    more6.style.display = "none";
  }
}

function hideMore3(){
  if(less3.style.display === "block"){
    myBtn3.style.display = "block";
    less3.style.display = "none";
    more3.style.display = "none";
  }
}
function readMore5(){
  if(less5.style.display === 'none'){
    more5.style.display = "block";
    less5.style.display = "block";
    myBtn.style.display = "block";
    less.style.display = "none";
    more.style.display = "none";
    myBtn3.style.display = "block";
    less3.style.display = "none";
    more3.style.display = "none";
    myBtn1.style.display = "block";
    less1.style.display = "none";
    more1.style.display = "none";
    myBtn2.style.display = "block";
    less2.style.display = "none";
    more2.style.display = "none";
    myBtn6.style.display = "block";
    less6.style.display = "none";
    more6.style.display = "none";
  }
}
   
function hideMore5(){
  if(more5.style.display === "block"){
    myBtn5.style.display = "block";
    less5.style.display = "none";
    more5.style.display = "none";
  }
}

function readMore6(){
  if(less6.style.display === 'none'){
    more6.style.display = "block";
    less6.style.display = "block";
    myBtn7.style.display = "block";
    less7.style.display = "none";
    more7.style.display = "none";
    myBtn8.style.display = "block";
    less8.style.display = "none";
    more8.style.display = "none";
    myBtn9.style.display = "block";
    less9.style.display = "none";
    more9.style.display = "none";
    myBtn10.style.display = "block";
    less10.style.display = "none";
    more10.style.display = "none";
    myBtn5.style.display = "block";
    less5.style.display = "none";
    more5.style.display = "none";
  }
}
   
function hideMore6(){
  if(more6.style.display === "block"){
    myBtn6.style.display = "block";
    less6.style.display = "none";
    more6.style.display = "none";
  }
}

function readMore7(){
  if(less7.style.display === 'none'){
    more7.style.display = "block";
    less7.style.display = "block";
    myBtn6.style.display = "block";
    less6.style.display = "none";
    more6.style.display = "none";
    myBtn8.style.display = "block";
    less8.style.display = "none";
    more8.style.display = "none";
    myBtn9.style.display = "block";
    less9.style.display = "none";
    more9.style.display = "none";
    myBtn10.style.display = "block";
    less10.style.display = "none";
    more10.style.display = "none";
    myBtn5.style.display = "block";
    less5.style.display = "none";
    more5.style.display = "none";
  }
}
   
function hideMore7(){
  if(more7.style.display === "block"){
    myBtn7.style.display = "block";
    less7.style.display = "none";
    more7.style.display = "none";
  }
}

function readMore8(){
  if(less8.style.display === 'none'){
    more8.style.display = "block";
    less8.style.display = "block";
    myBtn6.style.display = "block";
    less6.style.display = "none";
    more6.style.display = "none";
    myBtn7.style.display = "block";
    less7.style.display = "none";
    more7.style.display = "none";
    myBtn9.style.display = "block";
    less9.style.display = "none";
    more9.style.display = "none";
    myBtn10.style.display = "block";
    less10.style.display = "none";
    more10.style.display = "none";
    myBtn5.style.display = "block";
    less5.style.display = "none";
    more5.style.display = "none";
  }
}
   
function hideMore8(){
  if(more8.style.display === "block"){
    myBtn8.style.display = "block";
    less8.style.display = "none";
    more8.style.display = "none";
  }
}

function readMore9(){
  if(less9.style.display === 'none'){
    more9.style.display = "block";
    less9.style.display = "block";
    myBtn6.style.display = "block";
    less6.style.display = "none";
    more6.style.display = "none";
    myBtn7.style.display = "block";
    less7.style.display = "none";
    more7.style.display = "none";
    myBtn8.style.display = "block";
    less8.style.display = "none";
    more8.style.display = "none";
    myBtn10.style.display = "block";
    less10.style.display = "none";
    more10.style.display = "none";
    myBtn5.style.display = "block";
    less5.style.display = "none";
    more5.style.display = "none";
  }
}
   
function hideMore9(){
  if(more9.style.display === "block"){
    myBtn9.style.display = "block";
    less9.style.display = "none";
    more9.style.display = "none";
  }
}

function readMore10(){
  if(less10.style.display === 'none'){
    more10.style.display = "block";
    less10.style.display = "block";
    myBtn6.style.display = "block";
    less6.style.display = "none";
    more6.style.display = "none";
    myBtn7.style.display = "block";
    less7.style.display = "none";
    more7.style.display = "none";
    myBtn9.style.display = "block";
    less9.style.display = "none";
    more9.style.display = "none";
    myBtn8.style.display = "block";
    less8.style.display = "none";
    more8.style.display = "none";
    myBtn5.style.display = "block";
    less5.style.display = "none";
    more5.style.display = "none";
  }
}
   
function hideMore10(){
  if(more10.style.display === "block"){
    myBtn10.style.display = "block";
    less10.style.display = "none";
    more10.style.display = "none";
  }
}



var i = 0;
setInterval(function () {
    if (i < chars.length) {
        container.innerHTML += chars[i++];
    } else {
        i = 0;
        container.innerHTML = "";
    }
}, 80);


let currentSlide = 0;
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none"
    dots.forEach((dot, index) => {
      dot.classList.remove("active")
    })
  })
  slides[n].style.display = "block"
  dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", init(currentSlide))
const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  init(currentSlide)
}

document.querySelector(".next").addEventListener('click', next)

document.querySelector(".prev").addEventListener('click', prev)


setInterval(() => {
  next()
}, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide)
    init(i)
    currentSlide = i
  })
})










