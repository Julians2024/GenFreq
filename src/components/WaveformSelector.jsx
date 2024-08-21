// src/components/WaveformSelector.jsx
import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SineIcon from '../icons/SineIcon';
import SquareIcon from '../icons/SquareIcon';
import TriangleIcon from '../icons/TriangleIcon';
import SawtoothIcon from '../icons/SawtoothIcon';

const WaveformSelector = () => {
    const [waveform, setWaveform] = useState('sine');

    const waveforms = [
        { label: 'Sine', value: 'sine', icon: <SineIcon /> },
        { label: 'Square', value: 'square', icon: <SquareIcon /> },
        { label: 'Triangle', value: 'triangle', icon: <TriangleIcon /> },
        { label: 'Sawtooth', value: 'sawtooth', icon: <SawtoothIcon /> },
    ];

    return (
        <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel>Waveform</InputLabel>
            <Select value={waveform} onChange={(e) => setWaveform(e.target.value)} label="Waveform">
                {waveforms.map((waveformOption) => (
                    <MenuItem key={waveformOption.value} value={waveformOption.value}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {waveformOption.icon}
                            <span style={{ marginLeft: 8 }}>{waveformOption.label}</span>
                        </div>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default WaveformSelector;



