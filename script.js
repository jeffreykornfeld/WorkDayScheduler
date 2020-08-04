$("#currentDay").text(moment().format("ddd MMMM Do"));


var currentHour = moment().format("H");
//holds values from localstorage
var toDoList =  JSON.parse(localStorage.getItem("toDoList"))|| {
  nine: "",
  ten: "",
  eleven: "",
  twelve: "",
  thirteen: "",
  fourteen: "",
  fifteen: "",
  sixteen: "",
  seventeen: ""
};


//get value of each row's hour
$(".time-block").each(function(){
  //console.log(this)
  var thisRow = $(this);
  var thisRowHour = parseInt(thisRow.attr("scheduleHour"));
  console.log(thisRowHour);
  //check each row's currentHour and add necessary Class
  if (thisRowHour == currentHour) {
    thisRow.addClass("present");
  }
  if (thisRowHour < currentHour) {
    thisRow.addClass("past");
  }
  if (thisRowHour > currentHour) {
    thisRow.addClass("future");
  }
});

//textContent for values
document.getElementById("nine").textContent = toDoList.nine
document.getElementById("ten").textContent = toDoList.ten
document.getElementById("eleven").textContent = toDoList.eleven
document.getElementById("twelve").textContent = toDoList.twelve
document.getElementById("thirteen").textContent = toDoList.thirteen
document.getElementById("fourteen").textContent = toDoList.fourteen
document.getElementById("fifteen").textContent = toDoList.fifteen
document.getElementById("sixteen").textContent = toDoList.sixteen
document.getElementById("seventeen").textContent = toDoList.seventeen

//button saves values to localstorage
$("button").click(function(e){
  console.log("e.target.value", e.target.value)
  var hour = e.target.value
  var task = document.getElementById(hour).value
  console.log("text: ",task)
  toDoList[hour] = task
  localStorage.setItem("toDoList", JSON.stringify(toDoList)); 
  console.log(toDoList)

})


