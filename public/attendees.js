var pathName = this.location.pathname
var newPathName = pathName.split("/");

const scanBox = document.querySelector("#scanForm");
const submitButton = document.querySelector("#submitButton");
const showAttendees = document.querySelector(".showAttendees");

scanBox.addEventListener("keypress", function(event){
    if(event.which === 13 || event.keyCode === 13) {
    var responseHandler = function() {
        var result = (this.responseText) ? JSON.parse(this.responseText).rows[0] : null
        if (result) {
            document.querySelector('#scanForm').value = ""
            showAttendees.innerHTML = `<h2>${result.name} registered!</h2>`
        } else {
            document.querySelector('#scanForm').value = ""
            showAttendees.innerHTML = `<h2>Invalid ID!</h2>`
        }
    };

    var request = new XMLHttpRequest();

    request.addEventListener("load", responseHandler);

    var url = `/events/${newPathName[2]}/scan`;

    var scan = document.querySelector('#scanForm').value

    var data = {scan}

    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));
    }
})