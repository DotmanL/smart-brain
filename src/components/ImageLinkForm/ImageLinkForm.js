import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f4 white'>
      {'This Smart brain app will detect faces in your pictures. Give it a try '}
      </p>
      <p className='f6 white'>
        {"https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860_main_beauty.png"}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' placeholder={'Enter image url'} type='text' onChange={onInputChange} />
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;