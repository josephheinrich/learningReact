import { useState, useEffect } from "react";
import axios from "axios";

function WeatherRenderProps(props) {
    const weatherAPIKey = "1862033e825e661a5f9d18c2ede377cb";
    const weatherURL = "http://api.openweathermap.org/data/2.5/weather?zip=47401&appid=" + weatherAPIKey;

    const [isLoading, setIsloading] = useState(false);
    const [wthr, setWthr] = useState({
        bloomingtonWthr: [],
        louisvilleWthr: [],
        pasadenaWthr: []
    })

    const [cityData, setCityData] = useState({});

    const fetchData = () => {
        const bloomingtonURL = "http://api.openweathermap.org/data/2.5/weather?zip=47401&appid=" + weatherAPIKey;
        const louisvilleURL = "http://api.openweathermap.org/data/2.5/weather?zip=40202&appid=" + weatherAPIKey;
        const pasadenaURL = "http://api.openweathermap.org/data/2.5/weather?zip=91001&appid=" + weatherAPIKey;

        Promise.all([
            axios.get(bloomingtonURL),
            axios.get(louisvilleURL),
            axios.get(pasadenaURL)
        ]).then((results) => {       
            setWthr({
              bloomingtonWthr: results[0].data.main,
              louisvilleWthr: results[1].data.main,
              pasadenaWthr: results[2].data.main
            });

            setIsloading(false);

            setCityData(results);
              
          })
          .catch((err) => {
            setIsloading(true);
            console.log(err);
          });
    }

    useEffect(() => {
        setIsloading(true);
        fetchData();
    }, [])


    var keys = Object.keys(wthr);
    var rows = [];
    var names = [];
    var weatherCondition = [];

    for (var i = 0; i < keys.length; i++) { 
        var key = (keys[i]);
        rows.push(wthr[key]);
    }

    for (var i = 0; i < cityData.length; i++) {
        names.push(cityData[i].data.name);
        weatherCondition.push(cityData[i].data.weather[0].description);
    }

    return props.children({
        rows: rows,
        names: names,
        weatherCondition: weatherCondition,
        isLoading: isLoading
    });
}

export default WeatherRenderProps;