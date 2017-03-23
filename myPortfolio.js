$(document).ready(function() {
    //Initialise affix function for menu bar
	$('#mainNav').affix({
  		offset: {
    	top: 100
  		}
	})

    //Function to check window dimension
	function checkWidth(){
		$("#divHome").height($(window).height());
		$("#divhome").width($(window).width());
        $(".jumbotron").css('padding-top', $(window).height()/2-60);
    }

	checkWidth();
    $(window).resize(checkWidth);
});