var frame = d3.select("#five").append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("class", "svg-frame")
            .attr("viewBox", "0 0 340 500");


  ////////////////
 ///SLASH////////
////////////////
var slashStart = "177.7,20.4 177.5,20.7 244.4,20.7 244.6,20.4";
var slashEnd = "177.7,20.4 80.4,192.6 147.3,192.6 244.6,20.4"; 

var slash = frame.append("polygon")
			.attr("points", slashStart)
			.attr("fill", "#ffdf17");

slash.transition()
	.duration(500)
	.attr("points", slashEnd);


  ////////////////
 ///LINE/////////
////////////////
var linePath = "M80.6,192.6l83.3,0c79.2,0,143.5,64.2,143.5,143.5s-64.2,143.5-143.5,143.5c-79.2,0-143.5-64.2-143.5-143.5c0-9.8,1-19.4,2.9-28.7"
var line = frame.append("path")
			.attr("d", linePath)
			.attr("fill", "none")
			.attr("stroke", "#000000")
			.attr("stroke-width", "1px")
			.attr("stroke-dasharray", "830")
			.attr("stroke-dashoffset", "830");

line.transition()
	.duration(500)
	.attr("stroke-dashoffset", "0");


  ////////////////
 ///BALL/////////
////////////////
var ballGradDefs = frame.append("defs");
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

var ball = frame.append("circle")
			.attr("r", "43")
			.attr("cx", "277.1")
			.attr("cy", "63.5")
			.attr("fill","url(#ball-grad)");

ballGradStop1.transition()
	.duration(500)
	.attr("offset", "30%");



//////////////////////////////////////////////////////////////////////////////

var frame = d3.select("#seven").append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("class", "svg-frame")
            .attr("viewBox", "0 0 340 500");
