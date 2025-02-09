function downloadCV(file) {
    window.location.href = file;
}

function downloadCV(file) {
    window.open(file, '_blank');
}

function zoomImage(src) {
    // Create a new image element
    const zoomedImage = document.createElement('img');
    zoomedImage.src = src;
    zoomedImage.classList.add('zoomed-image');
    zoomedImage.onclick = function() {
        document.body.removeChild(zoomedImage);
    };

    // Append the image to the body
    document.body.appendChild(zoomedImage);
}

function showFallbackText(img) {
    img.style.display = 'none';
    const fallbackText = img.nextElementSibling;
    fallbackText.style.display = 'block';
}