// src/components/PowerSwitch.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Typography } from '@mui/material';
import './PowerSwitch.css';

const PowerSwitch = ({ onToggle }) => (
    <div className="power-switch">
        <Typography variant="body1" className="power-label">Power</Typography>
        <Switch onChange={(e) => onToggle(e.target.checked)} />
    </div>
);

PowerSwitch.propTypes = {
    onToggle: PropTypes.func.isRequired,
};

export default PowerSwitch;




