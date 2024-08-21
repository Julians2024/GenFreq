// src/components/ControlButtons.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import AddIcon from '@mui/icons-material/Add';

const ControlButtons = ({ isPlaying, onStart, onStop, onAddPreset }) => (
    <div className="control-buttons">
        <IconButton onClick={onStart} disabled={isPlaying}>
            <PlayArrowIcon />
        </IconButton>
        <IconButton onClick={onStop} disabled={!isPlaying}>
            <StopIcon />
        </IconButton>
        <IconButton onClick={onAddPreset}>
            <AddIcon />
        </IconButton>
    </div>
);

ControlButtons.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    onStart: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
    onAddPreset: PropTypes.func.isRequired,
};

export default ControlButtons;

