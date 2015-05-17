
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderImages(){

	var randomArray = new Array();
	
	// function getRandomNumber(){
	// 	var ran = Math.floor((Math.random() * imageDataRain.length) + 0);
	// 	if (randomArray.indexOf(ran) == -1) return ran;
	// 	else return getRandomNumber();
	// }

	for(var i=0; i<9; i++){
		var ran = getRandomInt(0,imageDataRain.length-1)//getRandomNumber();
		randomArray.push(ran);
		$('#rainroom-holder').append(
			'<li>'+
				'<img src="'+imageDataRain[ran].photoUrl+'" height="151" width="151">'+
				'<span class="info"><a href="#">@'+imageDataRain[ran].user.username+'</a></span>'+
			'</li>'
		)
	}

}

// pass in the rainroomholder, json
function doImageSwapEdit(){

	// put all our list item children into an array called images
	var images = $('#rainroom-holder').children().toArray();	
	
	// create an empty array for the images currently in the grid
	var currentImageSources =  [];

	// loop through the grid images, add the photoUrls to currentImageSources array	
	for (var i = 0; i < images.length; i++) {
		currentImageSources.push(images[i].children[0].src);
	};
	// console.log(images[0].children[0].src);	
	// console.log(currentImageSources);
	
	// create an empty array for our 3 new images
	var newSelection = new Array();

	// while newSelection isn't full yet
	while(newSelection.length< 3){

		// generate a random image from my photo json
		var ran1= getRandomNumber(imageDataRain)
		
		// check that this image is not already in the grid
		for (var i = 0; i < currentImageSources.length; i++) {
			console.log(imageDataRain[ran1].photoUrl);	
			// console.log(currentImageSources[i]);	

			// if it is in the grid, ignore and continue, don't do anything
			if (imageDataRain[ran1].photoUrl === currentImageSources[i]){
				console.log("ALREADY exists ignoring")
				break;
			}
			else{
				// otherwise add to our newSelection array
				// need to check that this image isn't already in new Selection
				// check newSelection doesn't have image, and if so add to newSelection
				if(newSelection.indexOf(imageDataRain[ran1]) > -1){
					console.log("Image exists in new newSelection");
				}
				else{
					newSelection.push(imageDataRain[ran1]);	
				}
				
			}
		}
	}

	console.log(newSelection);
	for(var i=0; i<3; i++){
	 	var randomGridIndex = getRandomNumber(images); // select random cell from grid
	// 	randomArray.push(ran);

		// console.log(images[randomGridIndex]);
		$(images[randomGridIndex]).replaceWith(
			'<li>'+
				'<img src="'+newSelection[i].photoUrl+'" height="151" width="151">'+
				'<span class="info"><a href="#">@'+newSelection[i].user.username+'</a></span>'+
			'</li>'
		).delay(2000).fadeIn(2000);
	}

		function getRandomNumber(arrayToCheck){
		if(arrayToCheck){
				var ran = Math.floor((Math.random() * arrayToCheck.length) + 0);
			if (arrayToCheck.indexOf(ran) == -1) return ran;
			else return getRandomNumber(arrayToCheck);
		}
		else{
			console.log("IMAGE DATA RAIN NOT LOADED")
		}
	}

}
