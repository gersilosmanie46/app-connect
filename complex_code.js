Filename: complex_code.js

/*
  This code generates a complex network graph using D3.js library.
  It utilizes random data generation, manipulation of SVG elements, and interactivity.
*/

// Create an SVG container
var svg = d3.select("body")
            .append("svg")
            .attr("width", 800)
            .attr("height", 600);

// Define the nodes and links data
var nodes = [];
var links = [];

// Generate 50 random nodes
for (var i = 0; i < 50; i++) {
  nodes.push({ id: i });
}

// Generate random links between nodes
for (var j = 0; j < 100; j++) {
  var source = Math.floor(Math.random() * nodes.length);
  var target = Math.floor(Math.random() * nodes.length);
  links.push({ source: source, target: target });
}

// Create a force simulation
var simulation = d3.forceSimulation(nodes)
                   .force("charge", d3.forceManyBody().strength(-50))
                   .force("link", d3.forceLink(links).distance(30).strength(1).iterations(10))
                   .force("center", d3.forceCenter(400, 300))
                   .on("tick", ticked);

// Create link elements
var link = svg.selectAll(".link")
              .data(links)
              .enter()
              .append("line")
              .attr("class", "link");

// Create node elements
var node = svg.selectAll(".node")
              .data(nodes)
              .enter()
              .append("circle")
              .attr("class", "node")
              .attr("r", 5)
              .call(d3.drag()
                      .on("start", dragStarted)
                      .on("drag", dragged)
                      .on("end", dragEnded));

// Add label to each node
var label = svg.selectAll(".label")
               .data(nodes)
               .enter()
               .append("text")
               .attr("class", "label")
               .attr("dy", ".35em")
               .text(function(d) { return "Node " + d.id; });

// Function called on each tick of the simulation
function ticked() {
  link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  node.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      
  label.attr("x", function(d) { return d.x + 10; })
       .attr("y", function(d) { return d.y + 5; });
}

// Functions for drag behavior
function dragStarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragEnded(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

// Apply styles to nodes, links, and labels
link.style("stroke", "#ccc")
    .style("stroke-width", 1);

node.style("fill", "steelblue")
    .style("stroke", "#fff")
    .style("stroke-width", 1.5);

label.style("font-family", "Arial")
     .style("font-size", "10px")
     .style("fill", "#000");

// Add interactivity on mouseover and mouseout events for nodes
node.on("mouseover", function(d) {
    d3.select(this).style("fill", "orange");
});

node.on("mouseout", function(d) {
    d3.select(this).style("fill", "steelblue");
});