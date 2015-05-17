// page init
var imageDataRain;
var imageDataSimone;
var imageDataCalifornia;
var imageDataCrater;
var imageDataYellowstone;
var imageDataGrand;

jQuery(function(){
	getImages();
});

var tasks = [];

var allImgs = {};

function getImages(){


	tasks.push(function(callback){
		$.get("/data/rainroom.json", function(data){
			// var holder = '#rainroom-holder';
			// imageDataRain = data;

		 //    renderImages(holder, data);

		    allImgs.rainroom = data;
		    callback();
		    // setInterval(function(){ 
		    // 	doImageSwapEdit(holder, data);
		    // }, 5000);
		});
	});

	tasks.push(function(callback){
		$.get("/data/simone.json", function(data){
			// var holder = '#simone-holder';
		 //    imageDataSimone = data;

		 //    renderImages(holder, data);

		    allImgs.simone = data;
		    callback();

		    // setInterval(function(){ 
		    // 	doImageSwapEdit(holder, data);
		    // }, 5000);
		});
	});

	tasks.push(function(callback){
		$.get("/data/california.json", function(data){
			// var holder = '#california-holder';
		 //    imageDataCalifornia = data;

		 //    renderImages(holder, data);

		    allImgs.california = data;
		    callback();

		    // setInterval(function(){ 
		    // 	doImageSwapEdit(holder, data);
		    // }, 5000);
		});
	});

	tasks.push(function(callback){
		$.get("/data/craterlake.json", function(data){
		 //    imageDataCrater = data;
			// var holder = '#crater-holder';

		 //    renderImages(holder, data);

		    allImgs.craterlake = data;
		    callback();

		    // setInterval(function(){ 
		    // 	doImageSwapEdit(holder, data);
		    // }, 5000);
		});
	});

	tasks.push(function(callback){
		$.get("/data/yellowstone.json", function(data){
		 //    imageDataYellowstone = data;
			// var holder = '#yellow-holder';

		 //    renderImages(holder, data);

		    allImgs.yellowstone = data;
		    callback();

		    // setInterval(function(){ 
		    // 	doImageSwapEdit(holder, data);
		    // }, 5000);
		});
	});

	tasks.push(function(callback){
		$.get("/data/grandteton.json", function(data){
		 //    imageDataGrand = data;
			// var holder = '#grand-holder';

		 //    renderImages(holder, data);

		    allImgs.grandteton = data;
		    callback();

		    // setInterval(function(){ 
		    // 	doImageSwapEdit(holder, data);
		    // }, 5000);
		});
	});

	async.parallel(tasks, function(){

		Object.keys(allImgs).forEach(function(key){

			var holder = "#" + key + "-holder";
			renderImages(holder, allImgs[key]);
			setInterval(function(){
				doImageSwapEdit(holder, allImgs[key])
			}, 5000);
		});


		// set Interval to update the images 
		// so everything should be called from here
		// render images + swap images
		// allImgs.craters = json 
	});
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// pass in array and holder
function renderImages(holder, json, className){

	var randomArray = new Array();

	for(var i=0; i<9; i++){
		var ran = getRandomInt(0, json.length-1);
		randomArray.push(ran);
		$(holder).append(
			'<li class="rainbow-img-'+i+'">'+
				'<img class="photope" src="'+json[ran].photoUrl+'" height="151" width="151">'+
				'<span class="info"><a href="#">@'+json[ran].user.username+'</a></span>'+
			'</li>'
		)
	}

}

// pass in the rainroomholder, json
function doImageSwapEdit(holder, json){

	// put all our list item children into an array called images
	var images = $(holder).children().toArray();	
	
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
	while(newSelection.length < 3){

		// generate a random image from my photo json
		// var ran1= getRandomNumber(json);
		var ran1 = getRandomInt(0, json.length-1);
		
		// check that this image is not already in the grid
		for (var i = 0; i < currentImageSources.length; i++) {
			//console.log(imageDataRain[ran1].photoUrl);	
			// console.log(currentImageSources[i]);	

			// if it is in the grid, ignore and continue, don't do anything
			if (json[ran1].photoUrl === currentImageSources[i]){
			//	console.log("ALREADY exists ignoring")
				break;
			}
			else{
				// otherwise add to our newSelection array
				// need to check that this image isn't already in new Selection
				// check newSelection doesn't have image, and if so add to newSelection
				if(newSelection.indexOf(json[ran1]) > -1){
				//	console.log("Image exists in new newSelection");
				}
				else{
					newSelection.push(json[ran1]);	
				}
				
			}
		}
	}
	// console.log(newSelection);

	for(var m=0; m < 3; m++){
		fadeFunc(m);
	}

	function fadeFunc(num) {
	 	var lastImg = num;
	 	var randomGridIndex = getRandomInt(0, 9); // select random cell from grid
		var imgToReplace = holder + ' .rainbow-img-' + randomGridIndex;
	 	$(imgToReplace).fadeOut(1000, function(){
	 		console.log(lastImg);
	 		$(imgToReplace + ' img').attr("src", newSelection[lastImg].photoUrl);
	 		$(imgToReplace + ' .info a').text('@'+newSelection[lastImg].user.username);
	 	}).fadeIn(1000);

	 }

}
