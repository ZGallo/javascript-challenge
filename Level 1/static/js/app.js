// from data.js
var tableData = data;
console.log(tableData);

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select(".form-group");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// create table function
function renderTable(data){
  data.forEach((aDictionary) => {
    var row = tbody.append("tr");
    Object.entries(aDictionary).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

// render table on load
renderTable(tableData)

// Complete the event handler function for the form
function runEnter() {

  // tbody.selectAll('tr').remove();

  // preventing to keep adding more on every click 
  tbody.html("");

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = tableData.filter(data => data.datetime === inputValue);

  console.log(filteredData);

  renderTable(filteredData)

  //with the method below I loose the bootstrap :/ 
  // calling renderTable instead keeps the format

  // // Loop through the filtered data
  // filteredData.forEach((dictionaryData) => {
        
  //   //append a row to the table
  //   var row = tbody.append("tr");

  //   // access the dictionary data
  //   Object.entries(dictionaryData).forEach(([key, value])=>{
  //     var cell = tbody.append("td");
  //     cell.text(value)
  //   });
  // });


};
