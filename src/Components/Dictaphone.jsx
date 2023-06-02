import React from "react";
import SpeechRecognition,{useSpeechRecognition} from "react-speech-recognition";

const Distaphone = () => {

    const {
        transscript,
        listening,
        resetTransscriptm,
        borwserSupportsSpeechRecogniation
    } = useSpeechRecognition()

    if(!borwserSupportsSpeechRecogniation){
        return (
            <h1>You Borwser doesn't support speech recognition</h1>
        )
    }

    return (
        <div>
            <p>Microphone:{listening ? "no" :" off"}</p>
        </div>
    )
}
export default Distaphone;