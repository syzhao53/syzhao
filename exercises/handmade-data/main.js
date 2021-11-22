const data = [{day: "Saturday", pages: 15},
			{day: "Sunday", pages: 32}];

const width = 1000;
const height = 800;
const margin = {top: 0, bottom: 0, left: 50, right: 50};

const svg = d3.select(".d3-container")
.append("svg")
.attr("height", height - margin.top - margin.bottom)
.attr("width", width - margin.left - margin.right)
.attr("viewBox", [0,0, width, height]);

const x = d3.scaleBand()
.domain(d3.range(data.length))
.range([margin.left, width - margin.right])
.padding(0.1);

const y = d3.scaleLinear()
.domain([0,40])
.range([height - margin.bottom, margin.top]);

svg
  .append("g")
  .attr("stroke", "black")
  .attr("stroke-width", 2)
  .attr("fill", "#faf5e8")
  .selectAll("rect")
  .data(data.sort((a,b) => d3.ascending(a.pages, b.pages)))
  .join("rect")
  .attr("x", (d, i) => x(i))
  .attr("y", (d) => y(d.pages))
  .attr("height", d => y(0) - y(d.pages))
  .attr("width", x.bandwidth())
  //add a class
  .attr("class", "rectangle")

function xAxis(g) {
  g.attr("transform", `translate(0, ${height - margin.bottom})`)
  g.call(d3.axisBottom(x).tickFormat(i => data[i].day))
}

function yAxis(g){
  g.attr("transform", `translate(${margin.left}, 0)`)
  .call(d3.axisLeft(y).ticks(null, data.format))
}

// set up labels that go directly on the bars
// function barLabels(g){
//   g.attr("transform", `translate(0, ${height/2})`)
//   g.call(d3.axisBottom(x).tickFormat(i => data[i].day))
// }

// draw the labels onto the bars
// svg.append("g").call(barLabels);

svg.append("g").call(yAxis);

svg.append("g").call(xAxis);

  svg.node();