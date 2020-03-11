import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
    <p className='f6 white'>
      {'This Smart brain app will detect faces in your pictures. Give it a try '}
      </p>
      <p className='f6 white'>
        {'You can make use of the link below or paste your own image url'}
      </p>
      <p className='f6 white'>
        {"https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860_main_beauty.png"}
      </p>
    <div className='form'>
        <div className='form-content'>
            <input type="text" onChange={onInputChange} placeholder='Please enter an image URL' required/>
            <button className='pointer' onClick={onButtonSubmit}>Detect</button>
        </div>
    </div>
</div>
);
};
   
export default ImageLinkForm;
