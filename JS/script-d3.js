//Draw frames

var dividerOne = d3.select("#divider-one").append("svg")
				.attr("width", "100%")
	            .attr("height", "100%")
	            .attr("class", "svg-frame")
	            .attr("viewBox", "-40 0 100 340");

var dividerTwo = d3.select("#divider-two").append("svg")
				.attr("width", "100%")
	            .attr("height", "100%")
	            .attr("class", "svg-frame")
	            .attr("viewBox", "-40 0 100 340");

var firstFrame = d3.select("#first-frame").append("svg")
				.attr("width", "100%")
	            .attr("height", "100%")
	            .attr("class", "svg-frame")
	            .attr("viewBox", "0 0 253 340");

var secondFrame = d3.select("#second-frame").append("svg")
				.attr("width", "100%")
	            .attr("height", "100%")
	            .attr("class", "svg-frame")
	            .attr("viewBox", "0 0 253 340");

var thirdFrame = d3.select("#third-frame").append("svg")
				.attr("width", "100%")
	            .attr("height", "100%")
	            .attr("class", "svg-frame")
	            .attr("viewBox", "0 0 253 340");

var fourthFrame = d3.select("#fourth-frame").append("svg")
				.attr("width", "100%")
	            .attr("height", "100%")
	            .attr("class", "svg-frame")
	            .attr("viewBox", "0 0 253 340");

var fifthFrame = d3.select("#fifth-frame").append("svg")
				.attr("width", "100%")
	            .attr("height", "100%")
	            .attr("class", "svg-frame")
	            .attr("viewBox", "0 0 253 340");

var sixthFrame = d3.select("#sixth-frame").append("svg")
				.attr("width", "100%")
	            .attr("height", "100%")
	            .attr("class", "svg-frame")
	            .attr("viewBox", "0 0 253 340");





//Colours//

var strokeWeight = "3px";

// function defGoldGrad(frameID){

// 	var goldGradDefs = frameID.append("defs");
// 	var goldGrad = goldGradDefs.append("linearGradient")
// 					.attr("id", "gold-grad");
// 	var goldGradStop1 = goldGrad.append("stop")
// 					.attr("offset", "5%")
// 					.attr("stop-color", "#EDDC94");
// 	var goldGradStop2 = goldGrad.append("stop")
// 					.attr("offset", "95%")
// 					.attr("stop-color", "#B68634");
// }

// setTimeout(function(){
// 	firstFrame.selectAll("polygon, path, line, circle, defs").transition()
// 												.duration(200)
// 												.attr("fill", "#ffffff");
// }, 2000)



