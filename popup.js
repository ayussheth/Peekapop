// Listen for the popup to be shown
document.addEventListener('DOMContentLoaded', function() {
  // Add a mouseover event listener to the document
  document.addEventListener('mouseover', function(event) {
    // Check if the event target is a link
    if (event.target.tagName === 'A') {
      // Get the link URL
      const url = event.target.href;
      // Create an iframe element with the link URL as the source
      const iframe = document.createElement('iframe');
      iframe.src = url;
      // Set the size and position of the iframe
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      // Add the iframe to the popup window
      document.body.appendChild(iframe);
    }
  });

  // Add a mouseout event listener to the document
  document.addEventListener('mouseout', function(event) {
    // Check if the event target is a link
    if (event.target.tagName === 'A') {
      // Remove the iframe from the popup window
      document.body.removeChild(document.querySelector('iframe'));
    }
  });
});
