// Get the bar element
const bar = document.getElementById('bar');

// Function to update the bar width based on percentage
function updateBar(percentage) {
    // Ensure percentage is within valid range (0-100)
    percentage = Math.max(0, Math.min(100, percentage));
    
    // Calculate the width of the bar based on percentage
    const width = percentage + '%';
    
    // Update the bar width with animation
    bar.style.width = width;
}

// Example usage: Update the bar width to 50%
updateBar(50);
