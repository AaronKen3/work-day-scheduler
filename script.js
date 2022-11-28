// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  let buttons = $(".saveBtn");

  buttons.on("click", function (event) {
    let parent = $(this).parent().attr("id");
    let description = $(this).siblings(".description").val();
    localStorage.setItem(parent, description);
  });

  let date = dayjs().format("MMM D, YYYY");
  $("#currentDay").text(date);

  $(".time-block").each(function () {
    $(this).removeClass("future");
    $(this).removeClass("past");
    $(this).removeClass("present");
    let hour = parseInt($(this).attr("id").split("-")[1]);

    if (hour > dayjs().hour()) {
      $(this).addClass("future");
    } else if (hour === dayjs().hour()) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });

  $("#hour-9").children(".description").val(localStorage.getItem("hour-9"));
  $("#hour-10").children(".description").val(localStorage.getItem("hour-10"));
  $("#hour-11").children(".description").val(localStorage.getItem("hour-11"));
  $("#hour-12").children(".description").val(localStorage.getItem("hour-12"));
  $("#hour-1").children(".description").val(localStorage.getItem("hour-1"));
  $("#hour-2").children(".description").val(localStorage.getItem("hour-2"));
  $("#hour-3").children(".description").val(localStorage.getItem("hour-3"));
  $("#hour-4").children(".description").val(localStorage.getItem("hour-4"));
  $("#hour-5").children(".description").val(localStorage.getItem("hour-5"));
  


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
