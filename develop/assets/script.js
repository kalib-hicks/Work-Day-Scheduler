// date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);


// button clicks
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // local storage 
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

       
    }

    timeTracker();
})  