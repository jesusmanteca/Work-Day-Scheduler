var currentDay = moment().format('dddd, MMMM Do YYYY')
var currentHour = moment().hours()
$("#currentDay").replaceWith(currentDay)

function updateColors(){
    $(".time-color").each(function(){
        var thisBlock = Number($(this).attr("data-hour"))
        if (thisBlock === currentHour) {
            $(this).css("background-color", "salmon")
        } else if (thisBlock < currentHour){
            $(this).css("background-color", "lightgray")
        }else if (thisBlock > currentHour){
            $(this).css("background-color", "lightgreen")
        }
    })
}
updateColors();

// setting intervals for every 15 minutes to refresh the color codes
var intervalID = window.setInterval(updateColors, 900000);

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

        //push to dayTask list the data from the StoreData

        loadSchedule(storeData, storeTime)

        


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