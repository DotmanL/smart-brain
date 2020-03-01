import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f3'>
        { `${name}, we have helped you in detecting faces from your image url ...`}
      </div>
      <div className='white f1'>
       {`${entries} times`}
      </div>
    </div>
  );
}

export default Rank;