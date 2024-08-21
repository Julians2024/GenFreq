// src/components/FrequencyInput.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const FrequencyInput = ({ value, onChange }) => (
    <TextField
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        label="Frequency (Hz)"
        variant="outlined"
        fullWidth
        margin="normal"
    />
);

FrequencyInput.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default FrequencyInput;
