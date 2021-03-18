
import React from 'react';
import CryptoRenderProps from './CryptoRenderProps';
import Loader from 'react-loader-spinner';

const CryptoCard = () => {
    return (
        <CryptoRenderProps>
            {({rows, isLoading}) => {
                return (   
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
                                                        {isLoading === true ? (
                                                                <Loader type="ThreeDots" className="grid justify-items-center" color="#064e3b" height={40} width={40} />
                                                            ) : (
                                                            <>
                                                                <span className="text-xl block font-light">{base}</span>
                                                                <span className="text-lg font-bold text-green-900">{amount}</span><span className="ml-1 text-gray-700">{currency}</span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            }}
        </CryptoRenderProps>
    )
}

export default CryptoCard;