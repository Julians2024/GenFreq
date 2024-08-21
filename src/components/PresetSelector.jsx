// src/components/PresetSelector.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const PresetSelector = ({ presets, selectedPreset, onChange }) => (
    <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel>Preset</InputLabel>
        <Select value={selectedPreset} onChange={(e) => onChange(e.target.value)} label="Preset">
            {presets.map((preset, index) => (
                <MenuItem key={index} value={preset}>
                    {preset} Hz
                </MenuItem>
            ))}
        </Select>
    </FormControl>
);

PresetSelector.propTypes = {
    presets: PropTypes.arrayOf(PropTypes.number).isRequired,
    selectedPreset: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default PresetSelector;

