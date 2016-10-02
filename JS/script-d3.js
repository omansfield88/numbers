var firstFrame = d3.select("#first").append("svg")
				.attr("width", "100%")
	            .attr("height", "100%")
	            .attr("class", "svg-frame")
	            .attr("viewBox", "0 0 253 340");

var secondFrame = d3.select("#second").append("svg")
				.attr("width", "100%")
	            .attr("height", "100%")
	            .attr("class", "svg-frame")
	            .attr("viewBox", "0 0 253 340");

var thirdFrame = d3.select("#first").append("svg")
				.attr("width", "100%")
	            .attr("height", "100%")
	            .attr("class", "svg-frame")
	            .attr("viewBox", "0 0 253 340");

var fourthFrame = d3.select("#second").append("svg")
				.attr("width", "100%")
	            .attr("height", "100%")
	            .attr("class", "svg-frame")
	            .attr("viewBox", "0 0 253 340");




function drawBall(frameID, cx, cy, r){	  
	var ballGradDefs = frameID.append("defs");
	var ballGradRadialGrad = ballGradDefs.append("radialGradient")
							.attr("id", "ball-grad")
							.attr("cx", "50%")
							.attr("cy", "50%")
							.attr("r", "100%")
							.attr("fx", "50%")
							.attr("fy", "50%");
	var ballGradStop1 = ballGradRadialGrad.append("stop")
						.attr("offset", "49%")
						.attr("stop-color", "#000000")
						.attr("stop-opacity", "0");
	var ballGradStop2 = ballGradRadialGrad.append("stop")
						.attr("offset", "0%")
						.attr("stop-color", "#000000")
						.attr("stop-opacity", "1");	

	var ball = frameID.append("circle")
				.attr("r", r)
				.attr("cx", cx)
				.attr("cy", cy)
				.attr("fill","url(#ball-grad)");

	ballGradStop1.transition()
		.duration(500)
		.attr("offset", "0%");
};


function drawSlash(frameID, startCoOrdinates, endCoOrdinates){
	var slash = frameID.append("polygon")
				.attr("points", startCoOrdinates)
				.attr("fill", "#ffdf17");

	slash.transition()
		.duration(500)
		.attr("points", endCoOrdinates);
}

function drawPath(frameID, pathCoOrdinates, dashArray, dashOffset){
	var path = frameID.append("path")
				.attr("d", pathCoOrdinates)
				.attr("fill", "none")
				.attr("stroke", "#000000")
				.attr("stroke-width", "1px")
				.attr("stroke-dasharray", dashArray)
				.attr("stroke-dashoffset", dashOffset);

	path.transition()
		.duration(500)
		.attr("stroke-dashoffset", "0");
}

function drawLine(frameID, x1, y1, x2, y2, dashArray, dashOffset){
	var line = frameID.append("line")
				.attr("x1", x1)
				.attr("y1", y1)
				.attr("x2", x2)
				.attr("y2", y2)
				.attr("fill", "none")
				.attr("stroke", "#000000")
				.attr("stroke-width", "1px")
				.attr("stroke-dasharray", dashArray)
				.attr("stroke-dashoffset", dashOffset);

	line.transition()
		.duration(500)
		.attr("stroke-dashoffset", "0");
}



function createOne(frameID){
	drawSlash(frameID,
			"125.8,20 125.1,21.3 168.8,21.4 169.5,20", //coordinates start
			"125.8,20 83.5,95 127.2,95 169.5,20"      //coordinates end
			);

	drawLine(frameID,
			"169.5", //x1
			"20",    //y1
			"169.5", //x2
			"320");   //y2
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
			"830",  //dash array
			"830"); //dash offset
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
			"-147"   //dash offset
			)
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

// <g>
// 		<polygon class="st3" points="117.5,319 181,206.8 137.4,206.8 74,319 		"/>
// 	</g>
// 	<path class="st5" d="M181,206.9l-54.5,0c-51.6,0-93.4-41.8-93.4-93.4S74.9,20,126.5,20s93.4,41.8,93.4,93.4c0,18-5.1,34.8-13.9,49
// 		c0,0-18.1,32-23.5,41.7"/>


createOne(firstFrame, function(){
	setTimeout(function(){
		frameID.remove(); 
	}, 1500)
	
});

createTwo(secondFrame, function(){
	setTimeout(function(){
		frameID.remove();
	}, 500)	
});

createSix(thirdFrame, function(){
	setTimeout(function(){
		frameID.remove(); 
	}, 1500)
	
});

createFive(fourthFrame, function(){
	setTimeout(function(){
		frameID.remove();
	}, 500)	
});


	// var frame = d3.select("#second").append("svg")
	//             .attr("width", "100%")
	//             .attr("height", "100%")
	//             .attr("class", "svg-frame")
	//             .attr("viewBox", "0 0 340 500");


	//   ////////////////
	//  ///SLASH////////
	// ////////////////
	// var slashStart = "177.7,20.4 177.5,20.7 244.4,20.7 244.6,20.4";
	// var slashEnd = "177.7,20.4 80.4,192.6 147.3,192.6 244.6,20.4"; 

	// var slash = frame.append("polygon")
	// 			.attr("points", slashStart)
	// 			.attr("fill", "#ffdf17");

	// slash.transition()
	// 	.duration(500)
	// 	.attr("points", slashEnd);


	//   ////////////////
	//  ///LINE/////////
	// ////////////////
	// var linePath = "M80.6,192.6l83.3,0c79.2,0,143.5,64.2,143.5,143.5s-64.2,143.5-143.5,143.5c-79.2,0-143.5-64.2-143.5-143.5c0-9.8,1-19.4,2.9-28.7"
	// var line = frame.append("path")
	// 			.attr("d", linePath)
	// 			.attr("fill", "none")
	// 			.attr("stroke", "#000000")
	// 			.attr("stroke-width", "1px")
	// 			.attr("stroke-dasharray", "830")
	// 			.attr("stroke-dashoffset", "830");

	// line.transition()
	// 	.duration(500)
	// 	.attr("stroke-dashoffset", "0");







	// var frame = d3.select("#first").append("svg")
 //            .attr("width", "100%")
 //            .attr("height", "100%")
 //            .attr("class", "svg-frame")
 //            .attr("viewBox", "0 0 253 340");

 //  	  ////////////////
	//  ///SLASH////////
	// ////////////////
	// var slashStart = "232.1,21.6 232.8,20.5 189.2,20.5 188.6,21.6";
	// var slashEnd = "63.8,319.5 232.8,20.5 189.2,20.5 20.2,319.5"; 

	// var slash = frame.append("polygon")
	// 			.attr("points", slashStart)
	// 			.attr("fill", "#ffdf17");

	// slash.transition()
	// 	.duration(500)
	// 	.attr("points", slashEnd);


	//   ////////////////
	//  ///LINE/////////
	// ////////////////
	// var linePath = "M80.6,192.6l83.3,0c79.2,0,143.5,64.2,143.5,143.5s-64.2,143.5-143.5,143.5c-79.2,0-143.5-64.2-143.5-143.5c0-9.8,1-19.4,2.9-28.7"
	// var line = frame.append("line")
	// 			.attr("x1", "88.5")
	// 			.attr("y1", "20.5")
	// 			.attr("x2", "232.8")
	// 			.attr("y2", "20.5")
	// 			.attr("fill", "none")
	// 			.attr("stroke", "#000000")
	// 			.attr("stroke-width", "1px")
	// 			.attr("stroke-dasharray", "145")
	// 			.attr("stroke-dashoffset", "-145");

	// line.transition()
	// 	.duration(500)
	// 	.attr("stroke-dashoffset", "0");