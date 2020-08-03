$("#currentDay").text(moment().format("ddd MMMM Do"));


var currentHour = moment().format("H");
//holds values from localstorage
var toDoList = {
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

// console.log($(".time-block"))

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
function getSchedule(){

}

$(document).ready(function(){
toDoList = localStorage.getItem("toDoList", JSON.stringify(toDoList));
getSchedule()

});

$("button").click(function(e){
  // all buttons and text areas need ids and 
  // values that match the keys names of the todolist variable
  console.log("e.target.value", e.target.value)
  var hour = e.target.value
  var task = document.getElementById(hour).value
  console.log("text: ",task)
  toDoList[hour] = task
  localStorage.setItem("toDoList", JSON.stringify(toDoList)); 
  console.log(toDoList)

})


