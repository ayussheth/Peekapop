// Listen for the popup to be shown
document.addEventListener('DOMContentLoaded', function() {
  // Find all links on the page
  const links = document.getElementsByTagName('a');
  // Loop through each link
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    let timer = null;
    // Attach a mousedown event listener to each link
    link.addEventListener('mousedown', function() {
      // Set a timer to display the preview after 500ms
      timer = setTimeout(function() {
        // Get the link URL
        const url = link.href;
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
      }, 500);
    });
    // Attach a mouseup event listener to each link
    link.addEventListener('mouseup', function() {
      // Clear the timer if the user releases the mouse button before the timer expires
      clearTimeout(timer);
      // Remove the iframe from the popup window
      const iframe = document.querySelector('iframe');
      if (iframe) {
        document.body.removeChild(iframe);
      }
    });
  }
});
