// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

hearThat = function() {
  console.log("CLICK CLACK!!!");
}


captureDimensions = function (){
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  return dimensions = [parseInt(height, 10), parseInt(width, 10)];
  //console.log(dimensions);
}


captureColor = function(event){
  var color = document.getElementById('colorPicker');
  console.log(color.value);
}


function makeGrid() {

  //var height = captureDimensions()[0];
  //var width = captureDimensions()[1];
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  var canvass = document.getElementById('pixelCanvas');

  for (var row = 1; row <=width; row++){
    canvass.insertRow();
    for (var col = 1; col <=width; col++){
      canvass.rows[row - 1].insertCell();
    }
  }
}


var picker = document.getElementById('sizePicker')
picker.addEventListener('submit', makeGrid);


/*paint = function(event){
  var pixel = document.getElements
}
*/
