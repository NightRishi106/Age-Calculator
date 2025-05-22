flatpickr("#birthday",{
  dateFormat: "Y-m-d",
  maxDate: "today",
  // You can add more options here
});
const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const { years, months, days } = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${years} ${years === 1 ? "year" : "years"}, ${months} ${months === 1 ? "month" : "months"}, and ${days} ${days === 1 ? "day" : "days"} old`;
  }
}

function getAge(birthdayValue) {
  const today = new Date();
  const birthDate = new Date(birthdayValue);

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    // Get days in previous month
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years ,months, days};
}

btnEl.addEventListener("click", calculateAge);