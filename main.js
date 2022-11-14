
$('.title').on('click', function() {
	$('.box').slideUp(500);
    
	var findElm = $(this).next(".box");
    
	if($(this).hasClass('close')){
		$(this).removeClass('close');  
	}else{
		$('.close').removeClass('close'); 
		$(this).addClass('close');
		$(findElm).slideDown(500);
	}
});

$(window).on('load', function(){
	$('.accordion-area li:first-of-type section').addClass("open"); 
	$(".open").each(function(index, element){	
		var Title =$(element).children('.title');
		$(Title).addClass('close');				
		var Box =$(element).children('.box');	
		$(Box).slideDown(500);				
	});
});
