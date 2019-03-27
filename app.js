window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long=position.coords.latitude;
            lat=position.coords.longitude;

            //console.log(position);
            //const proxy="https://cors-anywhere.herokuapp.com/";
            const proxy="https://crossorigin.me/";
            const api=`${proxy}https://api.darksky.net/forecast/2bf53a829d6d6c1febae836ee93774fe/${lat},${long}`;
            console.log(api);
            console.log('hey');
            fetch(api)
            .then(response=>{
                return response.json();
               // console.log('hi');
            })
            .then(data=>{
                console.log(data);
            })
        
        });
    } else {
        h1.textContent = "Error";
    }
});