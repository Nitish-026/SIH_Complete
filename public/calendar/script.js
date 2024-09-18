const header = document.querySelector(".calendar h3");
const dates = document.querySelector(".dates");
const navs = document.querySelectorAll("#prev, #next");
const eventImage = document.querySelector("#event-image");
const eventSource = document.querySelector("#event-source");

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

const culturalEvents ={
  "1-14": { name: "Pongal (Tamil Nadu)", image: "https://th.bing.com/th/id/OIP.zACdf5HN0qHVvUQWfuSUeAHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7", source: "https://en.wikipedia.org/wiki/Pongal_(festival)" },
  "1-26": { name: "Republic Day", image: "https://tse3.mm.bing.net/th?id=OIP.EaBr32IgRPVo5rf73OdcKQHaEK&pid=Api&P=0&h=180", source: "https://en.wikipedia.org/wiki/Republic_Day_(India)" },
  "2-10": { name: "Vasant Panchami", image: "https://th.bing.com/th/id/OIP.mJaYVYq75w7KAyCKLjihtAHaHa?rs=1&pid=ImgDetMain", source: "https://en.wikipedia.org/wiki/Vasant_Panchami" },
  "2-21": { name: "Maha Shivaratri", image: "https://th.bing.com/th/id/OIP.e5_DzOKcz4C875VG3we5qQHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", source: "https://en.wikipedia.org/wiki/Maha_Shivaratri" },
  "3-25": { name: "Holi", image: "https://th.bing.com/th/id/OIP.HtsuhIEMjehy-eH3XNTitQHaFW?rs=1&pid=ImgDetMain", source: "https://en.wikipedia.org/wiki/Holi" },
  "7-7": { name: "Rath Yatra", image: "https://images.indianexpress.com/2017/06/rath-yatra_759.jpg?resize=150", source: "https://en.wikipedia.org/wiki/Republic_Day_(India)" },
  "8-15": { name: "Independence day", image: "https://img.freepik.com/premium-photo/little-child-holding-indian-flag-indian-independence-day-republic-day-background-white_244157-6639.jpg", source: "https://en.wikipedia.org/wiki/Independence_Day_(India)" },
  "8-19": { name: "Raksha Bandhan", image: "https://www.yearindays.com/media/large/raksha-bandhan.jpg", source: "https://en.wikipedia.org/wiki/Raksha_Bandhan" },
  "4-13": { name: "Vaisakhi", image: "https://www.oneindia.com/img/2023/04/baisakhi-1681382455.jpg", source: "https://en.wikipedia.org/wiki/Vaisakhi" },
  "4-10": { name: "Eid-ul-Fitar", image: "https://static.toiimg.com/thumb/msid-99588495,width-1280,resizemode-4/99588495.jpg", source: "https://en.wikipedia.org/wiki/Eid_al-Fitr" },
  "5-23": { name: "Busha Purnima", image: "https://static.vecteezy.com/system/resources/previews/021/862/340/large_2x/buddha-purnima-vesak-day-background-buddha-statue-with-lotus-flower-and-candle-light-side-on-river-generative-ai-free-photo.jpeg", source: "https://en.wikipedia.org/wiki/Buddha%27s_Birthday" },
  "6-17": { name: "Bakrid", image: "https://images.assettype.com/thequint/2017-08/61bfb3a9-8e1a-4644-805d-f3502560c0ed/15fc2074-ae8d-4ead-918a-162065b52ffd.jpg", source: "https://en.wikipedia.org/wiki/Eid_al-Adha" },
  "7-17": { name: "Muharram", image: "https://th.bing.com/th/id/OIP.REGEHjc0mbcn0-zrw3-e2gHaEK?rs=1&pid=ImgDetMain", source: "https://en.wikipedia.org/wiki/Muharram" },
  "8-26": { name: "Janmasthami", image: "https://www.livemint.com/lm-img/img/2023/08/28/1600x900/Janmashtami_1693227138274_1693227138520.jpg", source: "https://en.wikipedia.org/wiki/Krishna_Janmashtami" },
  "9-7": { name: "Ganesh chaturthi", image: "https://th.bing.com/th/id/R.8db3f47a48ae00a5a3aceb0cebaae206?rik=O%2bzk2uA5qWz9OQ&riu=http%3a%2f%2fwww.happywalagift.com%2fwp-content%2fuploads%2f2015%2f09%2fWhy-Ganesh-Chaturthi-Celebrated.jpg&ehk=OOD219fJn9S06Law1SJ1eiZSSWYZFGElynvLdn%2bur%2fY%3d&risl=&pid=ImgRaw&r=0", source: "https://en.wikipedia.org/wiki/Ganesh_Chaturthi" },
  "9-15": { name: "Onam", image: "https://imgeng.jagran.com/images/2022/sep/onamboatrace1662459500562.jpg", source: "https://en.wikipedia.org/wiki/Onam" },
  "10-2": { name: "Mahatma Gandhi Jayanti", image: "https://img.freepik.com/premium-photo/gandhi-jayanti_714173-53.jpg", source: "https://en.wikipedia.org/wiki/Gandhi_Jayanti" },
  "10-12": { name: "Durga Puja", image: "https://static.toiimg.com/photo/78792655.cms", source: "https://en.wikipedia.org/wiki/Durga_Puja" },
  "10-31": { name: "Diwali", image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/11/04/1003926-diwali-ani.jpg", source: "https://en.wikipedia.org/wiki/Diwali" },
  "11-7": { name: "Chhat Puja", image: "https://images.herzindagi.info/image/2019/Oct/chhath-puja-prasad-are-beneficial-for-health-main.jpg", source: "https://en.wikipedia.org/wiki/Chhath" },
  "11-15": { name: "Guru Nanak Jayanti", image: "https://imgk.timesnownews.com/media/PTI28-11-2020_000128BL.jpg", source: "https://en.wikipedia.org/wiki/Guru_Nanak_Gurpurab" },
  "12-25": { name: "Christmas", image: "https://www.bellybelly.com.au/wp-content/uploads/2022/12/10-Family-Christmas-Traditions-That-Dont-Break-The-Bank.jpg", source: "https://en.wikipedia.org/wiki/Christmas" },
  "12-31": { name: "New Year's Eve", image: "https://www.fodors.com/wp-content/uploads/2020/11/NYEFestivities__HERO_shutterstock_1266868570-scaled.jpg", source: "https://en.wikipedia.org/wiki/New_Year%27s_Eve" },
  // Add more events here
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
      datesHtml += `<li${className} data-event-key="${eventKey}"><span>${i}</span><span class="event-name">${event.name}</span></li>`;
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

function showEventDetails(eventKey) {
  const event = culturalEvents[eventKey];
  if (event) {
    eventImage.src = event.image;
    eventSource.href = event.source;
    eventSource.textContent = `Learn more about ${event.name}`;
  } else {
    eventImage.src = "";
    eventSource.href = "";
    eventSource.textContent = "";
  }
}

dates.addEventListener("click", (e) => {
  if (e.target.closest("li.event")) {
    const eventKey = e.target.closest("li").getAttribute("data-event-key");
    showEventDetails(eventKey);
  }
});

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

