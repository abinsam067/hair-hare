
// JavaScript to handle photo uploads and gallery display
document.getElementById('photoUpload').addEventListener('change', function(event) {
    const files = event.target.files;
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ""; // Clear existing photos

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});
