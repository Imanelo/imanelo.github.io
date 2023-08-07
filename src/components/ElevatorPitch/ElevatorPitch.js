import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ElevatorPitchData} from '../../data/ElevatorPitchData'
import './ElevatorPitch.css';



function ElevatorPitch() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="my-elevator-pitch">
            <h2 style={{ color: theme.primary }}>My Elevator Pitch</h2>
            <video controls  height="auto">
            <source src={ElevatorPitchData.Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default ElevatorPitch; // Make sure to add this line to export the component

