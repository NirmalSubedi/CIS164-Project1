"use strict";

$(document).ready( () => {

    $("#jdom a").click( evt => {
        // prevent the default action of the link
        evt.preventDefault();
        
        // store clicked link in constant
        const link = evt.currentTarget;

        // show/hide div element with "hide" class toggle
        const modifiedDiv = $(link).prev();
        $(modifiedDiv).toggleClass("hide");

        // change text based on div element containing "hide" class  
        if ($(modifiedDiv).attr("class") === "hide") {
            $(link).text("Show more");
        } 
        else  {
            $(link).text("Show less");
        }
    }); // end click
}); // end ready