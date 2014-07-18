//Grid pixel/class name animation
$("#grid_system .row div").hover(function() {
    var that = $(this);
    that.find("h2").stop().animate({opacity: 0, left: "20px"}, 400);
    that.find("h3").stop().animate({opacity: 1, right: "0px"}, 400);
    
}, function(){
    var that = $(this);
    that.find("h2").stop().animate({opacity: 1, left: "0px"}, 400);
    that.find("h3").stop().animate({opacity: 0, right: "20px"}, 400);
});

//Colors id name animation
$("#colors .row div div").hover(function() {
    var that = $(this);
    that.find("h2").stop().animate({opacity: 1}, 400);
    
}, function(){
    var that = $(this);
    that.find("h2").stop().animate({opacity: 0}, 300);
});

//Navigation bar triggering?
$("nav.responsive .hidden a#menu").on("click", function(e){
    e.preventDefault();
    
    var that = $(this);
    
    var menu = that.parent().parent().find("ul");
    
    if (menu.css('display') == 'none'){
        menu.css("display", "block");
    } else {
        menu.css("display", "none");
    }
})
