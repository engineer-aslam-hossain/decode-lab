import React from 'react';
import fakeData from '../../fakeData/fakeData';
import CommonComonent from '../CommonComonent/CommonComonent';

const WebApp = () => {
  return (
    <section className='webApp'>
      <div className='webAppContainer'>
        <h1 className='sectionHeading'>Modern Web App Section</h1>
        <div className='row'>
          {fakeData.map(singleData => (
            <CommonComonent key={singleData.id} singleData={singleData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebApp;
