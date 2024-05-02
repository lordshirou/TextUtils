import React, { useState } from 'react'
import PropTypes from 'prop-types'

// const [text,useText]=useState('hello')
export default function TextForm(props) {
    const handelUpClick = () => {
        // console.log('uper clicked  ' + text);

        let newText = text.toUpperCase();
        props.sAlert("Converted to UpperCase ", "success")
        setText(newText)

    }
    const handelCopy = () => {
        // console.log('uper clicked  ' + text);

        let text = document.getElementById("mybox")
        text.select();

        navigator.clipboard.writeText(text.value)
        props.sAlert("Text Copy ", "success")





        // setText(copy)

    }
    const handelExtraSpace = () => {
        // console.log('uper clicked  ' + text);

        let newText = text.split(/[ ]+/)
        setText(newText.join(' '));
        props.sAlert("Extra Space removed ", "success")

        // setText(copy)

    }
    const handelLowClick = () => {
        // console.log('uper clicked  ' + text);

        let newText = text.toLowerCase();
        props.sAlert("Converted to LowerCase ", "success")

        setText(newText)

    }
    const handelClearClick = () => {
        // console.log('uper clicked  ' + text);

        props.sAlert("Clear ", "success")


        setText('')

    }
    const handelOnChange = (event) => {
        // console.log('on change');
        setText(event.target.value)

    }
    const [text, setText] = useState('');
    // setText("champpa");
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

                <div className="mb-3 ">
                    <label htmlFor="mybox" className="form-label my-3"><h1>{props.heading}</h1></label>
                    <textarea className="form-control" value={text} onChange={handelOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handelUpClick}>Convert to Uppercae</button>
                <button className="btn btn-primary mx-2" onClick={handelLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handelClearClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handelCopy}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={handelExtraSpace}>Space Cutter</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className='my-4'>your text summary</h2>
                <p>{text.split(' ').length} words , {text.length} character</p>
                <p>{0.008 * text.split(' ').length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

TextForm.prototype = {
    heading: PropTypes.string
}
TextForm.defaultProps = {
    heading: "dallla"
}