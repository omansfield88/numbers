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
				.attr("stroke-dasharray", "515")
				.attr("stroke-dashoffset", "515");

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
	// drawSlash(frameID,
	// 		"125.8",
	// 		"20 83.5",
	// 		"95 127.2",
	// 		"95 169.5",
	// 		"20"
	// 		);
	drawLine(frameID,
			"169.5", //x1
			"20",    //y1
			"169.5", //x2
			"320");   //y2
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


createOne(firstFrame, function(){
	setTimeout(function(){
		frameID.remove(); 
	}, 1500)
	
});

createFive(secondFrame, function(){
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