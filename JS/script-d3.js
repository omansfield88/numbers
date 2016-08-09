var width = 1000;
var height = 1000;

var frame = d3.select(".five").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "svg-frame")
            .attr("viewBox", "0 0 1000 1000");

//////////////////////////////////////////////////////////////////////////////////

  ////////////////
 ///SLASH////////
////////////////
var slashStart = "241.4,0 241.3,0.2 343.1,0.2 343.2,0";
var slashEnd = "241.4,0 93.2,262.3 195,262.3 343.2,0"; 

var slash = frame.append("polygon")
			.attr("points", slashStart)
			.attr("fill", "#000000");

slash.transition()
	.duration(500)
	.attr("points", slashEnd);


  ////////////////
 ///LINE/////////
////////////////
var linePath = "M93.2,262l127.3,0c120.6,0,218.3,97.8,218.3,218.3s-97.8,218.3-218.3,218.3C99.9,698.7,2.2,600.9,2.2,480.3	c0-15,1.5-29.6,4.4-43.7"
var line = frame.append("path")
			.attr("d", linePath)
			.attr("fill", "none")
			.attr("stroke", "#000000")
			.attr("stroke-width", "2px")
			.attr("stroke-dasharray", "1200")
			.attr("stroke-dashoffset", "1200");

line.transition()
	.duration(500)
	.attr("stroke-dashoffset", "0");


  ////////////////
 ///BALL/////////
////////////////
var ball = frame.append("circle")
			.attr("r", "0")
			.attr("cx", "392.7")
			.attr("cy", "65.6")
			.attr("fill", "#000000");

ball.transition()
	.duration(500)
	.attr("r", "65.4");