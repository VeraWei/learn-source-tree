var sampleSVG = d3.select('.viz1')
	.append('svg')
	.attr('width', 100)
	.attr('height', 100)

sampleSVG.append('circle')
	.style('stroke', "gray")
    .style('fill', 'white')
    .attr('r', 40)
    .attr('cx', 50)
    .attr('cy', 50)	
    .on('mouseover',function  () {
    	d3.select(this).style('fill', "aliceBlue");
    })
    .on('mouseout',function  () {
    	d3.select(this).style('fill', "white");
    })
    .on('mousedown',animateFirstStep);
function animateFirstStep () {
	d3.select(this)
		.transition()
		.delay(0)
		.duration(1000)
		.attr('r', 10)
		.each("end",animateSecondStep);
}
function animateSecondStep () {
	d3.select(this)
		.transition()
		.duration(1000)
		.attr('r', 40)
}
var margin = { top: 40, right: 40, bottom: 40, left: 40 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var y = d3.scale.ordinal()
	.domain(d3.range(30))
	.rangePoints([0,height]);

var z = d3.scale.linear()
	.domain([10,0])
	.range(["hsl(62,100%,90%)","hsl(228,30%,20%)"])
	.interpolate(d3.interpolateHcl)

var svg = d3.select('.snake').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

svg.selectAll('circle')
	.data(y.domain())
	.enter().append("circle")
	.attr('r', 25)
	.attr('cx', 0)
	.attr('cy', y)
	.style('fill', function  (d) {
		return z(Math.abs(d%20-10));
	})
	.transition()
	.duration(2500)
	.delay(function  (d) {
		return d * 40;
	})
	.each(slide);

function slide () {
	var circle = d3.select(this);
	(function repeat () {
		circle = circle.transition()
		.attr('cx', width)
		.transition()
		.attr('cx', 0)
		.each('end',repeat);
	})();

}

var dataset = [],
	i = 0;
for(i = 0; i<5;i++){
	dataset.push(Math.round(Math.random()*100));
}

var sampleSVG2 = d3.select('.viz2')
	.append("svg")
	.attr('width', 400)
	.attr('height', 75);

sampleSVG2.selectAll('circle')
	.data(dataset)
	.enter().append("circle")
	.style('stroke', "gray")
	.style('fill', "white")
	.attr('width', 75)
	.attr('height', 40)
	.attr('x', function  (d,i) {
		return i *80
	})
	.attr("y",20);



