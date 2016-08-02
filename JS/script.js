console.log("yes")

var frame = Snap("#svg");

var square = frame.rect(150, 150, 50,50)
						.attr({
							fill: "#cccccc",
				  			class: "thing",
							// mask: circle
						})
var circle = frame.circle(150, 150, 60)
				  		.attr({
				  			fill: "#cccccc",
				  			class: "thing",
				  			mask: square
				  		})
