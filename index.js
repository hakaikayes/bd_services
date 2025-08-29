//navbar 
const state = {
  hearts: 0,
  copies: 0,
  coins: 100
};

const heartsSpan = document.getElementById("hearts");
const copySpan = document.getElementById("copy-count");
const coinsSpan = document.getElementById("coins");
const historyList = document.getElementById("history");

//heart 
const heartIcons = document.querySelectorAll(".card .inside-card i.fa-heart");

for (const icon of heartIcons) {
  icon.onclick = function () {
    state.hearts = state.hearts + 1;
    heartsSpan.innerHTML = state.hearts + " ❤️";

    this.classList.remove("fa-regular");
    this.classList.add("fa-solid");
  };
}

//call button
const callButtons = document.getElementsByClassName("call");

for (const btn of callButtons) {
  btn.onclick = function () {
    const card = this.parentNode.parentNode;
    const serviceName = card.getElementsByTagName("h3")[0].innerHTML;
    const serviceNumber = card.getElementsByClassName("number")[0].innerHTML;

    if (state.coins < 20) {
      alert("Not enough coins! You have " + state.coins + ", need 20.");
      return;
    }

    state.coins = state.coins - 20;
    coinsSpan.innerHTML = state.coins + " 🪙";
    alert("Calling " + serviceName + " at " + serviceNumber);

    const now = new Date();
    const timeString = now.toLocaleTimeString();

    const item = document.createElement("div");
    item.className = "history-item";
    item.innerHTML =
      "<strong>" + serviceName + "</strong> — " + serviceNumber + " (" + timeString + ")";
    historyList.appendChild(item);
  };
}

//clear history
const clearBtn = document.getElementById("clear-history");
clearBtn.onclick = function () {
  historyList.innerHTML = "";
};

//copy button 
