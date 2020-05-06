let clock_hour = document.getElementsByClassName("clock_hour");
        let clock_min = document.getElementsByClassName("clock_min");
        let clock_sec = document.getElementsByClassName("clock_sec");

        setInterval(setDate,1000);
        setDate();

        function setDate(){
            let time = new Date();

            let sec = time.getSeconds();
            let secDeg = sec*6;

            let min = time.getMinutes();
            let minDeg = min*6;

            let hour = time.getHours();
            let hourDeg = hour*30;

            console.log(time);

            if(sec == 0||min==0||hour==12||hour==0){
                clock_sec[0].style.transition = "none";
            }
            else{
                clock_sec[0].style.transition = "0.1s";
            }

            clock_sec[0].style.transform = `rotate(${secDeg}deg) translate(-50%,0)`;
            clock_min[0].style.transform = `rotate(${minDeg}deg) translate(-50%,0)`;
            clock_hour[0].style.transform = `rotate(${hourDeg}deg) translate(-50%,0)`;
        }
