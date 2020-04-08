// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

hearThat = function(event) {
  console.log(event.target + "CLICK CLACK!!!");
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

setColor = function(event){
  var color = document.getElementById('colorPicker').value;

  if (event.target.className === 'filled'){
    event.target.className = 'empty';
    event.target.style.backgroundColor = "#ffffff";
  }
  else {
    event.target.className = 'filled';
    event.target.style.backgroundColor = color;
  }
}


function makeGrid(event) {

  //var height = captureDimensions()[0];
  //var width = captureDimensions()[1];
  event.preventDefault();
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  var canvass = document.getElementById('pixelCanvas');
  var new_row = document.createElement('tr');

  for (var row = 1; row <=width; row++){
    if(row == 1){
      canvass.appendChild(new_row);
    }
    else {
      canvass.insertRow();
    }
    for (var col = 1; col <=width; col++){
      canvass.rows[row - 1].insertCell();
    }
  }
}


//var picker = document.getElementById('sizePicker')
//picker.addEventListener('submit', hearThat);
document.addEventListener('submit', makeGrid);
document.getElementById('pixelCanvas').addEventListener('click',setColor);

/*paint = function(event){
  var pixel = document.getElements
}
*/
