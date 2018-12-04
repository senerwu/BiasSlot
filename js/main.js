var video = document.getElementById('video');
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
 navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
 video.src = window.URL.createObjectURL(stream);
 video.play();
 });
}

document.getElementById("Takepicture").addEventListener("click", Takepicture);

function Takepicture(){
    console.log('Takepicture');
}
