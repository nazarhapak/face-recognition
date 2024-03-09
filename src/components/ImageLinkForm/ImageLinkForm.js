import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = () => {
    return (
        <div className='form'>
            <p>Try this face recognition website to detect faces in your pictures.</p>
            <div className='inputBox'>
                <input type='text' placeholder="enter you image's url here"></input>
                <button className='detectButton'>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm ;