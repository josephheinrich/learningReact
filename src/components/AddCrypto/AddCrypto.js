import CryptoRenderProps from "../CryptoCard/CryptoRenderProps";

function updateCryptoState(props) {
    setCryptoData(...cryptoData, props.value);
}

function AddCrypto() {
    return (
        <CryptoRenderProps>
            {({rows}) => {
                return (
                    <div className="flex flex-wrap justify-center items-center mt-4">
                        <div>
                            Crypto: <input  className="border-2 border-gray-500 rounded" id="cryptoInput" value={value}/>
                        </div>
                        <div>
                            <button type="button" className="bg-blue-400 text-white rounded p-1 w-16 ml-4" onClick={updateCryptoState}>Add</button>
                        </div>
                    </div>
                )
            }}
        </CryptoRenderProps>
    )
}

export default AddCrypto;