$().ready(function() {
	$("h1:first").css("display", "none");
	$(".markdown-body").prepend("<div>This is added from script file</div>")
});


