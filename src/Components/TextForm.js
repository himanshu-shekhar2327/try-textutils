import React , {useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClick =()=> {
        // console.log("Uppercase was clicked" +text);
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLoClick =()=> {
        // console.log("Uppercase was clicked" +text);
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success");

    }
const handleclearClick =()=> {
        // console.log("Uppercase was clicked" +text);
        console.log("clear click button was clicked");
        let newText = ' '
        setText(newText)
        setText("");
        props.showAlert("Text Cleared","success");

        window.speechSynthesis.cancel(); // 🔇 Stop ongoing speech


    };

const handleTextToSpeechClick = () => {
    if (text.trim().length === 0) {
        // alert("Please enter some text to speak.");
        props.showAlert("Please enter some text to speak.","success");

        return;
    }

    window.speechSynthesis.cancel();

    const speakText = () => {
        let utterance = new SpeechSynthesisUtterance(text);

        const voices = window.speechSynthesis.getVoices();
        const selectedVoice = voices.find(
            (v) => v.name === "Microsoft Heera - English (India)" || v.name.includes("")
        );

        if (selectedVoice) {
            utterance.voice = selectedVoice;
        } else {
            console.log("Microsoft Heera voice not found. Using default voice.");
        }

        window.speechSynthesis.speak(utterance);
    };

    // If voices are already loaded
    if (speechSynthesis.getVoices().length > 0) {
        speakText();
    } else {
        // Wait for voices to be loaded
        window.speechSynthesis.onvoiceschanged = () => {
            speakText();
        };
    }
};

const [copyStatus, setCopyStatus] = useState("Copy Text");
const handleCopyClick = () => {
  if (text.trim().length === 0) return;
  navigator.clipboard.writeText(text)
    .then(() => {
    //   setCopyStatus("Copied!");
    props.showAlert("Text Copied To Clicpboard.","success");
    document.getSelection().removeAllRanges();
    setTimeout(() => setCopyStatus("Copy Text"), 2000);
    });
};
// Remove Extra Spaces
const [ExtraSpaces , RemovedExtraSpaces] = useState("Remove Extra Spaces");
const handleRemoveExtraSpacesClick = () => {
    let newtext = text.split(/\s+/).join(" ")
    setText(newtext)
    props.showAlert("Extra Spaces Removed","success");
    // RemovedExtraSpaces("Extra Spaces Removed")
    setTimeout(() => RemovedExtraSpaces("Remove Extra Spaces") ,2000);
}
const handleonChange =(event)=> {
        console.log("on change");
        setText(event.target.value)
}
const [text, setText] = useState('');  
  return (
    <>
    <div className = "container " style = {{color : props.mode==='dark' ? 'White' : '#042743'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        {/* <label for="mybox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value = {text} onChange = {handleonChange} style = {{background : props.mode==='dark' ? '#13466e' : 'white' , color : props.mode==='dark' ? 'White' : '#042743'}}  id="mybox" rows="8"></textarea>
    </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick} >Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleTextToSpeechClick} >Text to Speech</button>
        {/* <button className="btn btn-primary mx-2" onClick={handleDarkModeClick}>Enable {darkMode ? 'Light' : 'Dark'} Mode</button> */}
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>{copyStatus}</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleRemoveExtraSpacesClick}>{ExtraSpaces}</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclearClick} >Clear Text</button>

    </div>
        {/* const wordCount = text.trim().split(/\s+/).filter((element) => element.length !== 0).length; */}
    <div className="container my-3" style={{color: props.mode==='dark'?'white': '#042743' }}>
        <h2>Your Text Summary</h2>
        {/* <p>{text.split(" ").length - 1} words and {text.length} characters </p> */}
        <p>{text.trim().split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters </p>
        { <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} minutes read</p>
         }

        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
