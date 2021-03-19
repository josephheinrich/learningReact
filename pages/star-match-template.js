import NavBar from '../src/components/Navbar/Navbar';
import React, {useState, useEffect} from 'react';
import utils from '../utilities/utils';

const Page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar></NavBar>
            <div className="container mx-auto">
                <div className="text-center my-2 text-gray-600">
                    Pick 1 or more numbers that sum to the number of stars
                </div>
                <div className="flex flex-wrap text-center justify-center">
                    <div className="h-60 w-60 border-solid border-gray-300 border-2 flex flex-wrap content-center justify-center">
                       {/* {utils.range(1, 8).map(starID => 
                            <div className="star inline-block mx-3 my-1" key={starID} />
                        )} */}

                        <div>
                            <div className="text-4xl mb-6 text-green-500">
                                Nice
                            </div>
                            <button className="bg-gray-700 p-2 text-white rounded">Play Again</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 px-4 justify-items-center content-center h-60 w-60 border-solid border-gray-300 border-2">
                        {utils.range(1, 9).map(number => 
                            <button className="bg-gray-200 border border-solid border-gray-500 w-12 h-12 text-lg m-2 rounded" key={number}>{number}</button>
                        )}
                    </div>
                </div>
                <div className="text-gray-600 mt-2 ml-2 text-center">Time Remaining: 10</div>
            </div>
        </div>
    );
}

export default Page;