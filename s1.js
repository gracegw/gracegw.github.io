    function totalDays(month, year)
    {
        let d = new Date(year, month+1, 0);
        return d.getDate();
    }

    function loadCalendarDays()
    {
        //The Document method getElementById() returns an Element object 
        //representing the element whose id property matches the specified string
        //makes the element "calendarDays", give it content " "
        document.getElementById("calendarDays").innerHTML = "";

        var tmpDate = new Date(year, month, 0);
        var num = daysInMonth(month, year);
        var dayofweek = tmpDate.getDay();       // find where to start calendar day of week

        // create day prefixes
        for(var i = 0; i <= dayofweek; i++)
        {
            var d = document.createElement("div");
            d.classList.add("day");
            d.classList.add("blank");
            document.getElementById("calendarDays").appendChild(d);
        }

        // render the rest of the days
        for(var i = 0; i < num; i++)
        {
            var tmp = i + 1;
            var d = document.createElement("div");
            d.id = "calendarday_" + i;
            d.className = "day";
            d.innerHTML = tmp;
            document.getElementById("calendarDays").appendChild(d);
        }

        var clear = document.createElement("div");
        clear.className = "clear";
        document.getElementById("calendarDays").appendChild(clear);
    }
