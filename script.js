document.addEventListener("DOMContentLoaded", function(){
    // Select the color box and button elements
    let colorBox = document.getElementById("color-box");
    let colorBtn = document.getElementById("change-color-btn")


    // Function to generate a random color in RGB format
    function getRandomColor() {
        const red = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        return `rgb(${red},${blue},${green})`;
      
    }

    // // Event listener to change the color of the box when the button is clicked
    colorBtn.addEventListener("click", function() {
        const changeColors = getRandomColor();
        colorBox.style.background = changeColors;
    });
});