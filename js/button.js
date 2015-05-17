
$( document ).ready(function(){

	$('#sunrisebutton').click(function(e) {
		$('#sunrisephotos').show();
		$('#sunsetphotos').hide();
	});

	$('#sunsetbutton').click(function(e) {
		$('#sunrisephotos').hide();
		$('#sunsetphotos').show();
	});

});
