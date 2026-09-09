// Forgiveness Button Logic with animation
const btn = document.getElementById("forgiveBtn");
btn.addEventListener("click", () => {
  btn.innerText = "Yes 💖";
  btn.style.background = "linear-gradient(135deg, #a1ffce, #faffd1)";
  btn.style.color = "#333";
  btn.style.transform = "scale(1.2)";
  setTimeout(() => {
    btn.style.transform = "scale(1)";
  }, 500);
});
