import React, { useState } from 'react';

import utils from '../math-utils';

import PlayNumber from './PlayNumber';
import PlayAgain from './PlayAgain';
import PlayAudio from './PlayAudio';

const useGameState = () => {

    const [playNumbers] = useState(utils.shuffle(utils.range(0, 20, 1)).splice(9, 9));
    const [availableNumbers, setAvailableNumbers] = useState(utils.shuffle([...playNumbers]));
    const [currentNumber, setCurrentNumber] = useState(availableNumbers[0]);
    
    const setGameState = (newAvailableNumbers) => {
      setAvailableNumbers(newAvailableNumbers);
      setCurrentNumber(newAvailableNumbers[0]);
    };
  
    const audioRef = React.createRef();
    const [audioState, setAudioState] = useState('/floyd_and_roly_need_your_help_to_knock.ogg');
    const [seqState, setSeqState] = useState([`/prompts/for_this_job_youll_need_to_find.ogg`,`/prompts/numbers.ogg`,`/ready.ogg`,`/prompts/find_the_number.ogg`,`/numbers/${currentNumber}.ogg`]);
    
    return { availableNumbers, playNumbers, currentNumber, setGameState, audioRef, audioState, seqState, setSeqState, setAudioState};
  };
  
  const Game = props => {
    
    const {
      availableNumbers, 
      playNumbers, 
      currentNumber, 
      setGameState,
      audioRef,
      audioState, 
      seqState,
      setSeqState,
      setAudioState
    } = useGameState();
  
    const numberStatus = number => {
      if (!availableNumbers.includes(number)) {
        return 'used';
      }
      return 'available';
    }
  
    const onEnded = props => {
      
      const seqArr = audioRef.current.getAttribute('data-seq').split(',');
      
      if (seqArr.length > 0 ) { 
        setAudioState(seqArr[0]);
        seqArr.splice(0, 1);
        setSeqState(seqArr);
      } else {
  
      }
    }
  
    const onNumberClick = (number, currentStatus) => {
      
      if (currentStatus === 'used') {
        return;
      }
      
      if (currentNumber === number) {
        const newAvailableNumbers = availableNumbers.filter(n => n !== currentNumber);
        
        setAudioState(`/sfx/ca.ogg`);
        if (newAvailableNumbers.length > 0) {
          setSeqState([`/sfx/lever.ogg`,`/sfx/airup.ogg`,`/sfx/punch2.ogg`,`/prompts/find_the_number.ogg`, `/numbers/${newAvailableNumbers[0]}.ogg`]);
        } else {
          // game won
          setSeqState([`/sfx/lever.ogg`,`/sfx/airup.ogg`,`/sfx/punch2.ogg`, `/building_collapse.ogg`, `/that_building_is_outta_here.ogg`, `/sfx/tada.ogg`]);
        }
        const delay = setTimeout( () => {
          setGameState(newAvailableNumbers);
          clearTimeout(delay);
        }, 2600);
        
      } else {
        setAudioState('/sfx/wa.ogg');
        setSeqState(['/prompts/oops_thats.ogg', `/numbers/${number}.ogg`, '/prompts/find_the_number.ogg', `/numbers/${currentNumber}.ogg`]);
      }
    }
  
    return (
      
      <div className="c-number-container">
        {/* <img src={DemolitionBingo_BuildingTop}/>   */}
        <PlayAudio 
          onEnded={onEnded} 
          ref={audioRef} 
          src={audioState} 
          seqState={seqState}
        /> 
        {availableNumbers.length === 0 ? (
          <PlayAgain onClick={props.startNewGame}/>
        ) : (
          ''
        )}
  
        
        <div className="o-numbers-grid">
          {playNumbers.map(number => 
            <PlayNumber
              key={number}
              number={number}
              status={numberStatus(number)}
              onClick={onNumberClick}
            />
          )}
        </div>
      </div>
    );
  };

export default Game;