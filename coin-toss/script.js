const coin = document.getElementById("coin");
const result = document.getElementById("result");
const tossBtn = document.getElementById("tossBtn");

tossBtn.addEventListener("click", () => {
    const random = Math.random() < 0.5 ? "Heads" : "Tails";

    coin.style.transform = "rotateY(360deg)";
    
    setTimeout(() => {
        result.textContent = "Result: " + random;
        coin.style.transform = "rotateY(0deg)";
    }, 800);
});
