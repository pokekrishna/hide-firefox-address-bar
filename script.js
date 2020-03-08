var uiStateFullscreen = false;

var imgFullscreen = document.createElement("img");
imgFullscreen.src = "https://raw.githubusercontent.com/tberghuis/fullscreen-youtube-tv/master/assets/fullscreen-icon-product-page.png"
imgFullscreen.style.position = "fixed";
imgFullscreen.style.top = "2rem";
imgFullscreen.style.right = "2rem";
imgFullscreen.style.display = "none";
// TODO, size img width, height in REM
document.body.appendChild(imgFullscreen);



document.body.addEventListener("touchstart", showFullscreenIcon);

var showingFullscreenIcon = false;
function showFullscreenIcon() {
  if (!showingFullscreenIcon) {
    showingFullscreenIcon = true;
    imgFullscreen.style.display = "block";
    setTimeout(function() {
      imgFullscreen.style.display = "none";
      showingFullscreenIcon = false;
    }, 4000);
  }
}


imgFullscreen.addEventListener("touchend", function() {
  document.documentElement.requestFullscreen();
  uiStateFullscreen = true;
});
