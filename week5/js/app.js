$.getJSON("barchart-data.json", function (json) {
  // will generate array with ['Monday', 'Tuesday', 'Wednesday']
  var labels = json.map(function(item) {
    return item.timestamp;
  });

  var data = {
    labels: labels
  };

  var ctx = document.getElementById("myChart").getContext("2d");
  ctx.canvas.width = 1000;
  ctx.canvas.height = 800;

  var myChart = new Chart(ctx).Bar(data);
});