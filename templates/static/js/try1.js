//json lookup
var jsontarget = "https://media.githubusercontent.com/media/jebreensa/Project-3_Group1/main/output/sunburst_chart_ref.csv"
// var jsontarget = "/api/v1.0/alldrugs"

// CHANGE THIS TO JSON WHEN SOURCE DATA IS READY
Plotly.d3.csv(jsontarget, function(err, rows){
  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var data1 = [{
	"type": "sunburst",
	"maxdepth": 2,
	"labels": unpack(rows,"reviews_rating"),
	"parents": unpack(rows,"cluster"),
	"values": unpack(rows,"Count"),
	}];
		
var layout = {
  margin: {l: 0, r: 0, b: 0, t: 0},
  width: 500,
  height: 500
};	
		

Plotly.newPlot('plot1', data1, layout)
});

	
//province,city,reviews_rating,cluster,keywords,Count