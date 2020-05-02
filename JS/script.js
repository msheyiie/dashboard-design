document.querySelector("#bring-aside-left").addEventListener("click", function(){
  document.querySelector(".show").classList.toggle("show-aside");
})

document.querySelector("#hide-aside-left").addEventListener("click", function(){
  document.querySelector(".show").classList.toggle("show-aside");
})

document.querySelector("#more-calendar").addEventListener("click", function(){
  document.querySelector(".aside-right-sub2").classList.toggle("show");
})

document.querySelector("#label").addEventListener("click", function(){
  document.querySelector(".input-box").classList.toggle("show1");
})

document.querySelector("#label").addEventListener("click", function(){
  document.querySelector(".mob").classList.toggle("show1");
})