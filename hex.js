const body = document.querySelector(".body");
const span = document.querySelector("span");
const btn = document.querySelector("button");
const hexNumberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const randomNumber = () => {
    return Math.floor(Math.random() * 16);
}

const randomColor = () => {
    hexColor = "#";
    for (let i=0; i<6; i++){
        hexColor += hexNumberList[randomNumber()];
    }
    return(hexColor);
}

btn.addEventListener("click", (e) => {
    let hexColor = randomColor();
    span.textContent = hexColor;
    body.style.backgroundColor = hexColor;
});