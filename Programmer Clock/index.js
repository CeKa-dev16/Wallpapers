function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const month = now.getMonth();
  const day = now.getDate();
  const year = now.getFullYear();
  const dayOfWeek = now.getDay();

  // Display the time parts in the corresponding span elements
  document.getElementById('hour').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minute').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('second').textContent = seconds.toString().padStart(2, '0');
  document.getElementById('day').textContent = day.toString().padStart(2, '0');
  document.getElementById('month').textContent = month.toString().padStart(2, '0');
  document.getElementById('year').textContent = year.toString().padStart(2, '0');

  // Convert month number to month name
  const monthNames = [
    "\"January\"", "\"February\"", "\"March\"",
    "\"April\"", "\"May\"", "\"June\"",
    "\"July\"", "\"August\"", "\"September\"",
    "\"October\"", "\"November\"", "\"December\""
  ];
  document.getElementById('monthName').textContent = monthNames[month];

  // Convert day number to day name
  const weekNames = [
    "\"Sunday\"", "\"Monday\"", "\"Tuesday\"",
    "\"Wednesday\"", "\"Thursday\"",
    "\"Friday\"", "\"Saturday\""
  ];
  document.getElementById('dayName').textContent = weekNames[dayOfWeek];

};

// Update the time every second
setInterval(updateTime, 1000);