var colours = [

	{
		backgroundColour: "#ffa6a6",
		digitColour: "#ffff99"
	},
	{
		backgroundColour: "#ff5a5a",
		digitColour: "#8dffaa"
	},
	{
		backgroundColour: "#f54a4a",
		digitColour: "#123d1d"
	},
	{
		backgroundColour: "#e84646",
		digitColour: "#b1f2dc"
	},
	{
		backgroundColour: "#cd5454",
		digitColour: "#ffc82e"
	},
	{
		backgroundColour: "#ce2c2c",
		digitColour: "#2d2f58"
	},
	{
		backgroundColour: "#c12929",
		digitColour: "#97d493"
	},
	{
		backgroundColour: "#e81818",
		digitColour: "#fffdd7"
	},
	{
		backgroundColour: "#b12020",
		digitColour: "#fdfd7c"
	},
	{
		backgroundColour: "#d43333",
		digitColour: "#fdb9ca"
	},



	{
		backgroundColour: "#85adff",
		digitColour: "#ffe078"
	},
	{
		backgroundColour: "#4c80d3",
		digitColour: "#eca690"
	},
	{
		backgroundColour: "#428ad1",
		digitColour: "#ffc82e"
	},
	{
		backgroundColour: "#75c2d3",
		digitColour: "#866c3d"
	},
	{
		backgroundColour: "#4aa7ed",
		digitColour: "#ffbdb0"
	},
	{
		backgroundColour: "#82e3f9",
		digitColour: "#f25d3f"
	},
	{
		backgroundColour: "#575979",
		digitColour: "#d1ae95"
	},
	{
		backgroundColour: "#2d2f58",
		digitColour: "#b7ae69"
	},
	{
		backgroundColour: "#7ec5e8",
		digitColour: "#fdff91"
	},
	{
		backgroundColour: "#a2d8ff",
		digitColour: "#ff7155"
	},




	{
		backgroundColour: "#b1f2dc",
		digitColour: "#ff876e"
	},
	{
		backgroundColour: "#c5ed78",
		digitColour: "#a26ef2"
	},
	{
		backgroundColour: "#83db6e",
		digitColour: "#5a68b2"
	},
	{
		backgroundColour: "#aae032",
		digitColour: "#f376a3"
	},
	{
		backgroundColour: "#bbefaf",
		digitColour: "#6fa1a2"
	},
	{
		backgroundColour: "#53a05e",
		digitColour: "#f4d1a9"
	},
	{
		backgroundColour: "#84adaa",
		digitColour: "#fae9b2"
	},
	{
		backgroundColour: "#488c9b",
		digitColour: "#e8d260"
	},
	{
		backgroundColour: "#84ad8d",
		digitColour: "#ecfce7"
	},
	{
		backgroundColour: "#597d57",
		digitColour: "#eac1cf"
	},




	{
		backgroundColour: "#ffe67a",
		digitColour: "#ff7a93"
	},
	{
		backgroundColour: "#f2edbd",
		digitColour: "#7dbce5"
	},
	{
		backgroundColour: "#fcfc5b",
		digitColour: "#7e7e7e"
	},
	{
		backgroundColour: "#fceb4c",
		digitColour: "#6175ff"
	},
	{
		backgroundColour: "#ffd522",
		digitColour: "#ff8c46"
	},
	{
		backgroundColour: "#ffdd4e",
		digitColour: "#0086ac"
	},
	{
		backgroundColour: "#f9e02b",
		digitColour: "#f9792b"
	},
	{
		backgroundColour: "#ffc82e",
		digitColour: "#2e65ff"
	},
	{
		backgroundColour: "#fdff91",
		digitColour: "#265e28"
	},
	{
		backgroundColour: "#fbff7b",
		digitColour: "#ff7f7b"
	},


	{
		backgroundColour: "#ffe092",
		digitColour: "#6f8f5e"
	},
	{
		backgroundColour: "#ffa143",
		digitColour: "#87ffe1"
	},
	{
		backgroundColour: "#f7d92b",
		digitColour: "#4c62fa"
	},
	{
		backgroundColour: "#ffb666",
		digitColour: "#865928"
	},
	{
		backgroundColour: "#f68b1f",
		digitColour: "#f7df9d"
	},
	{
		backgroundColour: "#f9bd16",
		digitColour: "#424242"
	},
	{
		backgroundColour: "#f58337",
		digitColour: "#86ffc6"
	},
	{
		backgroundColour: "#ffdbb3",
		digitColour: "#ffffff"
	},
	{
		backgroundColour: "#dbb352",
		digitColour: "#eeffac"
	},
	{
		backgroundColour: "#ffd966",
		digitColour: "#a892c2"
	},


	{
		backgroundColour: "#f9c2c2",
		digitColour: "#ff5454"
	},
	{
		backgroundColour: "#9999ff",
		digitColour: "#fff370"
	},
	{
		backgroundColour: "#fd92ad",
		digitColour: "#a8fdaa"
	},
	{
		backgroundColour: "#c297c2",
		digitColour: "#f5ea75"
	},
	{
		backgroundColour: "#e28fc8",
		digitColour: "#b7edc8"
	},
	{
		backgroundColour: "#ffb983",
		digitColour: "#676bbd"
	},
	{
		backgroundColour: "#d7d4cd",
		digitColour: "#535464"
	},
	{
		backgroundColour: "#bcbcbc",
		digitColour: "#dbf5ca"
	},
	{
		backgroundColour: "#000000",
		digitColour: "#ffd522"
	},
	{
		backgroundColour: "#ffffff",
		digitColour: "#ff5a5a"
	},



]

function changeColours(frame, digitColour, backgroundColour) {
	frame.selectAll("polygon, circle").transition()
									.duration(200)
									.attr("fill", "" + digitColour + "");
	frame.selectAll("path, line").transition()
									.duration(200)
									.attr("stroke", "" + digitColour + "");

	document.getElementById("page-container").style.background = "" + backgroundColour + "";
}



// var i = 0;

// function colourChangeLoop() {
// 	setTimeout(function (){
// 		console.log("ues");
// 		changeColours(firstFrame, colours[i].digitColour, colours[i].backgroundColour);
// 		i++;
// 		if (i < colours.length){
// 			colourChangeLoop()
// 		}
// 	}, 1000)
// }
// colourChangeLoop();



//Define default colour
//Get random colour from colours array
//set currentColour to that value in the array so it can be accessed outside of the function

