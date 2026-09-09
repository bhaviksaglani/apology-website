// Modal logic
const modal = document.getElementById("noteModal");
const openBtn = document.getElementById("openNote");
const closeBtn = document.getElementById("closeNote");

openBtn.onclick = () => { modal.style.display = "block"; };
closeBtn.onclick = () => { modal.style.display = "none"; };
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; };

// Forgiveness buttons
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  noBtn.innerText = "Yes 💖";
});
noBtn.addEventListener("click", () => {
  noBtn.innerText = "Yes 💖";
});
