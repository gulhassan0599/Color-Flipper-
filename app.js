const body = document.querySelector(".body");
const span = document.querySelector("span");
const btn = document.querySelector("button");

const randomColor = () => {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);

    let rgbColor = `rgb(${red}, ${blue}, ${green})`;
    return rgbColor;
}

btn.addEventListener("click", (e) => {
    let rgbcolor = randomColor();
    body.style.backgroundColor = rgbcolor;
    span.textContent = rgbcolor;
});