var currentColour = "#8dffaa";

function getNewColour(){
	var currentColourIndex = Math.floor(Math.random() * colours.length) + 0;
	changeColours(firstFrame, colours[currentColourIndex].digitColour, colours[currentColourIndex].backgroundColour);
	changeColours(secondFrame, colours[currentColourIndex].digitColour, colours[currentColourIndex].backgroundColour);
	changeColours(thirdFrame, colours[currentColourIndex].digitColour, colours[currentColourIndex].backgroundColour);
	changeColours(fourthFrame, colours[currentColourIndex].digitColour, colours[currentColourIndex].backgroundColour);
	changeColours(fifthFrame, colours[currentColourIndex].digitColour, colours[currentColourIndex].backgroundColour);
	changeColours(sixthFrame, colours[currentColourIndex].digitColour, colours[currentColourIndex].backgroundColour);

	changeColours(dividerOne, colours[currentColourIndex].digitColour, colours[currentColourIndex].backgroundColour);
	changeColours(dividerTwo, colours[currentColourIndex].digitColour, colours[currentColourIndex].backgroundColour);

	currentColour = colours[currentColourIndex].digitColour;
}



setInterval(function(){
	getNewColour();
},1000)




//Drawing code - SVG Shapes
var theDuration = 500;

function drawBall(frameID, cx, cy, r){

	// var ballGradDefs = frameID.append("defs");
	// var ballGradRadialGrad = ballGradDefs.append("radialGradient")
	// 						.attr("id", "ball-grad")
	// 						.attr("cx", "50%")
	// 						.attr("cy", "50%")
	// 						.attr("r", "100%")
	// 						.attr("fx", "50%")
	// 						.attr("fy", "50%");
	// var ballGradStop1 = ballGradRadialGrad.append("stop")
	// 					.attr("offset", "49%")
	// 					.attr("stop-color", currentColour)
	// 					.attr("stop-opacity", "0");
	// var ballGradStop2 = ballGradRadialGrad.append("stop")
	// 					.attr("offset", "0%")
	// 					.attr("stop-color", currentColour)
	// 					.attr("stop-opacity", "1");

	var ball = frameID.append("circle")
				.attr("r", 0)
				.attr("cx", cx)
				.attr("cy", cy)
				.attr("fill", currentColour)
				// .attr("fill","url(#ball-grad)")
				.attr("opacity", 1);

	ball.transition()
		.duration(theDuration)
		.attr("r", r);

};


function drawSlash(frameID, startCoOrdinates, endCoOrdinates){
	// defGoldGrad(frameID);

	var slash = frameID.append("polygon")
				.attr("points", startCoOrdinates)
				.attr("fill", currentColour)
				.attr("class", "slash")
				.attr("opacity", 1);

	slash.transition()
		.duration(theDuration)
		.attr("points", endCoOrdinates);
}

function drawPath(frameID, pathCoOrdinates, dashArray, dashOffset){
	var path = frameID.append("path")
				.attr("d", pathCoOrdinates)
				.attr("fill", "none")
				.attr("stroke", currentColour)
				.attr("stroke-width", strokeWeight)
				.attr("stroke-dasharray", dashArray)
				.attr("stroke-dashoffset", dashOffset)
				.attr("opacity", 1);

	path.transition()
		.duration(theDuration)
		.attr("stroke-dashoffset", "0");
}

function drawLine(frameID, x1, y1, x2, y2, dashArray, dashOffset){
	var line = frameID.append("line")
				.attr("x1", x1)
				.attr("y1", y1)
				.attr("x2", x2)
				.attr("y2", y2)
				.attr("fill", "none")
				.attr("stroke", currentColour)
				.attr("stroke-width", strokeWeight)
				.attr("stroke-dasharray", dashArray)
				.attr("stroke-dashoffset", dashOffset)
				.attr("opacity", 1);

	line.transition()
		.duration(theDuration)
		.attr("stroke-dashoffset", "0");
}



//Drawing code - Numbers

function createDivider(frameID){
	drawPath(frameID,
			"M10,57.9c0,1.9,0,37.4,0,37.4",
			"37",
			"37");
	drawPath(frameID,
			"M10,244.8c0,1.9,0,37.4,0,37.4",
			"37",
			"-37");
}

createDivider(dividerOne);
createDivider(dividerTwo);

