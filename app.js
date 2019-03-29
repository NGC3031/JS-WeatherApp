//Based on DevEds video

window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let degreeSection = document.querySelector('.degree-section');
    let temperatureSection = document.querySelector('.temperature-section');

    // const temperatureSpan = document.querySelector('.temperature-section span');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            long = position.coords.longitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/2bf53a829d6d6c1febae836ee93774fe/${lat},${long}`;
            console.log(api);
            console.log('hey');
            fetch(api)
                .then(response => {
                    return response.json();
                    console.log('hi');
                })
                .then(data => {
                    console.log(data);
                    const {
                        temperature,
                        summary,
                        icon
                    } = data.currently;
                    //DOM updates
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;

                    let celcius = (temperature - 32) * (5 / 9);

                    setIcons(icon, document.querySelector('.icon'));
                    //console.log(temperatureSection.textContent);
                    //temp conversion
                    degreeSection.addEventListener('click', () => {
                        if (temperatureSection.textContent === 'F') {
                            temperatureSection.textContent = 'C';
                            temperatureDegree.textContent = celcius.toFixed(2);
                        } else {
                            temperatureSection.textContent = 'F';
                            temperatureDegree.textContent = temperature;
                        }
                    })
                })

        });
    } else {
        h1.textContent = "Error";
    }

    function setIcons(icon, iconID) {
        const skycons = new Skycons({
            color: "white"
        });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        console.log(currentIcon);
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);

    }
});