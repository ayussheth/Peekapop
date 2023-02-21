// Listen for the popup to be shown
document.addEventListener('DOMContentLoaded', function() {
  // Find all links on the page
  const links = document.getElementsByTagName('a');
  // Loop through each link
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    // Attach a mouseover event listener to each link
    link.addEventListener('mouseover', function() {
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
    });
    // Attach a mouseout event listener to each link
    link.addEventListener('mouseout', function() {
      // Remove the iframe from the popup window
      document.body.removeChild(document.querySelector('iframe'));
    });
  }
});
