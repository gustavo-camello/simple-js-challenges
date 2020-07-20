// Add event listener
document.getElementById('btn').addEventListener('click', changeBackground);

// Function to change the background
function changeBackground(){
  const colors = ['black', 'purple', 'green', 'pink', 'yellow', 'blue', 'gray', 'orange', 'brown'];

  let color = randomColor(colors);
  document.querySelector('.container').style.backgroundColor = colors[color];
  
};

// Function to create a random Number
function randomColor (arr) {
  let ramdonNumber = Math.floor(Math.random()*arr.length);
  return ramdonNumber;
}