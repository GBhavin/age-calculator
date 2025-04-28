document.getElementById('ageForm').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form refresh

  const birthdate = new Date(document.getElementById('birthdate').value);
  const today = new Date();

  if (birthdate > today) {
    document.getElementById('result').innerText = "⛔ Birthdate cannot be in the future!";
    document.getElementById('result').style.opacity = 1;
    return;
  }

  let years = today.getFullYear() - birthdate.getFullYear();
  let months = today.getMonth() - birthdate.getMonth();
  let days = today.getDate() - birthdate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById('result').innerHTML = `
    🎉 You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old!
  `;
  document.getElementById('result').style.opacity = 1;
});
