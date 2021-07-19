$(function(){
    $("button").click(function(){
        $("#toggle ul").slideToggle(300);
    });

    
    
});





$(function(){
    
    $("a[href⋇=#]:not([href=#])").click(function(){
        var target = $($(this).attr("href")).offset().top;
        target -= 70;
        $("html,body").animete({scrollTop: target},500);
        
        return false;


});

});