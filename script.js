let count = 0;

const btn = document.getElementById("btn");
const countText = document.getElementById("count");

btn.addEventListener("click", function () {
    count++;
    countText.innerText = count;
});
