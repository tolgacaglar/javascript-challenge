var tbody = d3.select("tbody");

// Add data to the table body
addData(tbody, data);
  
// Select the date form
var form = d3.select("form");
// Select the filter button
var filterButton = d3.select("#filter-btn");

// Create event handlers 
filterButton.on("click", filterData);
form.on("submit",filterData);

// Complete the event handler function for the form
function filterData() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  
  // Get the value property of the input element for each item
  var dateValue = d3.select("#datetime").property("value");
  var cityValue = d3.select("#city").property("value").toLowerCase();
  var stateValue = d3.select("#state").property("value").toLowerCase();
  var countryValue = d3.select("#country").property("value").toLowerCase();
  var shapeValue = d3.select("#shape").property("value").toLowerCase();

  // Filter for each item
  // If there's no entry, then add to the filteredData
  var filteredData = data.filter(UFOsighting => (UFOsighting.datetime === dateValue
                                              || dateValue.length == 0))
                         .filter(UFOsighting => (UFOsighting.city === cityValue
                                              || cityValue.length == 0))
                         .filter(UFOsighting => (UFOsighting.state === stateValue
                                              || stateValue.length == 0))
                         .filter(UFOsighting => (UFOsighting.country === countryValue
                                              || countryValue.length == 0))
                         .filter(UFOsighting => (UFOsighting.shape === shapeValue
                                              || shapeValue.length == 0))
  // Select table body
  var tbody = d3.select("tbody");
  // Clear the table body
  tbody.html("");

  addData(tbody, filteredData)
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