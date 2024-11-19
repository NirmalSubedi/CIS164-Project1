"use strict";
$(document).ready(() => {

    // process each a tag
    $("#image_list a").each( (index, link) => {
        const imageUrl = link.href;            // gets the href attribute
        const imageCaption = link.title;       // gets the title attribute

        // preload images		
        const image = new Image();
        image.src = imageUrl;
        
        // set up event handlers for clicking on a link
        $(link).click( (evt) => {
            // swap image 
            $("#display_image").attr("src", imageUrl);
            
            // swap caption
            $("#caption").text(imageCaption);
            
            // cancel the default action of the link
            evt.preventDefault();
        }); // end click()
    }); // end each()
    // set focus on the first link when page loads
    $("#image_list li:first-child a").focus();
}); // end ready()