import React, { useEffect, useState } from "react";


const TextToSpeech = () => {

    const [voices, setVoices] = useState([]);
    const [selectedVoice, setSelectedVoice] = useState(null);
    const [pitchValue, setPitchValue] = useState(1);
    const [rateValue, setRateValue] = useState(1);
    const [textValue, setTextValue] = useState("Hello i am under the water");


    useEffect(() => {
        const populateVoiceList = () => {
            const synth = window.speechSynthesis;
            const voices = synth.getVoices();
            setVoices(voices);
        };
        populateVoiceList();
    }, []);

    return (
        <>
        </>
    )
}
export default TextToSpeech;