function createZero(frameID){
	drawPath(frameID, 
			"M126.5,20c51.6,0,93.4,41.8,93.4,93.4s-41.8,93.4-93.4,93.4S33.1,165,33.1,113.4S74.9,20,126.5,20", //path coordinates
			"590",  //dash array
			"590"); //dash offset
}

function createOne(frameID){
	drawSlash(frameID,
			"82.8,20 82.2,21.1 126.5,21.1 126.5,20", //coordinates start
			"82.8, 20 40.5  ,95 84.2  ,95 126.5 ,20"      //coordinates end
			);

	drawLine(frameID,
			"126.5", //x1
			"20",    //y1
			"126.5", //x2
			"320",   //y2
			"300",   //dash array
			"300");  //dash offset
}

function createTwo(frameID){
	drawBall(frameID, 
			"95.1", //cx
			"292",  //cy
			"28");   //r

	drawSlash(frameID, 
			"159.4,245.3 159.4,245.4 203.1,245.4 203.1,245.3",  //coordinates start
			"159.4,245.3 117.2,320 160.9,320 203.1,245.3"); //coordinates end

	drawPath(frameID, 
			"M35.2,133c-1.2-6.1-1.9-12.3-1.9-18.8c0-51.4,41.7-93.2,93.2-93.2s93.2,41.7,93.2,93.2 c0,17.1-4.6,33.1-12.6,46.9c0,0-89.8,158.9-89.8,158.9", //path coordinates
			"550",  //dash array
			"550"); //dash offset
}

function createThree(frameID){
	drawBall(frameID, 
			"81.261", //cx
			"48.508",  //cy
			"28.008");   //r
	
	drawSlash(frameID, 
			"135.3,20.5 135,21 178.6,21 178.9,20.5",  //coordinates start
			"135.3,20.5 71.9,132.7 115.5,132.7 178.9,20.5"); //coordinates end

	drawPath(frameID, 
			"M71.9,132.6l54.5,0c51.6,0,93.4,41.8,93.4,93.4s-41.8,93.4-93.4,93.4s-93.4-41.8-93.4-93.4c0-6.4,0.6-12.6,1.9-18.7", //path coordinates
			"830",  //dash array
			"830"); //dash offset
}

function createFour(frameID){
	drawBall(frameID, 
			"179", //cx
			"291.5",  //cy
			"28");   //r
	
	drawSlash(frameID, 
			"168.1,20.5 167.8,21.1 211.3,21.1 211.6,20.5",  //coordinates start
			"168.1,20.5 41.4,244.7 84.9,244.7 211.6,20.5"); //coordinates end

	drawLine(frameID,
				"211.6", //x1
				"20.5",    //y1
				"211.6", //x2
				"319.5",   //y2
				"300",   //dash array
				"300")   //dash offset
}


function createFive(frameID){
	drawBall(frameID, 
			"200.1", //cx
			"48.6",  //cy
			"28");   //r

	drawSlash(frameID, 
			"135.3,20.5 135,21 178.6,21 178.9,20.5",  //coordinates start
			"135.3,20.5 71.9,132.7 115.5,132.7 178.9,20.5"); //coordinates end

	drawPath(frameID, 
			"M71.9,132.6l54.5,0c51.6,0,93.4,41.8,93.4,93.4s-41.8,93.4-93.4,93.4s-93.4-41.8-93.4-93.4c0-6.4,0.6-12.6,1.9-18.7", //path coordinates
			"520",  //dash array
			"520"); //dash offset
}



function createSix(frameID){
	drawSlash(frameID, 
			"135.3,20.5 135,21 178.6,21 178.9,20.5",  //coordinates start
			"135.3,20.5 71.9,132.7 115.5,132.7 178.9,20.5"); //coordinates end

	drawPath(frameID, 
			"M71.9,132.6l54.5,0c51.6,0,93.4,41.8,93.4,93.4c0,51.6-41.8,93.4-93.4,93.4s-93.4-41.8-93.4-93.4 c0-18,5.1-34.8,13.9-49c0,0,18.1-32,23.5-41.7", //path coordinates
			"600",  //dash array
			"600"); //dash offset
}


function createSeven(frameID){
	drawBall(frameID, 
			"88.5", //cx
			"131.1",  //cy
			"28");   //r

	drawSlash(frameID, 
			"232,21.8 232.8,20.5 189.2,20.5 188.5,21.8",  //coordinates start
			"63.8,319.5 232.8,20.5 189.2,20.5 20.2,319.5"); //coordinates end

	drawLine(frameID,
			"88.5",  //x1
			"20.5",  //y1
			"232.8", //x2
			"20.5",  //y2
			"147",   //dash array
			"-147");   //dash offset			
}

