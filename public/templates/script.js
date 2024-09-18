const header = document.querySelector(".calendar h3");
const dates = document.querySelector(".dates");
const navs = document.querySelectorAll("#prev, #next");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const culturalEvents = {
  "1-14": "Pongal (Tamil Nadu)",
  "1-26": "Republic Day",
  "2-10": "Vasant Panchami",
  "2-21": "Maha Shivaratri",
  "3-10": "Holi",
  "3-25": "Ugadi (Andhra Pradesh, Karnataka)",
  "4-14": "Baisakhi (Punjab)",
  "4-14": "Tamil New Year",
  "5-1": "Maharashtra Day",
  "6-20": "Rath Yatra (Odisha)",
  "8-15": "Independence Day",
  "8-22": "Onam (Kerala)",
  "9-2": "Ganesh Chaturthi (Maharashtra)",
  "10-2": "Gandhi Jayanti",
  "10-24": "Dussehra",
  "11-12": "Diwali",
  "12-25": "Christmas",
  "12-31": "Goa Liberation Day",
};

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

function renderCalendar() {
  const start = new Date(year, month, 1).getDay();
  const endDate = new Date(year, month + 1, 0).getDate();
  const end = new Date(year, month, endDate).getDay();
  const endDatePrev = new Date(year, month, 0).getDate();

  let datesHtml = "";

  for (let i = start; i > 0; i--) {
    datesHtml += `<li class="inactive">${endDatePrev - i + 1}</li>`;
  }

  for (let i = 1; i <= endDate; i++) {
    let className =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? ' class="today"'
        : "";

    const eventKey = `${month + 1}-${i}`;
    const event = culturalEvents[eventKey];

    if (event) {
      className = className ? className + ' event' : ' class="event"';
      datesHtml += `<li${className}><span>${i}</span><span class="event-name">${event}</span></li>`;
    } else {
      datesHtml += `<li${className}>${i}</li>`;
    }
  }

  for (let i = end; i < 6; i++) {
    datesHtml += `<li class="inactive">${i - end + 1}</li>`;
  }

  dates.innerHTML = datesHtml;
  header.textContent = `${months[month]} ${year}`;
}

navs.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const btnId = e.target.id;

    if (btnId === "prev" && month === 0) {
      year--;
      month = 11;
    } else if (btnId === "next" && month === 11) {
      year++;
      month = 0;
    } else {
      month = btnId === "next" ? month + 1 : month - 1;
    }

    date = new Date(year, month, new Date().getDate());
    year = date.getFullYear();
    month = date.getMonth();

    renderCalendar();
  });
});

renderCalendar();
