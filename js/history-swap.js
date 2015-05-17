// page init
var imageDataRussia;

jQuery(function(){
	getImages();
});

var tasks = [];

var allImgs = {};

function getImages(){
	tasks.push(function(callback){
		$.get("/data/moscow.json", function(data){
		    allImgs.moscow = data;
		    callback();
		});
	});

	tasks.push(function(callback){
		$.get("/data/liberty.json", function(data){
		    allImgs.liberty = data;
		    callback();
		});
	});

	tasks.push(function(callback){
		$.get("/data/temple.json", function(data){
		    allImgs.temple = data;
		    callback();
		});
	});

	tasks.push(function(callback){
		$.get("/data/buckingham.json", function(data){
		    allImgs.buckingham = data;
		    callback();
		});
	});

	tasks.push(function(callback){
		$.get("/data/forum.json", function(data){
		    allImgs.forum = data;
		    callback();
		});
	});

	tasks.push(function(callback){
		$.get("/data/niagara.json", function(data){
		    allImgs.niagara = data;
		    callback();
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
