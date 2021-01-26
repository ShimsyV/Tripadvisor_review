//json lookup
var jsontarget = "https://media.githubusercontent.com/media/jebreensa/Project-3_Group1/main/output/sunburst_chart_ref.csv"
// var jsontarget = "/api/v1.0/reviewsall"

// CHANGE THIS TO JSON WHEN SOURCE DATA IS READY
Plotly.d3.csv(jsontarget, function(err, rows){
// Plotly.d3.json(jsontarget, function(err, rows){
	function unpack(rows, key) {
	return rows.map(function(row) { return row[key]; });
}


var data1 = [{
	type: 'bar',
	y: unpack(rows, 'city'),
	x: unpack(rows, 'Count'),
	marker: {color: 'rgb(255, 83, 109)'},
	orientation: 'h',
	transforms: [
	{
		type: 'aggregate',
		groups: unpack(rows, 'Count'),
		aggregations: [
		{target: 'X', func: 'sum'},
		]
	}
	]
	}];
  
  var layout1 = {
	  // title: "Comparison 1",
	  autosize: false,
	//   height: 1000,
	  xaxis: { title: "<b>Number of Available Reviews</b>"},
	//   yaxis: { title: "<b>Review Count</b>"}

	};
  
  Plotly.newPlot('plot1', data1, layout1)
    });

Plotly.d3.csv(jsontarget, function(err, rows){
	function unpack(rows, key) {
	return rows.map(function(row) { return row[key]; });
}


var data1 = [{
	type: 'bar',
	y: unpack(rows, 'city'),
	x: unpack(rows, 'Count'),
	marker: {color: 'rgb(255, 83, 109)'},
	orientation: 'h',
	transforms: [
	{
		type: 'aggregate',
		groups: unpack(rows, 'Count'),
		aggregations: [
		{target: 'X', func: 'sum'},
		]
	}
	]
	}];
  
  var layout1 = {
	  title: "Sample of Cities with Available Reviews Within Threshold (10+ Reviews)",
	  autosize: false,
	//   height: 1000,
	  xaxis: { title: "<b>Number of Available Reviews</b>"},
	//   yaxis: { title: "<b>Review Count</b>"}

	};
  
  Plotly.newPlot('plot1', data1, layout1)
    });

Plotly.d3.csv(jsontarget, function(err, rows){
	function unpack(rows, key) {
	return rows.map(function(row) { return row[key]; });
}


var data2 = [{
	type: 'bar',
	y: unpack(rows, 'reviews_rating'),
	x: unpack(rows, 'Count'),
	// marker: {color: 'rgb(255, 83, 109)'},
	orientation: 'h',
	transforms: [
	{
		type: 'aggregate',
		groups: unpack(rows, 'Count'),
		aggregations: [
		{target: 'X', func: 'count'},
		]
	}
	]
	}];
	
	var layout2 = {
		title: "Count of Review Ratings Within Threshold (10+ Reviews)",
		autosize: true,
	//   height: 1000,
		xaxis: { title: "<b>Number of Available Reviews</b>"},
	//   yaxis: { title: "<b>Review Count</b>"}

	};
	
	Plotly.newPlot('plot2', data2, layout2)
	});



//province,city,reviews_rating,cluster,keywords,Count