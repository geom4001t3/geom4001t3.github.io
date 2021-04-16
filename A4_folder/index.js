var greenCommute = [
    {city: "Ottawa", percentage: 30, pop: "934,243", commuteTime: 27},
    {city: "Vancouver", percentage: 50, pop: "631,486", commuteTime: 30},
    {city: "Montreal", percentage: 50, pop: "1,704,694", commuteTime: 30},
    {city: "Toronto", percentage: 50, pop: "2,731,571", commuteTime: 34},
    {city: "Calgary", percentage: 17, pop: "1,239,220", commuteTime: 27},
    {city: "Winnipeg", percentage: 55, pop: "705,244", commuteTime: 24}
];

var div = d3.select("body").append("div")
.attr("class", "tooltip")
.style("opacity", 0);


const width= 900;
const height = 500;
const margin = { top: 50, bottom: 50, left: 50, right: 50};

const svg2= d3.select("#div2")
    .append('svg')
    .attr("height1", height-margin.top-margin.bottom)
    .attr("width1", width-margin.left - margin.right)
    .attr("viewBox", [0,0,width,height]);

const x= d3.scale.ordinal()
     .domain(d3.range(greenCommute.length))
     .range([margin.left, width-margin.right]);
    

const y = d3.scale.linear()
     .domain([0,100])
     .range([height-margin.bottom, margin.top])

svg2
    .append("g") // g is for general graphics elements
    .attr("fill", "blue")
    .selectAll('rect')
    .data(greenCommute.sort((a,b)=> d3.descending(a.percentage, b.percentage)))
    .join('rect')
        .attr('x', (d,i)=>x(i))
        .attr("y", (d) =>y(d.percentage))
        .attr("height", (d) => y(0)-y(d.percentage))
        .attr("width", x.bandwidth())
        .attr("class", "rectangle")
        .on("mouseover", function(event, d){
            console.log("Handling mouseover"); //Helps check whether this fx is executed
            //console.log(d); //Use to see what information you can get
            console.log(event); //Use to see what information you can get
                div.transition()
                    .duration(200)
                    .style("opacity", 1);
                div.html("Population: "+d.pop+ "<br/>"+ "Green Commuters: " + d.percentage +"%"  + "<br/>" + "Avg commute time (mins): " + d.commuteTime)
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY - 70) + "px");
                })

                .on("mouseout", function(event) {
                    div.transition()
                    .duration(5)
                    .style("opacity", 0); // making opacity zero --> disappears when you move off circle
                        }); 


function xAxis(g){
    g.attr("transform", `translate(0, ${height-margin.bottom})`)
    g.call(d3.axisBottom(x).tickFormat(i=> greenCommute[i].city))
    .attr("font-size", "22px")
}

function yAxis(g){
    g.attr("transform", `translate(${margin1.left}, 0)`)
      .call(d3.axisLeft(y).ticks(null, greenCommute.format))
      .attr("font-size", "17px")
}
svg2.node();

svg2.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg2.append("text")
    .attr("transform", "translate(" + (width / 2) + " ," + (height + margin1.bottom) + ")")
    .style("text-anchor", "middle")
    .text("City");

svg2.append("g")
.attr("class", "y axis")
.attr("font-size", "22px")
.call(yAxis);

svg2.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin1.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Percentage");
        