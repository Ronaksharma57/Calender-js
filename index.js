const current = new Date();
const date = current.getDate();
const month = current.getMonth();
const year = current.getFullYear();
const daysList = document.querySelectorAll(".days");
function dateOfFirstDay(month, year) {
  daysList.forEach((ele) => {
    ele.innerHTML = "";
  });
  const total = new Date(`${month + 1} 1, ${year} 23:15:30`);
  const day = total.getDay();
  fillDates(day, month, year); 
}
function fillDates(day, month, year) {
  if (
    month === 0 ||
    month == 2 ||
    month == 4 ||
    month == 6 ||
    month == 7 ||
    month == 9 ||
    month == 11
  ) {
    let count = 1;
    for (var i = day; i < 31 + day; i++) {
      if (i >= day) {
        daysList[i].innerText = count;
        count++;
      }
    }
  } else if (month == 1) {
    let count = 1;
    if (year % 4 === 0) {
      for (var i = day; i < 29 + day; i++) {
        if (i >= day) {
          daysList[i].innerText = count;
          count++;
        }
      }
    } else {
      for (var i = day; i < 28 + day; i++) {
        if (i >= day) {
          daysList[i].innerText = count;
          count++;
        }
      }
    }
  } else {
    let count = 1;
    for (var i = day; i < 30 + day; i++) {
      if (i >= day) {
        daysList[i].innerText = count;
        count++;
      }
    }
  }
  highlightColor(date);
}
dateOfFirstDay(month, year);
function highlightColor(date) {
    daysList.forEach(ele=>ele.classList.remove("active"))
  daysList.forEach((ele) => {
    if (ele.innerHTML == date) {
      ele.classList.add("active");
    }
  });
}
function fillingYears() {
  const yearList = document.querySelector(".select-year");
  for (let i = 1900; i < 2100; i++) {
    const option=document.createElement("option")
    option.innerText=i;
    yearList.appendChild(option)
    
  }
}
fillingYears();
function takeinputs(){
    const month=document.querySelector(".select-month").value;
    const year=document.querySelector(".select-year").value;
    if(month==="Select Month"){
        const newmonth=new Date().getMonth();
        dateOfFirstDay(+newmonth,+year)
    }
    else if(year==="Select Year"){
      const newyear=new Date().getFullYear();
      dateOfFirstDay(+month,+newyear);
    }
    else{
        dateOfFirstDay(+month,+year)
    }
}
document.querySelector(".select-month").addEventListener("change",takeinputs)
document.querySelector(".select-year").addEventListener("change",takeinputs)
function ValidateDate(e) {
    e.preventDefault();
    const date=document.querySelector(".EnterDate")
    highlightColor(date.value)
    date.value=""
}