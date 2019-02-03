//check off todos by clicking
$("ul").on("click","li",function(){
	//$(this).css("text-decoration","line-through");
	$(this).toggleClass("completed");
});

//click on X to delete
$("ul").on("click","span",function(){
	$(this).fadeOut(500,function(){
		$(this).parent().remove();
	});
	event.stopPropagation();
});
//event.stopPropagation() stops event bubbling

$("input[type='text']").on("keypress",function(event){
	if(event.which === 13 && ($(this).val())!=''){
		//grabbing text from input
		var todoText = $(this).val();
		$(this).val("");
		//create li and all to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+todoText+"</li>");
	}
});
$(".fa-plus").on("click",function(){
	$("input[type='text']").toggleClass("display");
});