import NavBar from '../src/components/Navbar/Navbar';
import React, {useState, useEffect} from 'react';
import utils from '../utilities/utils';

const StarsDisplay = props => (
    <>
        {utils.range(1, props.count).map(starId => 
            <div key={starId} className="star"></div>
        )}
    </>
);

const ButtonDisplay = props => {
    return (
        <button 
        style={{backgroundColor: colors[props.status]}} 
        className="number" 
        onClick={() => props.onClick(props.number, props.status)} 
        >
            {props.number}
        </button>
    )
};

const PlayAgain = (props) => {
    return (
        <div className="game-done">
            <div 
            className="message"
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
                    <div className="left">
                        {gameStatus !== 'active' ? (
                            <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus}/>
                            ) : (
                            <StarsDisplay count={stars} />
                        )}
                    </div>
                    <div className="right">
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
                <div className="timer">Time Remaining: {secondsLeft}</div>
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