$('.hero__scroll').on('click', function(e) {
    $('html, body').animate({
        scrollTop: $(window).height()
    }, 1200);
});
AOS.init({
    easeing: "ease-out-back",
    duration: 1000,
});
let burger = document.querySelector(".burger");
function menuShow () {
    let header = document.querySelector("header");
    header.classList.toggle("show");
}