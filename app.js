const installButton = document.querySelector("button");
const h1 = document.querySelector("h1");
installButton.style.display = "none";

const quotes = ["hello", "hey", "nice"];

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault(e);
  console.log("👍", "beforeinstallprompt", e);
  window.deferredPrompt = e;
  installButton.style.display = "inline-block";
});

installButton.addEventListener("click", () => {});

h1.addEventListener("click", (e) => {
  e.target.classList.remove("fade-in");
  e.target.classList.add("fade-out");
  setTimeout(() => {
    const randomIdx = Math.floor(Math.random() * quotes.length);
    h1.innerText = quotes[randomIdx];
    e.target.classList.remove("fade-out");
    e.target.classList.add("fade-in");
  }, 1200);
});

h1.addEventListener("animationstart", () => {});

h1.addEventListener("animationend", (e) => {});
