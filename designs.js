/*
Contents
   *1: trival function for testing
   *2: function for setting color of target table elements
   *3: function for making grid aka canvas
   *4: add event listeners to make grid and set colors
*/

//1: Trivial event for testing purposes
hearThat = function(event) {
  console.log(event.target + "CLICK CLACK!!!");
}


//2: set color of target table elements
setColor = function(event){
  //capture color for color picker
  var color = document.getElementById('colorPicker').value;

  //change class of target element once clicked which allows multi colors
  if (event.target.className === 'filled'){
    event.target.className = 'empty';
    event.target.style.backgroundColor = "#ffffff";
  }
  else {
    event.target.className = 'filled';
    event.target.style.backgroundColor = color;
  }
}



//3: make grid aka canvas
function makeGrid(event) {
  //prevent default to allow form submission and creation
  event.preventDefault();
  //capture relevant data and elements
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  var canvass = document.getElementById('pixelCanvas');
  var new_row = document.createElement('tr');

  //resets canvas if table already exists
  canvass.innerHTML = null;

  //creates table with user defined rows and coloumns
  //HTML file edited to allow 25X25
  for (var row = 1; row <=width; row++){
    //for the first row, need to use append appendChild
    //afterwards insertrow will work fine
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


//4: add event listeners
document.addEventListener('submit', makeGrid);
document.getElementById('pixelCanvas').addEventListener('click',setColor);
