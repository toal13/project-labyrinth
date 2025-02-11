import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { game, generateMaze } from 'reducers/game';


const StartScreen = () => {
    const [playername, setPlayername] = useState('');
    const dispatch = useDispatch();

    const onPlayerSet = () => {
        dispatch(game.actions.setUsername(playername));
        dispatch(generateMaze());
    };

    return (
        <>
            <section className="start-container">
                <div className="start-wrapper">
                    <h1>Adventurer!</h1>
                    <h2>Grab your back-pack and your brave soul!</h2>
                    <p>But first give us your name so we know whose mother to write if you... eh get lost.</p>
                    <input
                        className="text-field"
                        type="text"
                        value={playername}
                        onChange={(event) => setPlayername(event.target.value)}
                    />
                    <button onClick={onPlayerSet}>Start the game!</button>
                </div>
            </section>
        </>
    )
};

export default StartScreen; 
