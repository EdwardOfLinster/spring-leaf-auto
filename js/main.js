//Masonry initialization 
var elem = document.querySelector('.card_items');
var msnry = new Masonry(elem, {
    // options
    itemSelector: '.card__box',
    columnWidth: '.grid_sizer',
    percentPosition: true
});
//Brand name to Shop now hover function
$("#box1").hover(function () {
    $("#box1_brand").css("display", "none");
    $("#box1_link").css("display", "flex");
}, function () {
    $("#box1_brand").css("display", "block");
    $("#box1_link").css("display", "none");
});
$("#box2").hover(function () {
    $("#box2_brand").css("display", "none");
    $("#box2_link").css("display", "flex");
}, function () {
    $("#box2_brand").css("display", "block");
    $("#box2_link").css("display", "none");
});
$("#box3").hover(function () {
    $("#box3_brand").css("display", "none");
    $("#box3_link").css("display", "flex");
}, function () {
    $("#box3_brand").css("display", "block");
    $("#box3_link").css("display", "none");
});
$("#box4").hover(function () {
    $("#box4_brand").css("display", "none");
    $("#box4_link").css("display", "flex");
}, function () {
    $("#box4_brand").css("display", "block");
    $("#box4_link").css("display", "none");
});
$("#box5").hover(function () {
    $("#box5_brand").css("display", "none");
    $("#box5_link").css("display", "flex");
}, function () {
    $("#box5_brand").css("display", "block");
    $("#box5_link").css("display", "none");
});
$("#box6").hover(function () {
    $("#box6_brand").css("display", "none");
    $("#box6_link").css("display", "flex");
}, function () {
    $("#box6_brand").css("display", "block");
    $("#box6_link").css("display", "none");
});