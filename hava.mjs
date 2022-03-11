import  alt from 'alt';
import axios from 'axios';


let sehir = 'Istanbul'  //City To Collect Weather Data
let api='YourApiKey'     //Api Key Here
let url=`https://api.openweathermap.org/data/2.5/weather?q=${sehir}&appid=${api}`
const arti = await axios.get(url); 
const son = arti.data.weather[0].main;
let currentWeatherType = await getWeatherType();

  
     function getWeatherType(){
        switch(son){
            case 'Drizzle'      : return 8;
            case 'Clear'        : return 1;
            case 'Clouds'       : return 2;
            case 'Rain'         : return 6;
            case 'Thunderstorm' : return 7;
            case 'Thunder'      : return 7;
            case 'Foggy'        : return 4;
            case 'Fog'          : return 4;
            case 'Mist'         : return 4;
            case 'Smoke'        : return 4;
            case 'Smog'         : return 3;
            case 'Overcast'     : return 5;
            case 'Snowing'      : return 10;
            case 'Snow'         : return 10;
            case 'Blizzard'     : return 11;
            default             : return 1;
        }
    }
    
   setInterval(syncNewData, 300000); //milisecond time to update data

    function syncNewData(){
        
            alt.Player.all.forEach((player)=>{
                player.setWeather(currentWeatherType);
                alt.log("Weather data updated");
            });
        
    }

    
         alt.on('playerConnect', (player) => {
            player.setWeather(currentWeatherType);
            alt.log(son);
            setDate(player);
        });

    function setDate(player){
            const currentDate = new Date();
            player.setDateTime(currentDate.getDate(), currentDate.getMonth(), currentDate.getFullYear(),
                currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
        }
    



    

