document.getElementById("year").innerHTML = new Date().getFullYear();

const button = document.getElementById("button");

button.addEventListener("onclick", (event) => {
    event.preventDefault();
});