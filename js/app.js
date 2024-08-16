function countdown(startDate, endDate) {
  const start = endDate
  const end = startDate

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = end - now;

    if (distance < 0) {
      document.getElementById("countdown_value").innerHTML = "EXPIRED";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown_value").innerHTML =
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const interval = setInterval(updateCountdown, 1000);
}
function oida(){
  window.document.getElementById("test").innerHTML="oida"
}
