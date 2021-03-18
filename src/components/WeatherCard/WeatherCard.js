import React from 'react';
import WeatherRenderProps from './WeatherRenderProps';
import utils from '../../../utilities/utils';
import Loader from 'react-loader-spinner';

const WeatherCard = () => {
    return (
        <WeatherRenderProps>
            {({rows, names, weatherCondition, isLoading}) => {
                return (
                    <div className="flex-grow overflow-y-auto p-5">
                        <div className="flex flex-wrap justify-center sm:flex">
                            {rows.map(({temp, temp_min, temp_max}, i) => {
                                return (
                                    <div key={i}>
                                        <div className="m-8 w-40 sm:w-44 md:w-48 justify-items-center">
                                            <div className="rounded shadow-md overflow-hidden">
                                                <div>
                                                    <div alt="" className="bg-blue-900 h-40 object-cover"/>
                                                    <div className="bg-white m-2">
                                                        {isLoading === true ? (
                                                                <Loader type="ThreeDots" className="grid justify-items-center" color="#1e3a8a" height={40} width={40} />
                                                            ) : (
                                                            <>
                                                                <span className="text-xl block font-light">{names[i]}</span>
                                                                <span className="text-lg font-bold text-blue-900">{utils.KToF(temp)}&deg;</span><span className="ml-1 text-gray-700">{weatherCondition[i]}</span>
                                                                <span className="block">{utils.KToF(temp_max)}/{utils.KToF(temp_min)}</span>
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
        </WeatherRenderProps>
    )
}

export default WeatherCard;