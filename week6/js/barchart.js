//author: Orlando Rodriuez
//ICT4510-1 Advanced Web Development and Maintenance
//app.js

//Loads data from the barchart-data.json external file
//js/barchart-data.json

(function () {
	$.ajax({
		url: 'js/barchart-data.json',
			success: function (response) {//response is value returned from json
			var barData = response;
			console.log(barData); //showing response is working

			var options = {
			    //Boolean - Whether we should show a stroke on each segment
			    segmentShowStroke : true,
			
			    //String - The colour of each segment stroke
			    segmentStrokeColor : "#fff",
			
			    //Number - The width of each segment stroke
			    segmentStrokeWidth : 2,
			
			    //Number - The percentage of the chart that we cut out of the middle
			    percentageInnerCutout : 0, // This is 0 for Pie charts
			
			    //Number - Amount of animation steps
			    animationSteps : 100,
			
			    //String - Animation easing effect
			    animationEasing : "easeOutBounce",
			
			    //Boolean - Whether we animate the rotation of the Doughnut
			    animateRotate : true,
			
			    //Boolean - Whether we animate scaling the Doughnut from the centre
			    animateScale : false,
			
			    //String - A legend template
			    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
			
			}
			
			var ctx = document.getElementById("chart-bar").getContext("2d");	  
			var barChart = new Chart(ctx).Bar(barData, options);
/*
			var ctxBar = document.getElementById("chart-bar").getContext("2d");
			var barChart = new Chart(ctxBar, {
			     type: 'bar', 
				 data: barData //datachart.datasets["0"].data
				}
			);
*/
	   }
	});
})();