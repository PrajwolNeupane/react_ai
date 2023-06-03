import "./App.css"
import { useState, useEffect } from "react"

function App() {

  const [ourText, setOurText] = useState("")
  const msg = new SpeechSynthesisUtterance()
  const [allVoices, setVoices] = useState([]);
  const [currentVoice, setCurrentVoice] = useState(null);


  const stringContainsArray = (str, array) => {
    return array.some((element) => str.includes(element));
  };
  

  const speechHandler = (msg) => {
    if(ourText.toLocaleLowerCase() == "who made you"){
      msg.text = "Prajwol Neupane made me."
      msg.voice = currentVoice ? currentVoice : allVoices[4];
      msg.pitch = 1.1
      msg.rate = 1
      window.speechSynthesis.speak(msg)
    }else if(ourText.toLocaleLowerCase() == 'play aparibhasit song'){
      msg.text = "Playing aparibhasit."
      msg.voice = currentVoice ? currentVoice : allVoices[4];
      msg.pitch = 1.1
      msg.rate = 1
      window.speechSynthesis.speak(msg)
      window.open("https://www.youtube.com/watch?v=Sc1OI1i-Kgs", '_blank');
    }
    else if(stringContainsArray(ourText.toLocaleLowerCase(),['hi','hello','holla'])){
      msg.text = "Hello Prajwol, How are you doing. Need a help. I am here to help you."
      msg.voice = currentVoice ? currentVoice : allVoices[4];
      msg.pitch = 1.1
      msg.rate = 1
      window.speechSynthesis.speak(msg)
    }
    else{
      msg.text = "Sorry. This AI is still on development process."
      msg.voice = currentVoice ? currentVoice : allVoices[4];
      msg.pitch = 1.1
      msg.rate = 1
      window.speechSynthesis.speak(msg)
    }
    

  }

  const getVoice = () => {
    setVoices(window.speechSynthesis.getVoices());
    console.log(allVoices)
  }

  const setVoice = (voice) => {
    setCurrentVoice(voice);
  }

  useEffect(() => {

    getVoice();
  }, []);

  useEffect(() => {
    const loaded = window.speechSynthesis.addEventListener('voiceschanged', () => {
      getVoice();
    })
    return () => {
      if (loaded) {
        window.speechSynthesis.removeEventListener('voiceschanged', handleSpeechSynthesisReady);
      }
    }
  });




  return (
    <div className='App'>
      <h1>Parz AI</h1>
      <h1>Ask me !!</h1>
      <textarea
      style={{width:"200px",height:"300px"}}
        type='text'
        value={ourText}
        placeholder='Enter Text'
        onChange={(e) => setOurText(e.target.value)} />
      <button onClick={() => speechHandler(msg)}>SPEAK</button>
      {
        allVoices.map((curr, indx) => {
          return (
            <p onClick={() => {
              setVoice(curr)
            }}>{curr?.name}</p>
          );
        })
      }
    </div>
  )
}

export default App


