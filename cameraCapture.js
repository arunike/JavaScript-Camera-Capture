// Set elements
const cvs = document.getElementById('canvas');
const video = document.getElementById('video');
cvs.width = cvs.height = video.width = video.height = 400;
const {width, height} = cvs;
const ctx = cvs.getContext('2d');

const constraints = { // Set constraints
    video: {
        width,
        height
    }
}
navigator.mediaDevices.getUserMedia(constraints).then(stream => { // Get stream
    video.srcObject = stream;
    video.onloadedmetadata = () => video.play();
})
function takePhoto() { // Take photo
    ctx.drawImage(video, 0, 0, width, height);
    document.getElementById('img').src = canvas.toDataURL('image/png');
}