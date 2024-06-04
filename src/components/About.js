function About(props) {
    const myStyle={
        color: props.mode === 'light' ? 'black' : 'white',
        backgroundColor: props.mode === 'light' ? 'white' : 'rgb(55 98 133)',
    }
    const para={
      backgroundColor: props.mode === 'light' ? 'white' : 'rgb(4, 39, 67)',
      color: props.mode === 'light' ? 'black' : 'white',
    }
  return (
    <>
    <div>
    <div className="accordion mx-5" id="accordionExample">
    <h1 className="my-1" style={para}>About us</h1>
    <p style={para}>
    Textyfy is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but Textyfy offers much more than simple text drafting and formatting. Textyfy can convert your text to any case in just one simple click of a button. It can extract links and numbers safely from a labyrinth of random text or sophisticated documentation. It has an improved property of reversal of your inputted text.You can even remove whitespaces from your scripted documents! It does a detailed analyzing of your text, and provides an output of words, and characters, along with reading time as well. <br></br>The best part of Textyfy is that it is an open source project, as a result, dozens of new features are in the upcoming, which definitely makes it a cut above the rest.<br></br>
    The most eminent features of the website are as follows :
    </p>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show " data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        It is a Simple Text Analyzer , which mutilates your text, but in a tender way. And also help to count the words faster.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        <strong>Free to use.</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        It is completely free to use. No credit cards required. Use as much as you want!!
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        It is compatible with all of your favorite browsers.
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default About