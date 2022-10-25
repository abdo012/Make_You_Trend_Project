// =============nav baar Toogle==========
var open = document.querySelector('.bars');
var close = document.querySelector('.exit');
var ul = document.querySelector('.ul');

open.onclick = function(){
    // ul.style.right = "0"
    ul.style.display = "block"
};
close.onclick = function(){
    // ul.style.right = "-100%"
    ul.style.display = "none"
};
// ========Remov & Add Class Active=========
var all_a = document.querySelectorAll(".ul li a");
// console.log(all_a);
all_a.forEach((btn)=>{
    btn.addEventListener("click", remov_add_active);
});

function remov_add_active(){
    // remov
    all_a.forEach((ele)=>{
        ele.classList.remove("active-one");
    });
    // add
    this.classList.add("active-one");
};

// ===========Scroll To Top | and | nav to position fixd====================
var up = document.querySelector(".up");
var nav_fx = document.querySelector("nav");
window.onscroll = function (){
    if(this.scrollY >= 600){
        up.classList.add("show");
        nav_fx.style.position = "fixed";
    }else{
        up.classList.remove("show");
        nav_fx.style.position = "";
    };
};
up.onclick = function(){
    window.scrollTo({
        top:0,
        behavior: "smooth",
    });
};
// ======================pwor of media=================
var span_btn = document.querySelectorAll(".btn-taps span");
var media = document.querySelectorAll(".media div");



span_btn.forEach((btn)=>{
    btn.addEventListener("click", active)
    btn.addEventListener("click", show)
})


function active(){
    span_btn.forEach((btn)=>{
        btn.classList.remove("active-two")
    })
    this.classList.add("active-two")
}


function show(e){

    media.forEach((cont)=>{
        cont.style.display = "none"
    })
    document.querySelector(e.currentTarget.dataset.taps).style.display = "block"
}