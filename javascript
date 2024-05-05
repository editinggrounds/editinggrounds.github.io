document.getElementById('videoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var title = document.getElementById('title').value;
    var url = document.getElementById('url').value;

    // Create video element
    var videoElement = document.createElement('div');
    videoElement.innerHTML = `
        <h3>${title}</h3>
        <video width="320" height="240" controls>
            <source src="${url}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    
    // Append video element to videoList
    var videoList = document.getElementById('videoList');
    videoList.appendChild(videoElement);

    // Clear form inputs
    document.getElementById('title').value = '';
    document.getElementById('url').value = '';
});
