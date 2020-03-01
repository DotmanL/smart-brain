import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className= 'f3 white'>
                {'This Smart brain app will detect faces in your pictures. Give it a try '}
                <p className= 'f3 white'>
                { "You can copy and input the sample link below or get your own image link"}
                <p className= 'f3 white'>
                {"https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860_main_beauty.png"}
            </p>
            </p>
            </p>
            <div className ='center'> 
                <div className = 'form center pa4 br3 shadow-5'>
            <input className='f4 pa2 w-70 center' type ='text' onChange={onInputChange}/><br></br>
            <button className ='w-30 grow f4 link ph3 pv2 dib white bg-yellow' onClick={onButtonSubmit}>Detect</button>
            </div>
            </div>
            </div>
    );
}

export default ImageLinkForm; 