function createEight(frameID){
	drawBall(frameID, 
			"126.5", //cx
			"48.5",  //cy
			"28");   //r

	drawPath(frameID, 
			"M126.5,132.6c51.6,0,93.4,41.8,93.4,93.4s-41.8,93.4-93.4,93.4s-93.4-41.8-93.4-93.4S74.9,132.6,126.5,132.6", //path coordinates
			"590",  //dash array
			"590"); //dash offset
}


function createNine(frameID){	
	drawSlash(frameID, 
			"180.2,208.2 181,206.8 137.4,206.8 136.5,208.3",  //coordinates start
			"117.5,319 181,206.8 137.4,206.8 74,319"); //coordinates end

	drawPath(frameID, 
				"M181,206.9l-54.5,0c-51.6,0-93.4-41.8-93.4-93.4S74.9,20,126.5,20s93.4,41.8,93.4,93.4c0,18-5.1,34.8-13.9,49	c0,0-18.1,32-23.5,41.7", //path coordinates
				"600",  //dash array
				"600"); //dash offset
}


//Remove all SVG shapes after a certain time
function removeShapes(frameID){
	frameID.selectAll("polygon, path, line, circle, defs").transition()
												.duration(200)
												.attr("opacity", "0");

	setTimeout(function(){
		frameID.selectAll("polygon, path, line, circle, defs").remove();
	}, 200);
}




//Set page background graident
// function setBG(){
// 	var theDate = new Date();
//     var hours = theDate.getHours();

//     if (hours >= 06 && hours < 08){
//     	document.getElementById('page-container').className = "sunrise";    	
//     }
//     else if (hours >= 08 && hours < 18){
//     	document.getElementById('page-container').className = "day";
//     }
//     else if (hours >= 18 && hours < 20) {
//     	document.getElementById('page-container').className = "sunset";
//     }
//     else {
//     	document.getElementById('page-container').className = "night";
//     }
// }

// setBG();


//Create object outside of the getTime function so it can be accessed outside of the function

var currentTime = {};
// var currentTimeHourOne,
// 	currentTimeHourTwo,
// 	currentTimeMinuteOne,
// 	currentTimeMinuteTwo,
// 	currentTimeSecondTwo,
// 	currentTimeSecondOne;

function getTime(){
    var theDate = new Date();

    var hours = theDate.getHours();
    var minutes = theDate.getMinutes();
    var seconds = theDate.getSeconds();
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    //Because one second will return as 1 rather than 01,
    //need to add a 0 to any second less than 10,
    //or there'll only be 1 digit to push to the array
    function checkTime(i){
        if (i < 10){
            i = "0" + i;
            return i;
        } else{
            return i;
        }
    }

    //turn interger into array with two values. 21 --> [2,1]
    var hours = hours.toString().split("").map(Number);
    var minutes = minutes.toString().split("").map(Number);
    var seconds = seconds.toString().split("").map(Number);

    //store split intergers from array into the vars which you'll access later
    // currentTimeHourOne = hours[0];
    // currentTimeHourTwo = hours[1];
    // currentTimeMinuteOne = minutes[0];
    // currentTimeMinuteTwo = minutes[1];
    // currentTimeSecondOne = seconds[0];
    // currentTimeSecondTwo = seconds[1];

    // //store split intergers from array into the object which you'll access later (outside of the scope of this function)
    currentTime.hourOne = hours[0];
    currentTime.hourTwo = hours[1];
    currentTime.minuteOne = minutes[0];
    currentTime.minuteTwo = minutes[1];
    currentTime.secondOne = seconds[0];
    currentTime.secondTwo = seconds[1];
};






//Draw SVG shapes depending on what number is present
//num becomes currentNum from refresh()
function drawNumber(num, frameID){
	if (num == 0){
		createZero(frameID)
	}
	else if (num == 1){
		createOne(frameID)
	}
	else if (num == 2){
		createTwo(frameID)
	}
	else if (num == 3){
		createThree(frameID)
	}
	else if (num == 4){
		createFour(frameID)
	}
	else if (num == 5){
		createFive(frameID)
	}
	else if (num == 6){
		createSix(frameID)
	}
	else if (num == 7){
		createSeven(frameID)
	}
	else if (num == 8){
		createEight(frameID)
	}
	else if (num == 9){
		createNine(frameID)
	}
}



