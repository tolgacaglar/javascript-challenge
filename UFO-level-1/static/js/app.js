var tbody = d3.select("tbody");

// Add data to the table body
addData(tbody, data);
  
// Select the date form
var form = d3.select("#form");
// Select the filter button
var filterButton = d3.select("#filter-btn");

// Create event handlers 
filterButton.on("click", filterData);
form.on("submit",filterData);

// Complete the event handler function for the form
function filterData() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the datetime input element
  var inputDate = d3.select("#datetime");

  // Get the value property of the input element
  var dateValue = inputDate.property("value");

  var filteredData = data.filter(UFOsighting => UFOsighting.datetime === dateValue);

  // Select table body
  var tbody = d3.select("tbody");
  // Clear the table body
  tbody.html("");

  // If the dataValue has some entry, run the filter
  if (dateValue.length > 0) {addData(tbody, filteredData)}
  else {addData(tbody,data)};
};

// Add data to table body
function addData(tbody, data) {
  data.forEach((UFOsighting) => {
    var row = tbody.append("tr");
    Object.entries(UFOsighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};