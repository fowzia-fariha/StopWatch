        // Button References
        let startBtn = document.getElementById('start');
        let stopBtn = document.getElementById('stop');
        let resetBtn = document.getElementById('reset');

        // Stopwatch variables
        let hour = 0, minute = 0, second = 0, count = 0, timer = false;

        // Start Button
        startBtn.addEventListener('click', function () {
            timer = true;
            stopWatch();
        });

        // Stop Button
        stopBtn.addEventListener('click', function () {
            timer = false;
        });

        // Reset Button
        resetBtn.addEventListener('click', function () {
            timer = false;
            hour = 0; minute = 0; second = 0; count = 0;
            document.getElementById('hr').innerHTML = "00";
            document.getElementById('min').innerHTML = "00";
            document.getElementById('sec').innerHTML = "00";
            document.getElementById('count').innerHTML = "00";
        });

        // Stopwatch Function
        function stopWatch() {
            if (timer) {
                count++;
                if (count == 100) { second++; count = 0; }
                if (second == 60) { minute++; second = 0; }
                if (minute == 60) { hour++; minute = 0; second = 0; }

                document.getElementById('hr').innerHTML = hour < 10 ? "0" + hour : hour;
                document.getElementById('min').innerHTML = minute < 10 ? "0" + minute : minute;
                document.getElementById('sec').innerHTML = second < 10 ? "0" + second : second;
                document.getElementById('count').innerHTML = count < 10 ? "0" + count : count;

                setTimeout(stopWatch, 10);
            }
        }
    
