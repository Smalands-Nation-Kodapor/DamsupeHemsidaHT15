var hidePoll = false;
var hideFinalists = false;

var pelledesc = "Description of pelle";
var svendesc = "Description of Sven";
var dzdesc = "Description of Dz";
var oklartdesc = "Description of Oklart";

var toggle = function() {

	if (hidePoll) {
		$("#poll").addClass("hidden");
	}
	
	if (hideFinalists) {
		$('.finalist').each(function(i, obj) {
    		$(this).attr("src","images/finalist/unknown.png")
		});
	} else {
		$('[showtext]').each(function(){
    		$(this).text($(this).attr('showtext'));
		});

		$('[findesc]').each(function(){

			var a = $(this).attr('findesc');
			if (a == 'sven') {
				$(this).text(svendesc);
			} else if(a == 'pelle') {
				$(this).text(pelledesc);
			} else if(a == 'dz') {
				$(this).text(dzdesc);
			} else if(a == 'oklart') {
				$(this).text(oklartdesc);
			}
		});
	}

}



$(document).ready(function() {
  toggle();
});