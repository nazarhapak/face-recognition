import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onSubmit}) => {
    const onEnterSubmit = (event) => {
        if (event.key === 'Enter') {
            onSubmit();
        }
    }

    return (
        <div className='form'>
            <p>Try this face recognition website to detect faces in your pictures.</p>
            <div className='inputBox'>
                <input type='text' placeholder="enter you image's url here" onChange={onInputChange} onKeyDown={onEnterSubmit}></input>
                <button className='detectButton' onClick={onSubmit}>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm ;