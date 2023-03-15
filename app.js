$(document).ready(function(){
	
	console.log("Hello, world!")

	$("[data-js-page]").on("touchend", function(){
		var goal_page = $(this).data("js-page");
		$(".page").removeClass("active");
		$(".page[data-page='"+goal_page+"']").addClass("active");
	})

})