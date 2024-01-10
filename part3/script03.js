const Ellipse46 = document.querySelector(".Ellipse46");

Ellipse46.onclick  = function() {
    // Get the element with the class '7'
    var textElement = document.getElementById('textToUpdate');
    // Get the current text content and split it into an array
    var currentText = textElement.innerText.split('/');
    console.log(currentText);
    // Increment the numerator (first part of the array)
    currentText[0] = parseInt(currentText[0]) + 1;

    // Update the text content
    textElement.innerText = currentText.join('/');
}