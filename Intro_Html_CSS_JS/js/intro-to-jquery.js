/// <reference path="jquery-3.1.1.js" />

$(function () {
    

    var count = $("#page").find("div").length;
    var p_count = $("#page").find("p").length;


    var images = $("img");
    images.each(function () {
        var currentImage = $(this);
        currentImage.on("click", function () {            
            currentImage.attr("width", "100%");

        });
    });

    //var images =document.getElementsByTagName("img");





});