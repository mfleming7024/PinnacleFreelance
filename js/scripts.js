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
});

$('#emailButton').click(function(){
	var from, company, phone, message, subject;
	
	from = $("#name").val();
	company = $("#companyName").val();
	phone = $("#phoneNumber").val();
	message = $("#message").val();
	
	subject = from + " , " + company + " , " + phone;
	
    $(location).attr('href', 'mailto:mpalmer@pinnaclelabservices.com?subject='
                             + encodeURIComponent(subject)
                             + "&body=" 
                             + encodeURIComponent(message)
    );
});
