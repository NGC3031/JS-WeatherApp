window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription=document.querySelector(".temperature-description");
    let temperatureDegree=document.querySelector(".temperature-degree");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lat=position.coords.latitude;
            long=position.coords.longitude;

            const proxy='https://cors-anywhere.herokuapp.com/';
            const api =`${proxy}https://api.darksky.net/forecast/2bf53a829d6d6c1febae836ee93774fe/${lat},${long}`;
            console.log(api);
            //console.log(api2);
            console.log('hey');
            fetch(api)
            .then(response=>{
               return response.json();
                console.log('hi');
            })
            .then(data=>{
                console.log(data);
                const {temperature,summary}=data.currently;
                temperatureDegree.textContent=temperature;
                temperatureDescription.textContent=summary;
  })
        
        });
    } else {
        h1.textContent = "Error";
    }
});