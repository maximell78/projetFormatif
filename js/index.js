// index.js
// Programmé par : Maxime Lacroix-Lemire
// Dernière Mise À  Jour :  2021/07/09

$(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});