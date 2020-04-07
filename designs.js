// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

captureDimensions = function (event){
  var height = document.getElementById('inputHeight');
  var width = document.getElementById('inputWidth');
  var dimensions = [height.value,width.value];
  console.log(dimensions);
}

captureColor = function(event){
  var color = document.getElementById('colorPicker');
  console.log(color.value);
}

hearThat = function() {
  console.log("CLICK CLACK!!!");
}

document.addEventListener('DOMContentLoaded', function(){
  document.addEventListener('click', captureDimensions);
  document.addEventListener('click', captureColor);
});

function makeGrid() {

// Your code goes here!
  for (var row = 1; row <=4; row++){
    var canvass = document.getElementById('pixelCanvas');
    canvass.insertRow()
    for (var col = 1; col <=4; col++){
      canvass.rows[row - 1].insertCell();
    }
  }

}
