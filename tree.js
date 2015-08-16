var yearDatas = [30,100,170,240,310,380,450,520,590,660];
var contentDatas = [{
	"id":1,
	"time":"2013.03",
	"content":"HTML CSS"
},{
	"id":2,
	"time":"2013.05",
	"content":"HTML CSS JS"
},{
	"id":3,
	"time":"2013.07",
	"content":"HTML CSS JS JQuery"
},{
	"id":4,
	"time":"2013.10",
	"content":"HTML CSS JS JQuery,LESS TweenLite"
},{
	"id":5,
	"time":"2013.12",
	"content":"HTML CSS JS JQuery,LESS TweenLite Ajax"
},{
	"id":6,
	"time":"2014.02",
	"content":"HTML CSS JS JQuery,LESS TweenLite Ajax,NodeJS"
},{
	"id":7,
	"time":"2014.05",
	"content":"HTML CSS JS JQuery,LESS TweenLite Ajax,NodeJS Grunt Bower"
},{
	"id":8,
	"time":"2014.09",
	"content":"HTML CSS JS JQuery,LESS TweenLite Ajax,NodeJS Grunt Bower,RequireJs"
},{
	"id":9,
	"time":"2015.06",
	"content":"HTML CSS JS JQuery,LESS TweenLite Ajax,NodeJS Grunt Bower,RequireJs leaflet"
},{
	"id":10,
	"time":"2015.07",
	"content":"To be continued...,Now I am learning,AngularJs/ReactJs..."
}]
var tree = d3.select('.myTrip')
	.append('svg')
	.attr('width',500)
	.attr('height', 780)
	.style('background-color', '#000');


tree.append('rect')
	.style({'fill':'#3c763d','stroke':'#d6e9c6'})
	.attr('width',20)
	.attr('height',700)
	.attr('x', 240)
	.attr('y',20 )
	.attr('ry', 10);

tree.selectAll('circle')
	.data(yearDatas)
	.enter()
	.append('circle')
	.attr('r', 10)
	.attr('cx',250)
	.attr('cy',function  (d,i) {
		return  d;
	})
	.style('stroke', "gray")
    .style('fill', '#610a78')
    .on('mousedown',animateFirstStep)

var x_value,tx_value,flag = false;

function animateFirstStep (d,i) {

	if ($('.content'+i).length>0) return;
	x_value = (i%2) ? parseInt(this.getAttribute('cx')) - 230 : parseInt(this.getAttribute('cx')) + 30;
	tx_value = (i%2) ? parseInt(this.getAttribute('cx')) - 220 : parseInt(this.getAttribute('cx')) + 40;
	tree.append('rect')
		.attr('width', 0)
		.attr('heigth', 0)
		.transition()
		.delay(100)
		.duration(800)
		.attr('width', 200)
		.attr('height', 100)
		.attr('x', x_value)
		.attr('y', d-10)
		.attr('class', 'content'+i)
		.style({'fill':'wheat'})

	tree.append('text')
		.attr('x',tx_value)
		.attr('y', d+10)
		.text(contentDatas[i].time)

	tree.append('text')
	    .attr('x', tx_value)
	    .attr("y", d+10)
	    .selectAll('tspan')
		.data(contentDatas[i].content.split(","))
		.enter()
		.append('tspan')
		.attr('x', tx_value)
		.attr('dy', '1.1em')
	    .style('font-size', '16px')
	    .style('text-anchor', 'start')
	    .style('fill', '#000')
	    .text(function  (t) {
	    	return t;
	    })
}

