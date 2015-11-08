var hidePoll = false;
var hideFinalists = false;

var pelledesc = "A combination of poor judgement and bad taste!";
var svendesc = "Sweet sweet skånsk music";
var dzdesc = "No description needed. His performance speaks for itself.";
var gabrieldesc = "He think he is funny.";

var toggle = function() {

	if (hidePoll) {
		$("#poll").addClass("hidden");
		$("#polldesc").text("Coming soon...")
	}
	
	if (hideFinalists) {
		$('.finalist').each(function(i, obj) {
    		$(this).attr("src","images/finalist/unknown.png")
		});
	} else {
		$('[showtext]').each(function(){
    		$(this).text($(this).attr('showtext'));
		});
		$("#findesc").text("");
		$('[findesc]').each(function(){

			var a = $(this).attr('findesc');
			if (a == 'sven') {
				$(this).text(svendesc);
			} else if(a == 'pelle') {
				$(this).text(pelledesc);
			} else if(a == 'Dz') {
				$(this).text(dzdesc);
			} else if(a == 'gabriel') {
				$(this).text(gabrieldesc);
			}
		});
	}

}



$(document).ready(function() {
  toggle();
});