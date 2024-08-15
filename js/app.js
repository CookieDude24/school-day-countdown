function countdown(startDate, endDate) {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = end - now;

    if (distance < 0) {
      document.getElementById("countdown").innerHTML = "EXPIRED";
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
