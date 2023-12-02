document.getElementById('colorBox').addEventListener('click', function() {
    // Change the background color to a random color on click
    var randomColor = getRandomColor();
    this.style.backgroundColor = randomColor;
  });
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }