
 $( document ).ready(function() {
    var img =  $('.img-mac-style');
    jQuery.each( img, function( i, val ) {
        var head = $('<div class="head"></div>').append('<span class="circle red">&nbsp;</span>');
        $(head).append('<span class="circle yellow">&nbsp;</span>');
        $(head).append('<span class="circle green">&nbsp;</span>');

        var panel = $("<div class='img-mac-window'></div>").append(head)
        var finish = $(panel).append(val.outerHTML)

        $(val).replaceWith(finish);
    });
});
