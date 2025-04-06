// Ensure this script runs when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Create a container for the loading animation
    var loadingContainer = document.createElement("div");
    loadingContainer.id = "loading-container";
    loadingContainer.style.display = "none";
    loadingContainer.style.textAlign = "center";
    loadingContainer.style.marginTop = "100px";

    // Set the inner HTML of the container
    loadingContainer.innerHTML = `
        <div class="dna-loader" style="display: inline-flex; gap: 15px;">
            <div class="cell" style="width: 10px; height: 10px; background-color: blue; border-radius: 50%; animation: bounce 0.8s infinite alternate;"></div>
            <div class="cell" style="width: 10px; height: 10px; background-color: green; border-radius: 50%; animation: bounce 0.8s 0.1s infinite alternate;"></div>
            <div class="cell" style="width: 10px; height: 10px; background-color: red; border-radius: 50%; animation: bounce 0.8s 0.2s infinite alternate;"></div>
            <div class="cell" style="width: 10px; height: 10px; background-color: purple; border-radius: 50%; animation: bounce 0.8s 0.3s infinite alternate;"></div>
            <div class="cell" style="width: 10px; height: 10px; background-color: black; border-radius: 50%; animation: bounce 0.8s 0.4s infinite alternate;"></div>
            <div class="cell" style="width: 10px; height: 10px; background-color: yellow; border-radius: 50%; animation: bounce 0.8s 0.5s infinite alternate;"></div>
            <div class="cell" style="width: 10px; height: 10px; background-color: brown; border-radius: 50%; animation: bounce 0.8s 0.6s infinite alternate;"></div>
            <div class="cell" style="width: 10px; height: 10px; background-color: pink; border-radius: 50%; animation: bounce 0.8s 0.7s infinite alternate;"></div>
            <div class="cell" style="width: 10px; height: 10px; background-color: maroon; border-radius: 50%; animation: bounce 0.8s 0.8s infinite alternate;"></div>
            <div class="cell" style="width: 10px; height: 10px; background-color: orange; border-radius: 50%; animation: bounce 0.8s 0.9s infinite alternate;"></div>
            <div class="cell" style="width: 10px; height: 10px; background-color: cyan; border-radius: 50%; animation: bounce 0.8s 1s infinite alternate;"></div>
            <div class="cell" style="width: 10px; height: 10px; background-color: lime; border-radius: 50%; animation: bounce 0.8s 1.1s infinite alternate;"></div>
            <div class="cell" style="width: 10px; height: 10px; background-color: teal; border-radius: 50%; animation: bounce 0.8s 1.2s infinite alternate;"></div>
            <div class="cell" style="width: 10px; height: 10px; background-color: white; border-radius: 50%; animation: bounce 0.8s 1.3s infinite alternate;"></div>
            <div class="cell" style="width: 10px; height: 10px; background-color: aqua; border-radius: 50%; animation: bounce 0.8s 1.4s infinite alternate;"></div>
        </div>
        <p style="color: white; font-weight: bold; margin: 12px 0;">Loading genetic data...</p>
        <div id="progress-container" style="width: 100%; height: 15px; background-color: white; margin: 0 auto;">
            <div id="progress-bar" style="width: 10%; height: 100%; background-color: blue;"></div>
        </div>
        
       

    `;

    // Append the container to the body or a specific element
    document.body.appendChild(loadingContainer);
});










