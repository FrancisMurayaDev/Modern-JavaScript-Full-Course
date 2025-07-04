const dateInput = document.querySelector(".js-datetime");
const startBtn = document.querySelector(".js-start");
const countdownDisplay = document.querySelector(".js-countdown");

startBtn.addEventListener("click", () => {
  const targetDate = new Date(dateInput.value);
  startCountdown(targetDate);
});

function startCountdown(targetDate) {
  const interval = setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(interval);
      countdownDisplay.textContent = "⏰ Time’s up!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}
