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

// ADD LOCAL STORAGE
// WHEN I refresh the page
// THEN the saved events persist
// User is able to update each block 
// each block is highlighted 
// When I click save, i want the information to get passed on to local storage

// ADD EDIT TO TIME BLOCKS
// WHEN I click into a time block
// THEN I can enter an event
// ...
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
//editing the date when clicked: target the parent with the class name, tell it which element you're going to work with and make a function that edits the date
$(".time-block").on("click", "input", function(){
    // get current text by first creating a variable that holds that information
    var task = $(this)
      .text()
      .trim()
    // create new input element
    var taskInput = $("<input>")
      .attr("type", "text")
      
      .val(task);
    // swap out elements
    $(this).replaceWith(taskInput);
    // automatically focus on new element
    taskInput.trigger("focus");
  });
  // value of due date was changed
$(".list-group").on("blur", "input[type='text']", function() {
    // get current text
    var task = $(this)
      .val()
      .trim();
  
    // recreate span element with bootstrap classes
    var taskSpan = $("<input>")
      .text(task);
  
    // replace input with span element
    $(this).replaceWith(taskSpan);
  });





// when i click save, get the parent, get me the data hour, put that into a variable, set the variable into the local storage