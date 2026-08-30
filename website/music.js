```javascript
const music = new Audio("../Music/song.mp3");

music.loop = true;
music.volume = 0.5;

function startMusic() {
    music.play().catch(function(error) {
        console.log("Music could not start:", error);
    });
}

document.addEventListener("click", startMusic, { once: true });
```
