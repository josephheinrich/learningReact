import NavBar from '../src/components/Navbar/Navbar';
import React, {useState, useEffect, useCallback} from 'react';
import utils from '../utilities/utils';

const StarsDisplay = props => (
    <>
        {utils.range(1, props.count).map(starId => 
            <div key={starId} className="star inline-block mx-3 my-1"></div>
        )}
    </>
);

const ButtonDisplay = props => {
    return (
        <button 
        style={{backgroundColor: colors[props.status]}} 
        className="bg-gray-200 border border-solid border-gray-500 w-12 h-12 text-lg m-2 rounded" 
        onClick={() => props.onClick(props.number, props.status)} 
        >
            {props.number}
        </button>
    )
};

const PlayAgain = (props) => {
    return (
        <div>
            <div 
            className="text-4xl mb-6"
            style={{color: props.gameStatus === 'lost' ? 'red' : 'green'}}
            >
                {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
            </div>
            <button className="bg-gray-700 p-2 text-white rounded" onClick={props.onClick}>Play Again</button>
        </div>
    )
}

//Custom Hook
 
const useGameState = () => {
    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);
    
    useEffect(() => {
        if (secondsLeft > 0 && availableNums.length > 0) {
            const timerID = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
            return () => clearTimeout(timerID); 
        }
    })

    const setGameState = (newCandidateNums) => {
        if (utils.sum(newCandidateNums) !== stars) {
            setCandidateNums(newCandidateNums);
        } else {
            const newAvailableNums = availableNums.filter(
            n => !newCandidateNums.includes(n)
            );
            setStars(utils.randomSumIn(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    }

    return {stars, availableNums, candidateNums, secondsLeft, setGameState}
}


const Game = (props) => {
    const {
        stars,
        availableNums,
        candidateNums,
        secondsLeft,
        setGameState
    } = useGameState();

    const candidatesAreWrong = utils.sum(candidateNums) > stars;

    const gameStatus = availableNums.length === 0
    ? 'won'
    : secondsLeft === 0 ? 'lost' : 'active';

    const numberStatus = (number) => {

        if (!availableNums.includes(number)) {
            return 'used';
        }
        if (candidateNums.includes(number)) {
            return candidatesAreWrong ? 'wrong' : 'candidate';
        }
        return 'available';
    }
    
    const onNumberClick = (number, currentStatus) => {

        if (gameStatus !== 'active' || currentStatus === 'used') {
          return;
        }
    
        const newCandidateNums =
          currentStatus === 'available'
            ? candidateNums.concat(number)
            : candidateNums.filter(cn => cn !== number);

        setGameState(newCandidateNums);
      };


    return (
        <div className="flex flex-col min-h-screen">
            <NavBar></NavBar>
            <div className="game">
                <div className="help">
                Pick 1 or more numbers that sum to the number of stars
                </div>
                <div className="body">
                    <div className="flex flex-wrap text-center justify-center">
                        <div className="h-60 w-60 border-solid border-gray-300 border-2 flex flex-wrap content-center justify-center">
                            {gameStatus !== 'active' ? (
                                <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus}/>
                                ) : (
                                <StarsDisplay count={stars} />
                            )}
                        </div>
                        <div className="grid grid-cols-3 gap-2 px-4 justify-items-center content-center h-60 w-60 border-solid border-gray-300 border-2">
                            {utils.range(1, 9).map(number => 
                                <ButtonDisplay 
                                    key={number} 
                                    number={number} 
                                    status={numberStatus(number)}
                                    onClick={onNumberClick}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-2 text-gray-600 inline-block">Time Left: {secondsLeft}</div>
                <div className="bg-blue-800 mt-2 text-center w-40 h-6 rounded" style={{width: (secondsLeft/10)*100}}></div> 
            </div>
        </div>
    );
}

const StarMatch = () => {
    const [gameID, setGameID] = useState(1);
    return <Game key={gameID} startNewGame={() => {setGameID(gameID + 1)}}/>;
}


// Color Theme
const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };

  
export default StarMatch;