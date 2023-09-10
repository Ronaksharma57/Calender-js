# Calender
This is a simple calender app that allows users to select a date. 
## Getting Started
To get started, clone the repository and install the dependencies.
## Usage
To use the app, simply click on the date you want to select. The date will be displayed in the input field. You can then click the "Enter" button to submit the date.
## Features
The app has the following features:
* A simple and easy-to-use interface
* The ability to select a date
* The ability to submit the date
## Future Enhancements
The app could be enhanced in the following ways:
* Adding the ability to select a range of dates
* Adding the ability to save dates
* Adding the ability to print dates
  
## Step 1: HTML
Create an HTML file and include the following code:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calender : Ronak sharma</title>
    <link rel="stylesheet" href="style.css"/>
</head>
<body>
    <div class="main">
        <div class="container">
            <section class="month-year">
             <select class="select-month">
                <option disabled selected>Select Month</option>
                <option value="0">January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
                <option value="4">May</option>
                <option value="5">June</option>
                <option value="6">July</option>
                <option value="7">August</option>
                <option value="8">September</option>
                <option value="9">October</option>
                <option value="10">November</option>
                <option value="11">December</option>
             </select>
             <select class="select-year">
                <option disabled selected>Select Year</option>
             </select>
            
            </section>
            <section class="calender">
                <ul class="week">
                    <li>sun</li>
                    <li>mon</li>
                    <li>tue</li>
                    <li>wed</li>
                    <li>thu</li>
                    <li>fri</li>
                    <li>sat</li>
                </ul>
                <ul class="day">
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                    <li class="days"></li>
                </ul>
            </section>
            <form class="date" onsubmit="ValidateDate(event)">
             <input type="number" placeholder="Enter Date" min="1" max="31" required class="EnterDate"/>
             <input type="submit" class="submit" value="Enter"/>
            </form>
        </div>
    </div>
    <script src="index.js"></script>
</body>
</html>
```

 ## Step 2: CSS
Create a CSS file and include the following code:
```
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.main{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background:url("https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FsZW5kYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60");
    background-size: cover;
}
.container{
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 0px 8px white;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.7);
}
.month-year{
    width: 96%;
    height: 15%;
    display: flex;
    align-items: center;
   
}
.selected-month-year{
    color: white;
}
.calender{
    width: 96%;
    height: 60%;
}
.calender ul{
    display: flex;
    list-style: none;
    flex-wrap: wrap;

}
.calender ul li {
    width: calc(100%/7);
    text-align: center;
   padding-top: 1.5%;
   color: white;
}
.week{
    height: 15%;
    font-size: larger;
}
.week>li{
    background-color: rgba(255, 69, 0,0.5);
}
.week>li:hover{
    background-color: royalblue;
    color: white;
}
.day{
    height: 85%;
}
.day>li:hover{
    background-color: white;
    color: black;
}
.active{
    background-color: green ;
    border-radius: 5px;
}
.date{
    /* border: 1px solid yellow; */
    width: 96%;
    height: 15%;
}
select{
    font-size: larger;
    padding: 1%;
    margin-right: 2%;
}
form{
    display: flex;
    align-items: center;
}
.EnterDate{
    font-size: larger;
    padding: 1%;
    margin-right: 2%;
    width: 20%;
}
.submit{
    font-size: larger;
    padding: 1%;
    background-color: royalblue;
    color: white;
    border: none;
}

```
 ## Step 3: JavaScript
Create a JavaScript file and include the following code:
```
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
```
