// MENU-BURGER
$('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
});
// MENU-BURGER

$('.unique-design__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
});

$('.variable-width').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true
});

$('.product__order-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true
});

$(document).ready(function () {
    $("#phone").inputmask({
        "mask": "+38 (999) 999-99-99"
    });
});

$('.option__slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: null,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 757,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true
            }
        }
    ]
});

// page-ready-furniture
$(function () {
    $('#Container').mixItUp();
});
// page-ready-furniture

$(".btn-option").click(function () {
    $(".option").toggleClass('show')
});

$(".btn-sorting").click(function(){
    $(".design-sorting").toggleClass('design-show')
});

$(".btn-sorting").click(function(){
    $(".btn-sorting").toggleClass('btn-active')
});

$(".btn-sorting").click(function(){
    $(".ready-design__basket").toggleClass('basket-active')
});

$(".btn-sorting").click(function(){
    $(".basket__bg").toggleClass('basket__bg-active')
});

$(".custom-checkbox-label-1").click(function(){
    $(".custom-checkbox-label-1").toggleClass('custom-active-1')
});

$(".custom-checkbox-label-2").click(function(){
    $(".custom-checkbox-label-2").toggleClass('custom-active-2')
});

$(".custom-checkbox-label-3").click(function(){
    $(".custom-checkbox-label-3").toggleClass('custom-active-3')
});

$(".custom-checkbox-label-4").click(function(){
    $(".custom-checkbox-label-4").toggleClass('custom-active-4')
});

$(".custom-checkbox-label-5").click(function(){
    $(".custom-checkbox-label-5").toggleClass('custom-active-5')
});

$(".custom-checkbox-label-6").click(function(){
    $(".custom-checkbox-label-6").toggleClass('custom-active-6')
});

$(".custom-checkbox-label-7").click(function(){
    $(".custom-checkbox-label-7").toggleClass('custom-active-7')
});

$(".custom-checkbox-label-8").click(function(){
    $(".custom-checkbox-label-8").toggleClass('custom-active-8')
});

$(".custom-checkbox-label-9").click(function(){
    $(".custom-checkbox-label-9").toggleClass('custom-active-9')
});

$(".custom-checkbox-label-10").click(function(){
    $(".custom-checkbox-label-10").toggleClass('custom-active-10')
});

$(".custom-checkbox-label-11").click(function(){
    $(".custom-checkbox-label-11").toggleClass('custom-active-11')
});

$(".custom-checkbox-label-12").click(function(){
    $(".custom-checkbox-label-12").toggleClass('custom-active-12')
});

$(".custom-checkbox-label-13").click(function(){
    $(".custom-checkbox-label-13").toggleClass('custom-active-13')
});

$(".custom-checkbox-label-14").click(function(){
    $(".custom-checkbox-label-14").toggleClass('custom-active-14')
});

$(".custom-checkbox-label-15").click(function(){
    $(".custom-checkbox-label-15").toggleClass('custom-active-15')
});