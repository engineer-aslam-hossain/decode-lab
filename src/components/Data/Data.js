import React from 'react';
import fakeData from '../../fakeData/fakeData';
import CommonComonent from '../CommonComonent/CommonComonent';

const Data = () => {
  return (
    <section className='data'>
      <div className='dataContainer'>
        <h1 className='sectionHeading'>Data & Technology</h1>
        <div className='row'>
          {fakeData.map(singleData => (
            <CommonComonent key={singleData.id} singleData={singleData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Data;
