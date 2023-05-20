import React from 'react'
import { useState } from "react"

export default function FormText() {
    const [Text, setText] = useState('')
    const enterText = (e) => {
        setText(e.target.value)
    }

    //to Upper Case
    const toUppercase = () => {
        let newText = Text.toUpperCase()
        setText(newText)
    }

    //to Lower Case
    const toLowercase = () => {
        let newText = Text.toLowerCase()
        setText(newText)
    }

    // to Clear spaces
    const toClearSpaces = () => {
        let newText = Text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    //to Copy Text
    const toCopyText = () => {
        let newText = document.getElementById('mybox')
        newText.select()
        navigator.clipboard.writeText(newText.value)
    }

    //to Clear Text
    const toClearText = () => {
        setText("")
    }


    return (
        <>
            <div className="container my-2">
                <div className="mb-3">
                    <label htmlFor="mybox" className='fs-1 fw-semibold py-2'>Enter Text Here To Perform Actions...</label>
                    <textarea name="abc" id="mybox" cols="30" rows="5" value={Text} className="form-control" onChange={enterText}></textarea>
                </div>
                <button className="btn btn-primary my-1" onClick={toUppercase}>Convert To Uppercase</button>
                <button className="btn btn-primary my-1 mx-2" onClick={toLowercase}>Convert To Lowercase</button>
                <button className="btn btn-primary my-1" onClick={toClearText}>Clear Text</button>
                <button className="btn btn-primary my-1 mx-2" onClick={toClearSpaces}>Clear Extra Spaces</button>
                <button className="btn btn-primary my-1" onClick={toCopyText}>Copy Text</button>
            </div>
            <div className="container w-auto">
                <h1 className='my-3'>Preview Text Here...</h1>
                <p className="" id='preview'>{Text}</p>
            </div>

        </>
    )
}
