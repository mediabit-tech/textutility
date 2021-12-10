import React, {useState} from 'react'

export default function About(props) {
    
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#1a253a',
        backgroundColor: props.mode === 'dark' ? '#1a253a' : 'white'
    }

    return (
        <div className="container my-3" style={myStyle}>
            <h1>About us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                        <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        TextUtility gives you a way to analyze your text quickly and efficiently. Be it word count, character count and assume reading time of whole paragraph.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                        <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        TextUtility is a free character counter that provides instant character count and word count statistics for a given text. TextUtility reports the number of words and characters. Thus it is suitable for writing text with word or character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            <strong>Browser compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software works in any web browsers such a Chrome, Firefox, Internet Explorer, Microsoft Edge, Safari, Opera. It suits to count characters in facebook, blogs, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
