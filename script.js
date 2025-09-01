// Show welcome alert when page loads
window.onload = function() {
  alert("Welcome to my personal profile landing page!");
};

// Change text color of name when button is clicked
function changeColor() {
  const name = document.getElementById("name");
  const colors = ["#ffd700", "#ff4c4c", "#4cff4c", "#4c9dff", "#ffffff"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  name.style.color = randomColor;
}