let time1=document.getElementById("time1");
let time2=document.getElementById("time2");
let timeLen=document.getElementById("button");
let start=document.getElementById("Start");
let message=document.getElementById("message");
let body=document.getElementById("body");

let originalTime;
let x;
let t2;
let t1;

message.innerText="Let's Focus";
time1.innerText="00";
time2.innerText="00";
let buzzer = new Audio("lost_in0_paradise.mp3");
////////////////
timeLen.addEventListener('click' ,(e)=>
{
    console.log(e.target.innerText);

    if(e.target.innerText=="Short"){
        time1.innerText="15";
        time2.innerText="00";
        originalTime=15;
        buzzer.pause();
        message.innerText="Let's Focus";
         body.style.cssText =
    "background-image: url(https://res.cloudinary.com/doxampopt/image/upload/v1747237068/1226356_qrsath.jpg); background-size: contain; background-repeat: no-repeat;";
    }

    if(e.target.innerText=="Medium"){
        time1.innerText="30";
        time2.innerText="00";
        originalTime=30;
        buzzer.pause();
        message.innerText="Let's Focus";
         body.style.cssText =
    "background-image: url(https://res.cloudinary.com/doxampopt/image/upload/v1747237068/1226356_qrsath.jpg); background-size: contain; background-repeat: no-repeat;";
    }

    if(e.target.innerText=="Long"){
        time1.innerText="60";
        time2.innerText="00";
        originalTime=30;
        buzzer.pause();
        message.innerText="Let's Focus";
         body.style.cssText =
    "background-image: url(https://res.cloudinary.com/doxampopt/image/upload/v1747237068/1226356_qrsath.jpg); background-size: contain; background-repeat: no-repeat;";
    }
});

//////////////

start.addEventListener('click' ,(e)=>
{
    console.log(e.target.innerText);

    if(e.target.innerText=="Start"){

         x=setInterval(()=>{

            t2=parseInt(time2.innerText);
            t1=parseInt(time1.innerText);
            time2.innerText=t2+1;
            console.log(typeof parseInt(time2.innerText))

            if(time2.innerText==60){
            time1.innerText=t1-1;
            time2.innerText='00';
            }

            if(time1.innerText==0){
                 clearInterval(x);
                 time2.innerText="00"
                 time1.innerText="00";
                 message.innerText="Congo Monkey!!!"
                 buzzer.play();
                //  alert("times up");                 
            }

            let remainingSeconds = parseInt(time1.innerText) * 60 + parseInt(time2.innerText);
            let halfTimeSeconds = (originalTime * 60) / 2;

            if (remainingSeconds === halfTimeSeconds) {
                  body.style.cssText =
                 "background-image: url(https://res.cloudinary.com/doxampopt/image/upload/v1747250830/1335124_gecnj7.jpg); background-size: contain; background-repeat: no-repeat;";
                 }



        },1000)
    }

    if(e.target.innerText=="Stop"){

        clearInterval(x);
        time2.innerText="00"
         time1.innerText="00";
         buzzer.pause();
    }
});