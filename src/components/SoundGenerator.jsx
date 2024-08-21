// SoundGenerator.jsx
import React, { useState, useEffect, useRef } from 'react';
import { IconButton, Select, MenuItem, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import AddIcon from '@mui/icons-material/Add';
import FrequencyInput from './FrequencyInput';
import ControlButtons from './ControlButtons';
import PresetSelector from './PresetSelector';
import WaveformSelector from './WaveformSelector';
import PowerSwitch from './PowerSwitch';
import './SoundGenerator.css';

const SoundGenerator = () => {
    const [frequency, setFrequency] = useState(440);
    const [isPlaying, setIsPlaying] = useState(false);
    const [presets, setPresets] = useState([]);
    const [selectedPreset, setSelectedPreset] = useState('');
    const [isPoweredOn, setIsPoweredOn] = useState(true); // Estado de encendido/apagado

    const audioContextRef = useRef(null);
    const oscillatorRef = useRef(null);

    useEffect(() => {
        if (!isPoweredOn && isPlaying) {
            stopTone();
        }
    }, [isPoweredOn]);

    const startTone = () => {
        if (isPoweredOn && !isPlaying) {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            oscillator.type = 'sine'; // Tipo de onda por defecto: senoidal
            oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
            oscillator.connect(audioCtx.destination);
            oscillator.start();
            oscillatorRef.current = oscillator;
            audioContextRef.current = audioCtx;
            setIsPlaying(true);
        }
    };

    const stopTone = () => {
        if (oscillatorRef.current && audioContextRef.current) {
            oscillatorRef.current.stop();
            audioContextRef.current.close();
            setIsPlaying(false);
        }
    };

    const addPreset = () => {
        if (!presets.includes(frequency)) {
            setPresets([...presets, frequency]);
        }
    };

    const handlePresetChange = (value) => {
        setSelectedPreset(value);
    };

    const handlePowerToggle = (powerOn) => {
        setIsPoweredOn(powerOn);
    };

    return (
        <div className={`sound-generator ${isPoweredOn ? '' : 'power-off'}`}>
            <Typography variant="h4">Sound Generator</Typography>
            <FrequencyInput value={frequency} onChange={setFrequency} />
            <ControlButtons
                isPlaying={isPlaying}
                onStart={startTone}
                onStop={stopTone}
                onAddPreset={addPreset}
            />
            <PresetSelector
                presets={presets}
                selectedPreset={selectedPreset}
                onChange={handlePresetChange}
            />
            <WaveformSelector />
            <PowerSwitch onToggle={handlePowerToggle} />
        </div>
    );
};

export default SoundGenerator;
