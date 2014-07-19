//Navigation bar triggering?
$("nav.responsive .hidden a#menu").on("click", function(e){
    e.preventDefault();
    
    var that = $(this);
    
//    var menu = that.parent().parent().find("ul");
	var menu = $("nav.responsive > ul");
	
    
    if (menu.css('display') == 'none'){
        menu.css("display", "block");
    } else {
        menu.css("display", "none");
    }
})
