import React from 'react';
import Featured from './featured'
import Match from './matches'
import MeetPlayers from './meetplayers'
import Promotion from'./promotion'

const Home = () => {
    return (
        <div className="bck_blue">
            <Featured />
            <Match />
            <MeetPlayers />
            <Promotion />
        </div>
    );
};

export default Home;