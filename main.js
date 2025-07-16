// Function to update both time and date every second
function updateClock() {
  const now = new Date();

  // Get current time parts
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Format time with leading zeros
  const timeStr = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0'),
  ].join(':') + ` ${ampm}`;

  // Format date
  const dateStr = now.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Inject into DOM
  document.getElementById('clock').textContent = timeStr;
  document.getElementById('date').textContent = dateStr;
}

// Update every 1s
setInterval(updateClock, 1000);
updateClock();

// Theme toggle with emoji + text switch
const toggleBtn = document.getElementById('toggleMode');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  toggleBtn.textContent = isLight ? '🌙 Enable Dark Mode' : '☀️ Enable Light Mode';
});
