import React from 'react'

export default function About(props) {
  // const [mystyle , setmyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
    
  // }) 
  let mystyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white'
  }
  return (
    <div>
          <div className="container" style = {{color: props.mode === 'dark'?'white':'#042743'}}>
              <h2>About Us</h2>
            <div className="accordion" id="accordionExample" >
          <div className="accordion-item">
            <h2 className="accordion-header" >
              <button className="accordion-button" type="button" style = {mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
                
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style = {mystyle}>
                Textutils gives you a way to analyse your text quickly and efficently. Be it word count, character count or more.
              </div>
            </div>
          </div>
          <div className="accordion-item" >
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" style = {mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to use </strong> 
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style = {mystyle}>
                Textutils is a free character counter tool that provides instant character count and word count satistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" style = {mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong> Browser Compatible </strong>
               
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style = {mystyle}>
                This word counter software works in any web browser such as Chrome , Firebox , Internet Explorer , Safari, Opera. It suits to count characters in facebook , blog , books , excel document , pdf document , essays , etc.
                </div>
              </div>
            </div>
          </div>
          
      </div>
    </div>
  )
}
