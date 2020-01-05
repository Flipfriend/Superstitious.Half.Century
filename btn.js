$(document).ready(function () {

    $('#pBtn').click(function () {
        
        $('.addon').toggle("fade",function(){
            console.log('added message')

        });
    })

    // coded by Tyler Proctor
    // Set the date we're counting down to
    var countDownDate = new Date("July 25, 2020 18:30:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        var totalDays = Math.floor(1000 * 60 * 60 * 24);

        // Time calculations for days, hours, minutes and seconds
        var months = Math.floor(distance / (30 * (1000 * 60 * 60 * 24)));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var currentMonth = new Date().getUTCMonth();
        currentMonth = 6 - currentMonth;

        //   console.log("currentMonth: ");
        //   console.log(currentMonth);
        //   console.log();

        //Check if today's date is greater than the 25th
        function checkDate(today, numberOfDaysCurrentMonth) {
            if (today == 25) {
                return 0;
            } else if (today < 25) {
                numberOfDaysCurrentMonth = 25;
                return numberOfDaysCurrentMonth - today;
            } else if (today > 25) {
                //!!!!! NOTE- If this else statement is triggered, there is a possibility that we will need to subtract 1 from the month value that displays in the clock !!!!!
                return numberOfDaysCurrentMonth - today + 25;
            }
        }
        function calculateMonths(currentMonth) {
            var numberOfDaysCurrentMonth = 0;
            var today = new Date().getDate();
            var totalDaysInMonths = {
                "January": 31,
                "February": 29,
                "March": 31,
                "April": 30,
                "May": 31,
                "June": 30,
                "July": 25
            };


            switch (currentMonth) {

                //July
                case 0:
                    // console.log("The Month is July")
                    //Number of days is 25 for July because the event takes place on July 25th
                    return checkDate(today, totalDaysInMonths.July);

                //June 30
                case 1:
                    // console.log("The Month is June")
                    return checkDate(today, totalDaysInMonths.June);

                //May 31
                case 2:
                    // console.log("The Month is May")
                    return checkDate(today, totalDaysInMonths.May);

                //April 30
                case 3:
                    // console.log("The Month is April")
                    return checkDate(today, totalDaysInMonths.April);

                //March 31
                case 4:
                    // console.log("The Month is March")
                    return checkDate(today, totalDaysInMonths.March);

                //February 29
                case 5:
                    // console.log("The Month is February")
                    return checkDate(today, totalDaysInMonths.February);

                //January 31
                case 6:
                    // console.log("The Month is January")
                    return checkDate(today, totalDaysInMonths.January);
            }
        }
        var daysLeftInMonth = calculateMonths(currentMonth);
        // console.log("Days left in the month: ");
        // console.log(daysLeftInMonth);
        // console.log();


        // Display the result in the element with id="demo"
        document.getElementById("countDown").innerHTML = months + "m " + daysLeftInMonth + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
    });

})