//Get present time, store the number you want in a var, draw the number. 
//Every second, get the present time, store the number you want to display in currentNum.
//If currentNum is the same as previousNum not enough time has passed,
//so do nothing. Leave the last drawn shape where it is.
//If currentNum is no longer the same as previousNum, that means a second,
//minute or hour has passed and the last drawn shape needs to be removed and the new one drawn.
//removeShapes() takes 200ms before it .removes() the SVG shapes, so a 201ms timeOut()
//is needed to ensure the new shapes are drawn AFTER removeShapes() is done.
//Finally, set previousNum to the value of currentNum so the next second when the
//if statement checks again, the two values are the same and no drawing code will be
//executed until the currentNum changes again.
function refreshFirst(){	
	getTime();
	var previousNum = currentTime.hourOne;
	drawNumber(previousNum, firstFrame);

	setInterval(function(){	
		getTime();
		var currentNum = currentTime.hourOne;
		if(currentNum !== previousNum){			
			removeShapes(firstFrame); //takes 200ms to remove
			setTimeout(function(){
				drawNumber(currentNum, firstFrame);			
			}, 201)
		}
		previousNum = currentNum;				
	}, 1000)
}
refreshFirst();

function refreshSecond(){	
	getTime();
	var previousNum = currentTime.hourTwo;
	drawNumber(previousNum, secondFrame);

	setInterval(function(){	
		getTime();
		var currentNum = currentTime.hourTwo;
		if(currentNum !== previousNum){			
			removeShapes(secondFrame); //takes 200ms to remove
			setTimeout(function(){
				drawNumber(currentNum, secondFrame);			
			}, 201)
		}
		previousNum = currentNum;				
	}, 1000)
}
refreshSecond();

function refreshThird(){	
	getTime();
	var previousNum = currentTime.minuteOne;
	drawNumber(previousNum, thirdFrame);

	setInterval(function(){	
		getTime();
		var currentNum = currentTime.minuteOne;
		if(currentNum !== previousNum){			
			removeShapes(thirdFrame); //takes 200ms to remove
			setTimeout(function(){
				drawNumber(currentNum, thirdFrame);			
			}, 201)
		}
		previousNum = currentNum;				
	}, 1000)
}
refreshThird();

function refreshFourth(){	
	getTime();
	var previousNum = currentTime.minuteTwo;
	drawNumber(previousNum, fourthFrame);

	setInterval(function(){	
		getTime();
		var currentNum = currentTime.minuteTwo;
		if(currentNum !== previousNum){			
			removeShapes(fourthFrame); //takes 200ms to remove
			setTimeout(function(){
				drawNumber(currentNum, fourthFrame);			
			}, 201)
		}
		previousNum = currentNum;				
	}, 1000)
}
refreshFourth();

function refreshFifth(){	
	getTime();
	var previousNum = currentTime.secondOne;
	drawNumber(previousNum, fifthFrame);

	setInterval(function(){	
		getTime();
		var currentNum = currentTime.secondOne;
		if(currentNum !== previousNum){			
			removeShapes(fifthFrame); //takes 200ms to remove
			setTimeout(function(){
				drawNumber(currentNum, fifthFrame);			
			}, 201)
		}
		previousNum = currentNum;				
	}, 1000)
}
refreshFifth();

function refreshSixth(){	
	getTime();
	var previousNum = currentTime.secondTwo;
	drawNumber(previousNum, sixthFrame);

	setInterval(function(){	
		getTime();
		var currentNum = currentTime.secondTwo;
		if(currentNum !== previousNum){			
			removeShapes(sixthFrame); //takes 200ms to remove
			setTimeout(function(){
				drawNumber(currentNum, sixthFrame);			
			}, 201)
		}
		previousNum = currentNum;				
	}, 1000)
}
refreshSixth();








//FIRST FRAME
// setInterval(function(){
	
// 	createNine(firstFrame);

// 	setTimeout(function(){		
// 		removeShapes(firstFrame);
// 	},700)	

// }, 1000);

// //SECOND FRAME
// setInterval(function(){
	
// 	createOne(secondFrame);

// 	setTimeout(function(){		
// 		removeShapes(secondFrame);
// 	},700)

// }, 1000);

// //THIRD FRAME
// setInterval(function(){
	
// 	createThree(thirdFrame);

// 	setTimeout(function(){		
// 		removeShapes(thirdFrame);
// 	},700)

// }, 1000);

// //FOURTH FRAME
// setInterval(function(){
	
// 	createZero(fourthFrame);

// 	setTimeout(function(){		
// 		removeShapes(fourthFrame);
// 	},700)

// }, 1000);

