var cencel_btn = document.querySelector(".cencel_btn");
var model_popup = document.querySelector(".model_popup");
var popup_cencel_btn = document.querySelector(".popup_cencel_btn");
var popup_confirm_btn = document.querySelector(".popup_confirm_btn");

cencel_btn.addEventListener("click", function(){
    model_popup.classList.add("active");
})
popup_cencel_btn.addEventListener("click", function(){
    model_popup.classList.remove("active");
})
popup_confirm_btn.addEventListener("click", function(){
    model_popup.classList.remove("active");
})