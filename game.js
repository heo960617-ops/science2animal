const player = document.getElementById("player");

let x = 50;
let y = 75;

const speed = 1;

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowUp" || event.key.toLowerCase() === "w") {
        y -= speed;
    }

    if (event.key === "ArrowDown" || event.key.toLowerCase() === "s") {
        y += speed;
    }

    if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
        x -= speed;
    }

    if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
        x += speed;
    }

    player.style.left = x + "%";
    player.style.top = y + "%";
});
