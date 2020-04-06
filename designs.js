// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

captureDimensions = function (event){
  var height = document.getElementById('inputHeight');
  var width = document.getElementById('inputWidth');
  var dimensions = [height.value,width.value];
  console.log(dimensions);
}

hearThat = function() {
  console.log("CLICK CLACK!!!");
}

document.addEventListener('DOMContentLoaded', function(){
  document.addEventListener('click', captureDimensions);
});

function makeGrid() {

// Your code goes here!

}
