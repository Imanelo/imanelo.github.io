import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ElevatorPitchData } from '../../data/ElevatorPitchData';
import './ElevatorPitch.css';
import ReactPlayer from 'react-player';

function ElevatorPitch() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="video" id="my-pitch" style={{ backgroundColor: theme.secondary }}>
            <div className="video-content">
                <div className="video-description">
                    <h2 style={{ color: theme.primary600 }}>{ElevatorPitchData.Title}</h2>
                    <p style={{ color: theme.tertiary80 }}>{ElevatorPitchData.description}</p>
                    <img
                        src={ElevatorPitchData.Image}
                        alt=""
                    />
                </div>
                <div className="thevideo">
                <ReactPlayer
                    className='react-player'
                    url={ElevatorPitchData.Video} type="video/mp4"
                    controls={true}
                    width='100%'
                    height='100%'
                  />                  
                </div>
            </div>
        </div>
    );
}

export default ElevatorPitch;
