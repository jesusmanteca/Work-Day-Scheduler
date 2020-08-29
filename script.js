// How do I win?
// GIVEN I am using a daily planner to create a schedule

// TIME DISPLAY
// branch: feature/time-display
// WHEN I open the planner... THEN the current day is displayed at the top of the calendar

var currentDay = moment().format('dddd, MMMM Do YYYY')
var currentHour = moment().format('h')
console.log(currentHour)
$("#currentDay").replaceWith(currentDay)

// DAY CALENDAR VIEW
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours

// CALENDAR COLOR CODE
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
    //grab the data-hour row information and match it with the current hour, if it's a match, change the css to .present in order to highlight the back
    // similarly, if the hour has passed, then change the background to .past and for the future, change the background to the css .future

var currentTimeIs9 = $(".time-block-9").data("hour").toString()
var currentTimeIs10 = $(".time-block-10").data("hour").toString()
var currentTimeIs11 = $(".time-block-11").data("hour").toString()
var currentTimeIs12 = $(".time-block-12").data("hour").toString()
var currentTimeIs1 = $(".time-block-1").data("hour").toString()
var currentTimeIs2 = $(".time-block-2").data("hour").toString()
var currentTimeIs3 = $(".time-block-3").data("hour").toString()
var currentTimeIs4 = $(".time-block-4").data("hour").toString()
var currentTimeIs5 = $(".time-block-5").data("hour").toString()


if (currentTimeIs9 == currentHour) {
    console.log("it's 9am")
    $("#textArea9").css("background-color", "salmon")
    $("#textArea10").css("background-color", "palegreen")
    $("#textArea11").css("background-color", "palegreen")
    $("#textArea12").css("background-color", "palegreen")
    $("#textArea1").css("background-color", "palegreen")
    $("#textArea2").css("background-color", "palegreen")
    $("#textArea3").css("background-color", "palegreen")
    $("#textArea4").css("background-color", "palegreen")
    $("#textArea5").css("background-color", "palegreen")

}
if (currentTimeIs10 == currentHour) {
    console.log("it's 10am")
    $("#textArea9").css("background-color", "lightgray")
    $("#textArea10").css("background-color", "salmon")
    $("#textArea11").css("background-color", "palegreen")
    $("#textArea12").css("background-color", "palegreen")
    $("#textArea1").css("background-color", "palegreen")
    $("#textArea2").css("background-color", "palegreen")
    $("#textArea3").css("background-color", "palegreen")
    $("#textArea4").css("background-color", "palegreen")
    $("#textArea5").css("background-color", "palegreen")
}
if (currentTimeIs11 == currentHour) {
    console.log("it's 11am")
    $("#textArea9").css("background-color", "lightgray")
    $("#textArea10").css("background-color", "lightgray")
    $("#textArea11").css("background-color", "salmon")
    $("#textArea12").css("background-color", "palegreen")
    $("#textArea1").css("background-color", "palegreen")
    $("#textArea2").css("background-color", "palegreen")
    $("#textArea3").css("background-color", "palegreen")
    $("#textArea4").css("background-color", "palegreen")
    $("#textArea5").css("background-color", "palegreen")
}
if (currentTimeIs12 == currentHour) {
    console.log("it's 12pm")
    $("#textArea9").css("background-color", "lightgray")
    $("#textArea10").css("background-color", "lightgray")
    $("#textArea11").css("background-color", "lightgray")
    $("#textArea12").css("background-color", "salmon")
    $("#textArea1").css("background-color", "palegreen")
    $("#textArea2").css("background-color", "palegreen")
    $("#textArea3").css("background-color", "palegreen")
    $("#textArea4").css("background-color", "palegreen")
    $("#textArea5").css("background-color", "palegreen")
}
if (currentTimeIs1 == currentHour) {
    console.log("it's 1pm")
    $("#textArea9").css("background-color", "lightgray")
    $("#textArea10").css("background-color", "lightgray")
    $("#textArea11").css("background-color", "lightgray")
    $("#textArea12").css("background-color", "lightgray")
    $("#textArea1").css("background-color", "salmon")
    $("#textArea2").css("background-color", "palegreen")
    $("#textArea3").css("background-color", "palegreen")
    $("#textArea4").css("background-color", "palegreen")
    $("#textArea5").css("background-color", "palegreen")
}
if (currentTimeIs2 == currentHour) {
    console.log("it's 2pm")
    $("#textArea9").css("background-color", "lightgray")
    $("#textArea10").css("background-color", "lightgray")
    $("#textArea11").css("background-color", "lightgray")
    $("#textArea12").css("background-color", "lightgray")
    $("#textArea1").css("background-color", "lightgray")
    $("#textArea2").css("background-color", "salmon")
    $("#textArea3").css("background-color", "palegreen")
    $("#textArea4").css("background-color", "palegreen")
    $("#textArea5").css("background-color", "palegreen")
}
if (currentTimeIs3 == currentHour) {
    console.log("it's 3pm")
    $("#textArea9").css("background-color", "lightgray")
    $("#textArea10").css("background-color", "lightgray")
    $("#textArea11").css("background-color", "lightgray")
    $("#textArea12").css("background-color", "lightgray")
    $("#textArea1").css("background-color", "lightgray")
    $("#textArea2").css("background-color", "lightgray")
    $("#textArea3").css("background-color", "salmon")
    $("#textArea4").css("background-color", "palegreen")
    $("#textArea5").css("background-color", "palegreen")
}
if (currentTimeIs4 == currentHour) {
    console.log("it's 4pm")
    $("#textArea9").css("background-color", "lightgray")
    $("#textArea10").css("background-color", "lightgray")
    $("#textArea11").css("background-color", "lightgray")
    $("#textArea12").css("background-color", "lightgray")
    $("#textArea1").css("background-color", "lightgray")
    $("#textArea2").css("background-color", "lightgray")
    $("#textArea3").css("background-color", "lightgray")
    $("#textArea4").css("background-color", "salmon")
    $("#textArea5").css("background-color", "palegreen")
}
if (currentTimeIs5 == currentHour) {
    console.log("it's 5pm")
    $("#textArea9").css("background-color", "lightgray")
    $("#textArea10").css("background-color", "lightgray")
    $("#textArea11").css("background-color", "lightgray")
    $("#textArea12").css("background-color", "lightgray")
    $("#textArea1").css("background-color", "lightgray")
    $("#textArea2").css("background-color", "lightgray")
    $("#textArea3").css("background-color", "lightgray")
    $("#textArea4").css("background-color", "lightgray")
    $("#textArea5").css("background-color", "salmon")
}

