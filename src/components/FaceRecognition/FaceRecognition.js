import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
  <div className='image-box'>
  <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
  {boxes.map(box=>
    <div key={`box${box.topRow}${box.rightCol}`}
        className='face-box'
        style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
</div>
  )}
</div>
);
};

   

export default FaceRecognition;
