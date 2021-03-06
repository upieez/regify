var pathName = this.location.pathname
var newPathName = pathName.split("/");

const drawButton = document.querySelector("#drawButton");
const showAttendees = document.querySelector(".showWinner");
const messagePopup = document.querySelector(".message");

drawButton.addEventListener("click", function(event){
    var responseHandler = function() {
        const winnerList = JSON.parse(this.responseText).attendees
        drawButton.parentNode.removeChild(drawButton);

        var startTime = new Date().getTime();
        var interval = setInterval(function(){
        if(new Date().getTime() - startTime > 7000){
            let randomNumber = Math.floor(Math.random() * winnerList.length );
            showAttendees.innerHTML = `<strong>${winnerList[randomNumber].name}</strong> is the winner!`
            setTimeout(function(){
                messagePopup.innerHTML = `<div class="pyro"><div class="before"></div> CONGRATULATIONS!<div class="after"></div></div>`
            },1000);
            clearInterval(interval);
            return;
        }
        let randomNumber = Math.floor(Math.random() * winnerList.length);
            showAttendees.innerHTML = `<strong>${winnerList[randomNumber].name}</strong>`
        }, 150);

        // var timesRun = 0;
        // var interval = setInterval(function(){
        //     timesRun += 1;
        //     if(timesRun === 30){
        //         let randomNumber = Math.floor(Math.random() * winnerList.length );
        //         showAttendees.innerHTML = `<small>WINNER</small> is the winner!`
        //         clearInterval(interval);
        //     }

        // }, 100);
    };

    var request = new XMLHttpRequest();

    request.addEventListener("load", responseHandler);

    var url = `/events/${newPathName[2]}/attendees.json`;

    request.open("GET", url);
    request.send();
})