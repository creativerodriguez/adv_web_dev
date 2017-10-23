//author: Orlando Rodriuez
//ICT4510-1 Advanced Web Development and Maintenance
//app.js

//Loads data from the piechart-data.json external file
//js/piechart-data.json

(function () {
	$.ajax({
		url: 'js/piechart-data.json',
			success: function (response) {//response is value returned from json
			var pieData = response
			console.log(pieData); //showing response is working
			
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
			
			var ctx = document.getElementById("chart-pie").getContext("2d");
			var pieChart = new Chart(ctx).Pie(pieData, options);
			document.getElementById("pie_legend").innerHTML = pieChart.generateLegend();  
	
/*
			var ctxPie = document.getElementById("chart-pie").getContext("2d");
			var pieChart = new Chart(ctxPie, {
			     type: 'pie', 
				 data: pieData
				}
			);
*/
	   }
	});

})();





 