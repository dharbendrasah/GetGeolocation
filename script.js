window.onload = function() {

    const btn = document.querySelector("#btn");
    const message = document.querySelector("#message");
    const location = document.querySelector("#location");
    const latitude = document.querySelector("#latitude");
    const longitude = document.querySelector("#longitude");
    const link = document.querySelector("#link");

    btn.addEventListener("click", function(event) {

        if(navigator.geolocation == false) {
            alert("Sorry You Browser Doesn't Support Geolocation API.\nPlease Try Again With Different Browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

        function successCallback(position) {
            message.innerHTML = "Location tracked successfully!";

            location.style.display = "block";
            latitude.innerHTML = `Latitude : ${position.coords.latitude}`;
            longitude.innerHTML = `Longitude : ${position.coords.longitude}`;

            // link.href = `https://www.latlong.net/c/?lat=${position.coords.latitude}&long=${position.coords.longitude}`;
            link.href = `https://www.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}`;
        }

        function errorCallback(error) {
            console.log(error);
            message.innerHTML = "Failed to track location!";
        }
    });

}