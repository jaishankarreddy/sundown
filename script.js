function page4animation(){
  var element = document.querySelector(".element-container")
var fixed = document.querySelector(".fixed-image")
element.addEventListener("mouseenter", function () {
  fixed.style.display = "block"
})
element.addEventListener("mouseleave", function () {
  fixed.style.display = "none"
})

var elements = document.querySelectorAll(".element")
elements.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var img = e.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${img})`
  })
})

}

function menuanimation(){
  var menu = document.querySelector("nav h2")
var navimg = document.querySelector("nav img")
var full = document.querySelector(".full-screen")
var flag = 0
menu.addEventListener("click", function(){
  if(flag == 0){
    full.style.top = 0
    navimg.style.opacity = 0
    flag= 1
  }
  else{
    full.style.top = "-100%"
    navimg.style.opacity = 1
    flag= 0
  }
})

}


// ...........for one element..........
// var elmentimg = document.querySelector("#element1")
// element1.addEventListener("mouseenter",function(){
//     var img = element1.getAttribute("data-image")
//     fixed.style.backgroundImage = `url(${img})`
// }).........for one element..........

// `url(${img})`   -----------> its called as "template litrals", IMPORTANT INTERVIEW QUESTIONS.

page4animation()
menuanimation()


var loader = document.querySelector(".loader")
setTimeout(function(){
    loader.style.top = "-110%"
},2300)


