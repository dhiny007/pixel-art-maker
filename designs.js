var table = $("#pixel_canvas");
console.log($("#pixel_canvas"));

$("form").submit(function(event) {
  event.preventDefault();
  var height = document.getElementById("input_height").value;
  var width = document.getElementById("input_width").value;
  var color = document.getElementById("colorPicker").value;
  makeGrid(height, width);
});

// Listen for cell click
$("table").on('click', 'td', function(event) {
  // Get color value from colorpicker input element using jquery
  var color = $("#colorPicker").val();
  // $(this) gives the exact td which triggered the click event. Since click is attached to a 'td'
  // Then change color of that cell
  $(this).css('background-color', color);
});

function makeGrid(h, w) {
  //Empty the table
  table.html("");

  for (var i = 0; i < h; i++) {
    //Add start of row

    var row = '<tr>';
    for (var j = 0; j < w; j++) {
      //Add column
      row = row + '<td></td>';
    }
    //Add end of row
    row = row + '</tr>';
    //Add the row to the table
    table.append(row);
  }

  return (h, w);
}
