
// Select the span element with class "button"
const buttonSpan = document.querySelector('span.button');

// Create the icon element (this example uses a Unicode character for an arrow)
const icon = document.createElement('span');
icon.textContent = ' \u25B6'; // This is a right-pointing triangle (►)

// Append the icon after the text inside the span
buttonSpan.appendChild(icon);