// ADD LOCAL STORAGE
// WHEN I refresh the page
// THEN the saved events persist
// User is able to update each block 
// each block is highlighted 
// When I click save, i want the information to get passed on to local storage

var getSchedule = function(){

    var localStorageKey; 
    var currentTextArea;

    for (let i = 1; i < 13; i++) {
        if (i === 6 || i === 7 || i === 8) {
            continue
        }
        currentTextArea = "#textArea" + i;
        if (i >= 9 && i < 12){
            localStorageKey = i + "AM"
        }
        else { 
            localStorageKey = i + "PM"
        }
        $(currentTextArea).text(localStorage.getItem(localStorageKey))  
    }
}
getSchedule();


var loadSchedule = function(storeData, storeTime){

    localStorage.setItem(storeTime, storeData);
}

$(document).ready(function () {
    $(".saveBtn").click(function(){
        //get the value from the input box and time and store it as a variable
        var storeData = $(this).siblings("textarea").val().trim();
        var storeTime = $(this).siblings("div").text().trim();
        console.log("Data Text:", storeTime, storeData)

        //push to dayTask list the data from the StoreData

        loadSchedule(storeData, storeTime)

        // Save the to-dos into localStorage
        // We need to use JSON.stringify to turn the list from an array into a string


    })
});






// when i click save, get the parent, get me the data hour, put that into a variable, set the variable into the local storage


//Ask during office hours
// making the timeblocks draggable
// $(".inputBlock").sortable(
//     {
//         connectWith: $(".inputBlock")
//     }
// )