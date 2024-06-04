import React, { useState } from 'react'

function TextForm(props) {
    const textareaStyle = {
        backgroundColor: props.mode === 'light' ? 'white' : 'rgb(4, 39, 67)',
        color: props.mode === 'light' ? 'black' : 'white'
    };

    const fontt = {
        color: props.mode === 'dark' ? 'white' : 'black'
    };
    const btnCol='primary';

    const upperHandler=()=>{
        if(text.length===0){
            props.showAlert("Text Field is empty","danger");
        }else{
            let newText=text.toUpperCase();
            setText(newText)
            props.showAlert("converted to Uppercase","success");
        }
    }

    const lowerHandler=()=>{
        if(text.length===0){
            props.showAlert("Text Field is empty","danger");
        }else{
            let newText=text.toLowerCase();
            setText(newText)
            props.showAlert("converted to lowercase","success");
        }
    }
    const copyHandler=()=>{
        if(text.length===0){
            props.showAlert("Text Field is empty","danger");
        }else{
            navigator.clipboard.writeText(text);
            props.showAlert("Text copied","success");
        }
    }
    const clearTextHandler=()=>{
        if(text.length===0){
            props.showAlert("Text Field is empty","danger");
        }else{
            setText('');
            props.showAlert("Text has been cleared","success");
        }
    }
    const handleExtraSpace=()=>{
        if(text.length===0){
            props.showAlert("Text Field is empty","danger");
        }else{
            let newText=text.split(/[ ]+/)
            setText(newText.join(" "));
            props.showAlert("Extra space has been removed","success");
        }
    }
    const onChangeHandler=(e)=>{
        setText(e.target.value)
    }
    const [text,setText] =useState('');
  return (
    <>
        <div>
            <h1 style={fontt}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={onChangeHandler} id="myBox" rows={8} style={textareaStyle}></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-${btnCol} mx-1 my-1`} onClick={upperHandler}>Uppercase</button>
            <button disabled={text.length===0} className={`btn btn-${btnCol} mx-1 my-1`} onClick={lowerHandler}>LowerCase</button>
            <button disabled={text.length===0} className={`btn btn-${btnCol} mx-1 my-1`} onClick={copyHandler}>Copy Text</button>
            <button disabled={text.length===0} className={`btn btn-${btnCol} mx-1 my-1`} onClick={clearTextHandler}>Clear Text</button>
            <button disabled={text.length===0} className={`btn btn-${btnCol} mx-1 my-1`} onClick={handleExtraSpace}>Remove extra space</button>
        </div>
        <div className='container my-3 ' style={fontt}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').filter((ele)=>{return ele.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length!==0?text:"Nothing to preview!"}</p>
        </div>
    </>
  )
}

export default TextForm