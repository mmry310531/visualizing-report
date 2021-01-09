(function(d3){
	'use strict';

	var data106;
	//var keys = ["新北市","臺北市","桃園市","臺中市","臺南市","高雄市","宜蘭縣","新竹縣","苗栗縣","彰化縣","南投縣","雲林縣","嘉義縣","屏東縣","臺東縣","花蓮縣","澎湖縣","基隆市","新竹市","嘉義市","金門縣","連江縣"];
	var subkeys = ["boy", "girl"];
	var subkeys2 = ["girl","boy"];
	var stack_data;
	var sex = "boy";
	var temp;

	var line_key = ["106","107","108"]
	//console.log(subkeys)
	
	

	//const colName = ["taipai", "taichung"];
	var width = 800;
	var pie_width = 600;
	var height = 400;

	var 新北市= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 臺北市= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 桃園市= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 臺中市= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 臺南市= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 高雄市= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 宜蘭縣= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 新竹縣= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 苗栗縣= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 彰化縣= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 南投縣= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 雲林縣= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 嘉義縣= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 屏東縣= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 臺東縣= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 花蓮縣= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 澎湖縣= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 基隆市= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 新竹市= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 嘉義市= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 金門縣= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];
	var 連江縣= [{time: "106", boy: 0, girl:0, populations:0},
				  {time: "107", boy: 0, girl:0, populations:0},
				  {time: "108", boy: 0, girl:0, populations:0}];

	var red = d3.rgb(255,0,0);
	var blue = d3.rgb(0,0,255);


	var color = d3.scaleOrdinal()
    .domain(subkeys)
    .range(["#0080FF","#FF60AF"])
    



	red = d3.hsl(red)
	blue = d3.hsl(blue)
	var year = 106;

	const margin = { top:20, right:30, bottom: 50, left:50};
	var innerWidth = width - margin.left - margin.right;
	var innerHight = height - margin.top - margin.bottom;


	var x = d3.scaleBand()
			  .rangeRound([0, innerWidth])
			  .paddingInner(0.1)

	var y = d3.scaleLinear()
    		  .domain([0, 100000])
   			  .range([ innerHight, 0 ]);
	
	const svg = d3.select(".mainChart").append("svg")
								 .attr('width',width)
								 .attr('height',height)
								 .append('g')
								 .attr('transform',`translate(${margin.left},${margin.top})`);

	const svg2 = d3.select(".ageChart").append("svg")
								 .attr('width',width)
								 .attr('height',height)
								 .append('g')
								 .attr('transform',`translate(${margin.left},${margin.top})`);

	const svg3 = d3.select(".lineChart").append("svg")
								 .attr('width',width)
								 .attr('height',height)
								 .append('g')
								 .attr('transform',`translate(${margin.left},${margin.top})`);

	


	var group = [
		{country : "新北市", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "臺北市", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "桃園市", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "臺中市", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "臺南市", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "高雄市", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "宜蘭縣", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "新竹縣", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "苗栗縣", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "彰化縣", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "南投縣", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "雲林縣", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "嘉義縣", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "屏東縣", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "臺東縣", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "花蓮縣", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "澎湖縣", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "基隆市", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "新竹市", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "嘉義市", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "金門縣", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
		{country : "連江縣", boy : 0, girl : 0, total: 0, ratio: 0, populations: 0, birth_ratio: 0},
	];

	function update(data, keys,sortby) {

	  data = [...data];
	  var sortFn;
	  var xCopy;
	  if(sortby == "boy"){
		  sortFn = (a, b) => d3.ascending(b.boy, a.boy);
		  xCopy = x.domain(data.sort(sortFn).map(d => d.country)).copy();
	  }
	  else if(sortby == "girl"){
		  sortFn = (a, b) => d3.ascending(b.girl, a.girl);
		  xCopy = x.domain(data.sort(sortFn).map(d => d.country)).copy();
	  }
	  else if(sortby == "total"){
		  sortFn = (a, b) => d3.ascending(b.total, a.total);
		  xCopy = x.domain(data.sort(sortFn).map(d => d.country)).copy();
	  }
	  else if(sortby == "ratio"){
		  sortFn = (a, b) => d3.ascending(b.ratio, a.ratio);
		  xCopy = x.domain(data.sort(sortFn).map(d => d.country)).copy();
	  } else if(sortby == "birth_ratio"){
	  	  sortFn = (a, b) => d3.ascending(b.birth_ratio, a.birth_ratio);
		  xCopy = x.domain(data.sort(sortFn).map(d => d.country)).copy();
	  }
	  const t = d3.transition().duration(750);
	  const delay = (d, i) => i * 20;
	  
	  const groups = d3.selectAll("g.bar-group")
	  	.data(d3.stack().keys(keys)(data))
	  	.attr("fill", function(d) { return color(d.key); });
	  
	  const bars = groups.selectAll(".bar")
	  	.data(d => d, d => d.data.country)
	  	.sort((a, b) => xCopy(a.data.country) - xCopy(b.data.country))
	  
	  t.selectAll("g.bar-group")
	  	.selectAll(".bar")
	  	.delay(delay)
	  	.attr("x", function(d) { return xCopy(d.data.country)})

	  t.selectAll("g.bar-group")
	  	.selectAll(".text")
	  	.delay(delay)
	  	.attr("x",function(d) {return xCopy(d.data.country)+15})
	  
	  t.select(".axis.x")
	  	.call(d3.axisBottom(x))
	  	.selectAll("g")
	  	.delay(delay)
	  handleMouseOver(temp);
	}

	function saturation(d, col){
		console.log(d);
		col = d3.hsl(col)
		col.opacity = d.data.birth_ratio;
		return col;
	}

	const render = data => {
		var keys = d3.map(data, d=>d.country).keys()
		
		data.forEach( d=>{
			group.forEach( dd => {
				if(d.country == dd.country){
					if(d.sex == "男"){
						dd.boy += d.birth_count;
					}
					else{
						dd.girl += d.birth_count;
					}
					dd.total += d.birth_count;
				}
			})
			if(d.country=="新北市"){
				新北市.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="臺北市"){
				臺北市.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="桃園市"){
				桃園市.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="臺中市"){
				臺中市.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="臺南市"){
				臺南市.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="高雄市"){
				高雄市.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="宜蘭縣"){
				宜蘭縣.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="新竹縣"){
				新竹縣.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="苗栗縣"){
				苗栗縣.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="彰化縣"){
				彰化縣.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="南投縣"){
				南投縣.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="雲林縣"){
				雲林縣.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="嘉義縣"){
				嘉義縣.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="屏東縣"){
				屏東縣.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="臺東縣"){
				臺東縣.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="花蓮縣"){
				花蓮縣.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="澎湖縣"){
				澎湖縣.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="基隆市"){
				基隆市.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="新竹市"){
				新竹市.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="嘉義市"){
				嘉義市.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="金門縣"){
				金門縣.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
			if(d.country=="連江縣"){
				連江縣.forEach( dd=>{
					if(d.time==dd.time){
						if(d.sex == "男")
							dd.boy += d.birth_count;
						else
							dd.girl += d.birth_count;
					}
				})
			}
		})

		//update_population();
		d3.csv("https://raw.githubusercontent.com/mmry310531/dataSet/master/populations.csv").then(data => {
			data.forEach( d=> {
				d.populations = +d.populations;
				group.forEach( dd => {
					if(d.country == dd.country){
						dd.populations += d.populations;
						dd.birth_ratio = dd.total/dd.populations * 100
					}
				})
			})
		})
		group.sort(function(a, b) { return b.total - a.total; });
		x.domain(group.map(d=>d.country));
		group.forEach( d=> {
			d.ratio = d.boy / d.girl;
			//console.log(d.populations) 
		})


		console.log(group)

		

		var stackedData = d3.stack().keys(subkeys)(group);
		var stackedData2 = d3.stack().keys(subkeys2)(group);
		//console.log(stackedData)
		//console.log(stackedData2)


		/*var ratio_text = svg.selectAll(".bar-group").data(group).enter().append("g").attr("transform", d => "translate(" + (x(d.country)) + ",0)");
			ratio_text.append("text")
			  .attr("y", 370)
			  .attr("x",x.bandwidth()/2 )
			  .style("text-anchor", "middle")
			  .style("font-size", "1em")
			  .style("color", "black")
			  .text(d => d3.format(".2f")(d.ratio));*/

		var test = svg.append("g")
				   .selectAll("g")
				   .data(stackedData)
				   .enter()
				   .append("g")
				   .classed("bar-group", true)
				   .attr("fill", d => color(d.key))
				   .selectAll("rect")
				   .data(d => d)
				   .enter();
				   test.append("rect")
				   .classed("bar", true)
				   //.attr("fill",d => saturation(d,d.key))
				   .attr("x", d => x(d.data.country))
			        .attr("y", d => y(d[1]))
			        .attr("height", d => y(d[0]) - y(d[1]))
			        .attr("width",x.bandwidth())
			        .on("mouseover", handleMouseOver)
			        .on("mouseout", handleMouseOut);

			       	test.append("text")
			       	  .classed("text",true)
			       	  .attr('x',d => x(d.data.country)+10)
					  .attr("y", 360)
					  .style("text-anchor", "middle")
					  .style("font-size", "0.5em")
					  .style("color", "#000000")
					  .text( function(d) { return d3.format(".2f")(d.data.ratio)});
					 //.text(d => d3.format(".2f")(d.ratio));

		svg.append("g")
			.attr('class','axis x')
    		.attr("transform", "translate(0," + innerHight + ")")
		    .call(d3.axisBottom(x).tickSizeOuter(0));
		  
		svg.append("g")
			.attr('class','axis y')
		    .call(d3.axisLeft(y));

		d3.select("#sort").on("change", function(){
			update(group,keys,this.value);
		});
		
		d3.select("#year").on("change", function(){year = parseInt(this.value)})
		d3.select("#order").on("change", function(){
			sex_order(this.value);
		});
		function sex_order(sex){
			svg.selectAll('.bar-group').remove();
			if(sex == "boy"){
				stack_data = stackedData;
			}
			else{
				stack_data = stackedData2;
			}
			var test = svg.append("g")
				   .selectAll("g")
				   .data(stack_data)
				   .enter()
				   .append("g")
				   .classed("bar-group", true)
				   .attr("fill", d => color(d.key))
				   .selectAll("rect")
				   .data(d => d)
				   .enter();
				   test.append("rect")
				   .classed("bar", true)
				   .attr("x", d => x(d.data.country))
			        .attr("y", d => y(d[1]))
			        .attr("height", d => y(d[0]) - y(d[1]))
			        .attr("width",x.bandwidth())
			        .on("mouseover",handleMouseOver);
			        

			       	test.append("text")
			       	  .classed("text",true)
			       	  .attr('x',d => x(d.data.country)+10)
					  .attr("y", 360)
					  .style("text-anchor", "middle")
					  .style("font-size", "0.5em")
					  .style("color", "#000000")
					  .text( function(d) { return d3.format(".2f")(d.data.ratio)});

			//var country_ratio = d3.selectAll(".x.axis").data(data106).append("text").text("hello");

		}
	}

	function handleMouseOver(d){
		updata_lineChart(d);
	}
	function updata_lineChart(d){
		var data;
		var tmp;
		temp = d;
		svg2.selectAll('.line_chart').remove();
		svg2.selectAll('.axis.x2').remove();
		svg2.selectAll('.axis.y2').remove();
		svg2.selectAll('.boy_line').remove();
		svg2.selectAll('.girl_line').remove();
		//console.log(d)
		if(d.data.country == "新北市")
		{
			data = 新北市
			tmp = data106.filter(function(d) {return d.country == "新北市"})
		}
		else if(d.data.country == "臺北市")
		{
			data = 臺北市
			tmp = data106.filter(function(d) {return d.country == "臺北市"})
		}
		else if(d.data.country == "桃園市")
		{	
			data = 桃園市
			tmp = data106.filter(function(d) {return d.country == "桃園市"})
		}
		else if(d.data.country == "臺中市")
		{
			data = 臺中市
			tmp = data106.filter(function(d) {return d.country == "臺中市"})
		}
		else if(d.data.country == "臺南市")
		{	
			data = 臺南市
			tmp = data106.filter(function(d) {return d.country == "臺南市"})
		}
		else if(d.data.country == "高雄市")
		{
			data = 高雄市
			tmp = data106.filter(function(d) {return d.country == "高雄市"})
		}
		else if(d.data.country == "宜蘭縣")
		{	
			data = 宜蘭縣
			tmp = data106.filter(function(d) {return d.country == "宜蘭縣"})
		}
		else if(d.data.country == "新竹縣")
		{	
			data = 新竹縣
			tmp = data106.filter(function(d) {return d.country == "新竹縣"})
		}
		else if(d.data.country == "苗栗縣")
		{	
			data = 苗栗縣
			tmp = data106.filter(function(d) {return d.country == "苗栗縣"})
		}
		else if(d.data.country == "彰化縣")
		{	
			data = 彰化縣
			tmp = data106.filter(function(d) {return d.country == "彰化縣"})
		}
		else if(d.data.country == "南投縣")
		{	
			data = 南投縣
			tmp = data106.filter(function(d) {return d.country == "南投縣"})
		}
		else if(d.data.country == "雲林縣")
		{	
			data = 雲林縣
			tmp = data106.filter(function(d) {return d.country == "雲林縣"})
		}
		else if(d.data.country == "嘉義縣")
		{	
			data = 嘉義縣
			tmp = data106.filter(function(d) {return d.country == "嘉義縣"})
		}
		else if(d.data.country == "屏東縣")
		{	
			data = 屏東縣
			tmp = data106.filter(function(d) {return d.country == "屏東縣"})
		}
		else if(d.data.country == "臺東縣")
		{	
			data = 臺東縣
			tmp = data106.filter(function(d) {return d.country == "臺東縣"})
		}
		else if(d.data.country == "花蓮縣")
		{	
			data = 花蓮縣
			tmp = data106.filter(function(d) {return d.country == "花蓮縣"})
		}
		else if(d.data.country == "澎湖縣")
		{	
			data = 澎湖縣
			tmp = data106.filter(function(d) {return d.country == "澎湖縣"})
		}
		else if(d.data.country == "基隆市")
		{	
			data = 基隆市
			tmp = data106.filter(function(d) {return d.country == "基隆市"})
		}
		else if(d.data.country == "新竹市")
		{	
			data = 新竹市
			tmp = data106.filter(function(d) {return d.country == "新竹市"})
		}
		else if(d.data.country == "嘉義市")
		{	
			data = 嘉義市
			tmp = data106.filter(function(d) {return d.country == "嘉義市"})
		}
		else if(d.data.country == "金門縣")
		{	
			data = 金門縣
			tmp = data106.filter(function(d) {return d.country == "金門縣"})
		}
		else 
		{
			data = 連江縣
			tmp = data106.filter(function(d) {return d.country == "連江縣"})
		}
		var x2 = d3.scaleBand()
			  .rangeRound([0, innerWidth])
			  .paddingInner(0.1)
			  .domain(["106","107","108"])
		var y2 = d3.scaleLinear()
    		  .domain([0,data[0].boy*2.5])
   			  .range([ innerHight, 0 ]);

		var line_stack = d3.stack().keys(subkeys)(data);
		var line_chart = svg2.append("g")
   				   .classed("line_chart", true)
				   .selectAll("g")
				   .data(line_stack)
				   .enter()
				   .append("g")
				   .classed("bar-group", true)
				   .attr("fill", d => color(d.key))
				   .selectAll("rect")
				   .data(d => d)
				   .enter();
				   line_chart.append("rect")
				   .classed("bar", true)
				   .attr("x", d => x2(d.data.time))
			        .attr("y", d => y2(d[1]))
			        .attr("height", d => y2(d[0]) - y2(d[1]))
			        .attr("width",x2.bandwidth())


		svg2.append("g")
			.attr('class','axis x2')
    		.attr("transform", "translate(0," + innerHight + ")")
		    .call(d3.axisBottom(x2).tickSizeOuter(0));
		  
		svg2.append("g")
			.attr('class','axis y2')
		    .call(d3.axisLeft(y2));

		
		svg2.append("path")
			.classed("boy_line",true)
			.datum(data)
			.attr("fill","none")
			.attr("stroke", "blue")
			.attr("stroke-width",1.5)
			.attr("d", d3.line()
						 .x(function(d) { return x2(d.time)+110})
						 .y(function(d) { return y2(d.boy)}))
		svg2.append("path")
			.classed("girl_line",true)
			.datum(data)
			.attr("fill","none")
			.attr("stroke", "red")
			.attr("stroke-width",1.5)
			.attr("d", d3.line()
						 .x(function(d) { return x2(d.time)+110})
						 .y(function(d) { return y2(d.girl)}))
		svg2.selectAll("boyCircles")
			.classed("boy_circle",true)
			.data(data)
			.enter()
			.append("circle")
			.attr('fill',"black")
			.attr("stroke","none")
			.attr("cx", d =>  x2(d.time)+110)
			.attr("cy", d =>  y2(d.boy))
			.attr("r", 3)
		svg2.selectAll("girlCircles")
			.classed("girl_circle",true)
			.data(data)
			.enter()
			.append("circle")
			.attr('fill',"black")
			.attr("stroke","none")
			.attr("cx", d =>  x2(d.time)+110)
			.attr("cy", d =>  y2(d.girl))
			.attr("r", 3)
		console.log(tmp)
		line_chart_birth(tmp);
		pie_chart_birth(tmp);
	}
	function line_chart_birth(d){
		//console.log(d)
		svg3.selectAll('*').remove();
		var tmp = d
		var test
		var sum = Array(9).fill(0)
		var i
		var length = tmp.length
		var count = 0
		var sum_birth_count = 0
		var sum_birth = 0
		tmp.forEach (d =>
		{
			test = d['birth_order']
			if(typeof(test) == "string")test = test.split('胎', 1)
			d['birth_order'] = +test
			d['time'] = +d['time']
		})
		
		for(i = 0; i < length; i++)
		{
			if(tmp[i].time == year)
			{
				if(tmp[i].birth_order == 1) {
					sum[0]+= tmp[i].birth_count
				}
				else if(tmp[i].birth_order == 2) {
					sum[1]+= tmp[i].birth_count
				}
				else if(tmp[i].birth_order == 3) {
					sum[2]+= tmp[i].birth_count
				}
				else if(tmp[i].birth_order == 4) {
					sum[3]+= tmp[i].birth_count
				}
				else if(tmp[i].birth_order == 5) {
					sum[4]+= tmp[i].birth_count
				}
				else if(tmp[i].birth_order == 6) {
					sum[5]+= tmp[i].birth_count
				}
				else if(tmp[i].birth_order == 7) {
					sum[6]+= tmp[i].birth_count
				}
				else if(tmp[i].birth_order == 8) {
					sum[7]+= tmp[i].birth_count
				}
				else if(tmp[i].birth_order == 9) {
					sum[8]+= tmp[i].birth_count
				}
			}
			
		}
		for(i = 0; i < length; i++) if(tmp[i].time == year && tmp[i].birth_count != 0) count++
		//console.log(count)
		for(i = 0; i < sum.length; i++) {
			sum_birth += sum[i]
			sum_birth_count += (i+1)*sum[i]}
		//console.log(sum)
		//console.log(sum_birth_count)
		//console.log((sum_birth_count/sum_birth))
		var x3 = d3.scaleBand()
				   .rangeRound([0, innerWidth])
				   .paddingInner(0.1)
				   .domain([0,1,2,3,4,5,6,7,8])
		var y3 = d3.scaleLinear()
				   .domain([0, d3.max(sum)*1.2])
				   .rangeRound([innerHight, 0])
		
		var words = d3.scaleBand()
					  .rangeRound([0, innerWidth])
					  .paddingInner(0.1).domain(["1", "2", "3", "4", "5", "6", "7", "8", "9+"])

		svg3.append("g")
			.attr('class','axis x3')
			.attr("transform", "translate(0," + innerHight + ")")
			.call(d3.axisBottom(words).tickSizeOuter(0));
		
		svg3.append("g")
			.attr('class','axis y3')
			.call(d3.axisLeft(y3));
		
		svg3.append("path")
			.classed("birth_line",true)
			.datum(sum)
			.attr("fill","none")
			.attr("stroke", "green")
			.attr("stroke-width",1.5)
			.attr("d", d3.line()
						 .x(function(d, i) {
							return x3(i)+36})
						 .y(function(d, i) {
							return y3(d)}))
		
		svg3.selectAll("birth_circle")
			.classed("birth_circle",true)
			.data(sum)
			.enter()
			.append("circle")
			.attr('fill',"black")
			.attr("stroke","none")
			.attr("cx", function(d,i){ return x3(i)+36})
			.attr("cy", function(d) {return y3(d)})
			.attr("r", 3)
		
		svg3.selectAll("birth_text")
			.classed("birth_text", true)
			.data(sum)
			.enter()
			.append("text")
			.attr("fill", "black")
			.attr("x", function(d,i){ return x3(i)+36})
			.attr("y", function(d) {return y3(d)-10})
			.text(function(d, i) {return d})

		svg3.append("text")
		    .attr("fill", "black")
		    .attr("x", 400)
		    .attr("y", 50)
		    .text("平均胎次：" + sum_birth_count/sum_birth )
	}
	function pie_chart_birth(d){
		d3.select("#pieChart").selectAll('*').remove();
		d3.select(".chart-title").attr('class', 'display-title');
		const svg_pie = d3.select("#pieChart").append("svg")
								 .attr('width',pie_width)
								 .attr('height',height)
								 .append('g')
								 .attr('transform',`translate(${pie_width/2},${height/2})`);
		var pie_data = [{
			name: '生母年齡之新生兒總數',
			series: [
				{
					mother_age: "15～19歲",
					birth_count: 0,
					category: 1
				},
				{
					mother_age: "20～24歲",
					birth_count: 0,
					category: 2
				},
				{
					mother_age: "25～29歲",
					birth_count: 0,
					category: 3
				},
				{
					mother_age: "30～34歲",
					birth_count: 0,
					category: 4
				},
				{
					mother_age: "35～39歲",
					birth_count: 0,
					category: 5
				},
				{
					mother_age: "40～44歲",
					birth_count: 0,
					category: 6
				},
				{
					mother_age: "45～49歲",
					birth_count: 0,
					category: 7
				},
				{
					mother_age: "50歲以上",
					birth_count: 0,
					category: 8
				},
				{
					mother_age: "未滿15歲",
					birth_count: 0,
					category: 9
				}
			]
		}];
		const chartColor = {
		  1: {
		    color: '#eb3b5a',
		  },
		  2: {
		    color: '#fa8231',
		  },
		  3: {
		    color: '#f7b731',
		  },
		  4: {
		    color: '#20bf6b',
		  },
		  5: {
		    color: '#2d98da',
		  },
		  6: {
		    color: '#3867d6',
		  },
		  7: {
		    color: '#8854d0',
		  },
		  8: {
		    color: '#a5b1c2',
		  },
		  9: {
		    color: '#4b6584',
		  },
		}
		d.forEach(element=>{
			console.log(element.time)
			console.log(year)
			if(element.time===year){
				const index = pie_data[0].series.findIndex(e=>e.mother_age === element.mother_age);
				pie_data[0].series[index].birth_count += element.birth_count;
			}
		});
		console.log(pie_data);
		const total = pie_data[0].series
	    .map(data => data.birth_count)
	    .reduce((current, acc) => current + acc)

	  const newData = pie_data.map((data, i) => ({
	    name: data.name,
	    series: data.series.map(el => ({
	      name: el.name,
	      clicks: el.birth_count,
	      value: el.birth_count === 0 ? 0 : ((el.birth_count / total) * 100).toFixed(1),
	      category: el.category
	    })),
	  }))

	  var tip = setTooltip('pie')
	  svg_pie.call(tip)
	  
	  const arc = d3
	    .arc()
	    .innerRadius(0)
	    .outerRadius(height / 2)

	  var labelArc = d3.arc().innerRadius(0)
	    .outerRadius(height / 2)

	  const pie = d3.pie().value(e => e.value)

	  var g_pie = svg_pie
	    .selectAll('path')
	    .data(pie(newData[0].series))
	    .enter()
	    .append('g')

	  g_pie
	    .append('path')
	    .attr('d', arc)
	    .attr('fill', e => chartColor[e.data.category].color)
	    .on('mouseover', tip.show)
	    .on('mouseout', tip.hide)

	  g_pie
	  	.append("text")
	  	.attr("transform", function(d){
	  		return "translate(" + arc.centroid(d) + ")";
	  	})
	  	.attr("text-anchor", "middle")
	  	.text(function(d){
	  		if(d.data.value > 5.0)
	  			return d.data.value + "%";
	  	})
	}
	function handleMouseOut(d){
		console.log("leave")
	}
	function update_population(){
		d3.csv("https://raw.githubusercontent.com/mmry310531/dataSet/master/populations.csv").then(data => {

			data.forEach( d => {
				d.populations = +d.populations;
				if(d.country=="新北市"){
					新北市.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="臺北市"){
					臺北市.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="桃園市"){
					桃園市.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="臺中市"){
					臺中市.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="臺南市"){
					臺南市.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="高雄市"){
					高雄市.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="宜蘭縣"){
					宜蘭縣.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="新竹縣"){
					新竹縣.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="苗栗縣"){
					苗栗縣.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="彰化縣"){
					彰化縣.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="南投縣"){
					南投縣.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="雲林縣"){
					雲林縣.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="嘉義縣"){
					嘉義縣.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="屏東縣"){
					屏東縣.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="臺東縣"){
					臺東縣.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="花蓮縣"){
					花蓮縣.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="澎湖縣"){
					澎湖縣.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="基隆市"){
					基隆市.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="新竹市"){
					新竹市.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="嘉義市"){
					嘉義市.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="金門縣"){
					金門縣.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
				if(d.country=="連江縣"){
					連江縣.forEach( dd=>{
						if(d.time==dd.time){
							dd.populations += d.populations;
						}
					})
				}
			})
			data.forEach( d=> {
				d.populations = +d.populations;
				group.forEach( dd => {
					if(d.country == dd.country){
						dd.populations += d.populations;
					}
				})
			})
		})	

	}
	d3.csv("https://raw.githubusercontent.com/mmry310531/dataSet/master/data.csv").then(data => {
		data.forEach( d => {
		//	console.log(d);
			d['country'] = d['country'];
			d['birth_order'] = d["birth_order"];
			d['sex']  = d['birth_sex'];
			d['mother_age'] = d['mother_age'];
			d['birth_count'] = +d['birth_count'];

		});
		data106 = data;
		render(data106);
	});

})(d3);