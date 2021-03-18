
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

const CryptoCard_V2 = () => {
    const apiTemplateString = `https://api.coinbase.com/v2/prices/${symbol}-USD/buy`

    const [cryptoData, setCryptoData] = useState({
        btcData: [],
        ethData: [],
        bchData: []
    });

    const [cryptoInfo, setCryptoInfo] = useState([]);

    const fetchData = () => {
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
                bchData: results[2].data.data
            });
            setCryptoInfo([results[0].data.data, results[1].data.data, results[2].data.data]);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const fetchSingleCrypto = () => {

    }

    useEffect(() => {
        fetchData();
    }, [])

    var keys = Object.keys(cryptoData);
    var rows = [];

    for (var i = 0; i < keys.length; i++) { 
        var key = (keys[i]);
        rows.push(cryptoData[key]);
    }

    var cryptoInput = React.createRef();

    const [newCrypto, setNewCrypto] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(cryptoInput.current.value);
    }


    return (
        <div>
            <div className="flex flex-wrap justify-center items-center mt-4">
                <div>
                    <input type="text" placeholder="Crypto abbreviation" className="border-2 border-gray-500 rounded" required ref={cryptoInput}/>
                </div>
                <div>
                    <button type="button" className="bg-blue-400 text-white rounded p-1 w-16 ml-4" onClick={handleSubmit}>Add</button>
                </div>
            </div>
            <div className="flex-grow overflow-y-auto">
                <div className="flex flex-wrap justify-center sm:flex">
                    {rows.map(({base, currency, amount}, i) => {
                        return (
                            <div key={i}>
                                <div className="m-4 w-40 sm:w-44 md:w-48 justify-items-center">
                                    <div className="rounded shadow-md overflow-hidden">
                                        <div>
                                            <div alt="" className="bg-green-900 h-40 object-cover"/>
                                            <div className="bg-white m-2">
                                                <span className="text-xl block font-light">{base}</span>
                                                <span className="text-lg font-bold text-green-900">{amount}</span><span className="ml-1 text-gray-700">{currency}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CryptoCard_V2;