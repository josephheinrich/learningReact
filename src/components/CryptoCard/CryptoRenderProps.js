import {useState, useEffect} from 'react';
import axios from 'axios';

function CryptoRenderProps(props) {
    const [cryptoData, setCryptoData] = useState({
        btcData: [],
        ethData: [],
        bchData: [],
    });
    const [cryptoInfo, setCryptoInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
        setIsLoading(true);
        const btcURL = "https://api.coinbase.com/v2/prices/BTC-USD/buy";
        const ethURL = "https://api.coinbase.com/v2/prices/ETH-USD/buy";
        const bchURL = "https://api.coinbase.com/v2/prices/BCH-USD/buy";

        Promise.all([
            axios.get(btcURL),
            axios.get(ethURL),
            axios.get(bchURL)
        ]).then((results) => {
            setCryptoData({
                btcData: results[0].data.data,
                ethData: results[1].data.data,
                bchData: results[2].data.data,
            });
            setIsLoading(false);
            setCryptoInfo([results[0].data.data, results[1].data.data, results[2].data.data]);
        })
        .catch((err) => {
            console.log(err);
            setIsLoading(true);
        });
    }

    useEffect(() => {
        setCryptoData({
            isLoading: true
        })
        fetchData();

    }, [])

    var keys = Object.keys(cryptoData);
    var rows = [];

    for (var i = 0; i < keys.length; i++) { 
        var key = (keys[i]);
        rows.push(cryptoData[key]);
    }

    return props.children({
        rows: rows,
        isLoading: isLoading
    });
}

export default CryptoRenderProps;