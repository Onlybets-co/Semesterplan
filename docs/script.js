$().ready(function() {
	$("h1:first").css("display", "none");
	$(".markdown-body").prepend("<div><i><small><a href='index.html'>Semesterplan</a> ->  <a href='index.html'>Undervisningsbeskrivelser</a>   </small></i></div>")
	$(".markdown-body").prepend("<div><i><small>Dat19b, Programmering 2, 3. Semester Forår 2020, Underviser: Claus Bove, clbo@kea.dk</small></i></div>")
	$(".markdown-body").append("<div style='text-align:right'><i><small>&copy; clbo@kea.dk, fall 2020</small></i></div>")	
});


