const imageFiles = getImages();
renderImages();
console.log("fuck")

function getImages() {
    const files = [];
    for (let i = 0; i < 12; i++) {
        files.push(`./images/img${i}.jpg`);
    }
    return files;
}

function renderImages() {
    const imageContainer1 = document.getElementById('imgContainer1');
    const imageContainer2 = document.getElementById('imgContainer2');

    for (let i = 0; i < Math.ceil(imageFiles.length / 2.0); i++) {
        const imgElement = document.createElement('img');
        imgElement.src = imageFiles[i];
        imgElement.alt = 'Image'; // Set an alt attribute for accessibility
        imgElement.className = 'img-container m-2';
        imageContainer1.appendChild(imgElement);
    }
    for (let i = Math.ceil(imageFiles.length / 2.0); i < imageFiles.length; i++) {
        const imgElement = document.createElement('img');
        imgElement.src = imageFiles[i];
        imgElement.alt = 'Image'; // Set an alt attribute for accessibility
        imgElement.className = 'img-container m-2';
        imageContainer2.appendChild(imgElement);
    }
}
