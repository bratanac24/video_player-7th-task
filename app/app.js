let globalVolume = 100;

const setSpeed = (speed)=>{
    // console.log("Setting speed to ",speed)
    let video = document.getElementById("clip");
    video.playbackRate = speed;
}
const setMute = ()=>{
    let video = document.getElementById("clip");
    let sounIcon = document.getElementById("soundIcon")
    let volumeInput = document.getElementById("vol")

    const muted = '<use class="ytp-svg-shadow" xlink:href="#ytp-id-82"></use><path class="ytp-svg-fill" d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z" id="ytp-id-82"></path>'
    const loud = '<use class="ytp-svg-shadow" xlink:href="#ytp-id-14"></use><use class="ytp-svg-shadow" xlink:href="#ytp-id-15"></use><defs><clipPath id="ytp-svg-volume-animation-mask"><path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path><path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path><path class="ytp-svg-volume-animation-mover" d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z" transform="translate(0, 0)"></path></clipPath><clipPath id="ytp-svg-volume-animation-slash-mask"><path class="ytp-svg-volume-animation-mover" d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z" transform="translate(0, 0)"></path></clipPath></defs><path class="ytp-svg-fill ytp-svg-volume-animation-speaker" clip-path="url(#ytp-svg-volume-animation-mask)" d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z" fill="#fff" id="ytp-id-14"></path><path class="ytp-svg-fill ytp-svg-volume-animation-hider" clip-path="url(#ytp-svg-volume-animation-slash-mask)" d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z" fill="#fff" id="ytp-id-15" style="display: none;"></path>'
    if(video.volume > 0){
        globalVolume = video.volume*100;
        video.volume = 0;
        volumeInput.value = 0;
        sounIcon.innerHTML=muted;
    }
    else if(video.volume == 0){
        video.volume = globalVolume/100;
        sounIcon.innerHTML = loud;
        volumeInput.value = globalVolume;
    }

}
const playPause = () =>{
    let video = document.getElementById("clip")
    let playBtn = document.getElementById("play-pause")
    let play = '<use class="ytp-svg-shadow" xlink:href="#ytp-id-48"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" id="ytp-id-48"></path>'
    let pause = '<use class="ytp-svg-shadow" xlink:href="#ytp-id-70"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z" id="ytp-id-70"></path>'
    if(video.paused){
        video.play();
        playBtn.innerHTML = pause;
    }
    else{
        video.pause();
        playBtn.innerHTML = play;
    }
}
const dropdownShowHide = ()=>{
    let list = document.getElementById("drop");
    let gear = document.getElementById("gear");
    
    if(list.style.visibility == "" || list.style.visibility == "hidden" ){
        list.style.visibility = "visible";
        gear.style.transform = "rotate(+30deg)";
    }
    else if(list.style.visibility == "visible"){
        list.style.visibility = "hidden";
        gear.style.transform = "rotate(0deg)";

    }
   // console.log(list.style.visibility)
}

let volumeChange = document.getElementById("vol").addEventListener("change",()=>{
    let video = document.getElementById("clip")
    let volumeInput = document.getElementById("vol")
    video.volume = volumeInput.value / 100;
    globalVolume = volumeInput.value;
    const muted = '<use class="ytp-svg-shadow" xlink:href="#ytp-id-82"></use><path class="ytp-svg-fill" d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z" id="ytp-id-82"></path>'
    const loud = '<use class="ytp-svg-shadow" xlink:href="#ytp-id-14"></use><use class="ytp-svg-shadow" xlink:href="#ytp-id-15"></use><defs><clipPath id="ytp-svg-volume-animation-mask"><path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path><path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path><path class="ytp-svg-volume-animation-mover" d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z" transform="translate(0, 0)"></path></clipPath><clipPath id="ytp-svg-volume-animation-slash-mask"><path class="ytp-svg-volume-animation-mover" d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z" transform="translate(0, 0)"></path></clipPath></defs><path class="ytp-svg-fill ytp-svg-volume-animation-speaker" clip-path="url(#ytp-svg-volume-animation-mask)" d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z" fill="#fff" id="ytp-id-14"></path><path class="ytp-svg-fill ytp-svg-volume-animation-hider" clip-path="url(#ytp-svg-volume-animation-slash-mask)" d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z" fill="#fff" id="ytp-id-15" style="display: none;"></path>'
    let sounIcon = document.getElementById("soundIcon")
    if(video.volume > 0){
        sounIcon.innerHTML = loud;
    }
    else{
        sounIcon.innerHTML=muted; 
    }
    
})
const setFullScreen = ()=>{
    let video = document.getElementById('frame')
    if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      ) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        }
      }
}
const setPlayLength = ()=>{
    let video = document.getElementById("clip");
    let playbackSlider = document.getElementById("playback");
    // console.log(video.duration);
    playbackSlider.max = video.duration;

    if (Math.round(video.duration) < 60){
        document.getElementById("length").innerHTML ="0:" + Math.round(video.duration);
    }
    else{
        let min = Math.round(video.duration)/60;
        let sec = Math.round(video.duration) % 60;
        if(sec < 10){
            sec = "0"+sec;
        }
        document.getElementById("length").innerHTML = min + ":" + sec;
    }
    
}
const setPlaybackSlider = (timePoint) =>{
    let slider = document.getElementById("playback");
    slider.value = timePoint;
    
}
document.getElementById("clip").addEventListener("timeupdate",()=>{
    let video = document.getElementById("clip")    
    let slider = document.getElementById('playback')
    let min = Math.floor(video.currentTime/60);
    let sec = Math.round(video.currentTime % 60);
    if(sec < 10){
        sec = `0${sec}`;
    }
    document.getElementById("live").innerHTML = min + ":" + sec;
    setPlaybackSlider(video.currentTime);
    
    
})
const scrub = () =>{
    let video = document.getElementById("clip");
    video.pause();
}
const setTime = () =>{
    let video = document.getElementById("clip");
    video.currentTime = document.getElementById("playback").value;
}
const continueVideo = ()=>{
    let video = document.getElementById("clip");
    video.play();}

const quickTimeSet = ()=>{
    scrub();
    setTime();
    continueVideo();
}

const endVideo = ()=>{
    let playBtn = document.getElementById("play-pause")
    let play = '<use class="ytp-svg-shadow" xlink:href="#ytp-id-48"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" id="ytp-id-48"></path>'
    playBtn.innerHTML = play;
}