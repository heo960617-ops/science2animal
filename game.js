const player = document.getElementById("player");

let x = 50;
let y = 75;

const speed = 0.5;

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowUp" || event.key === "w") {
        y -= speed;
    }

    if (event.key === "ArrowDown" || event.key === "s") {
        y += speed;
    }

    if (event.key === "ArrowLeft" || event.key === "a") {
        x -= speed;
    }

    if (event.key === "ArrowRight" || event.key === "d") {
        x += speed;
    }

    player.style.left = x + "%";
    player.style.top = y + "%";
});
