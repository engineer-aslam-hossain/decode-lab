import React from 'react';
import fakeData from '../../fakeData/fakeData';
import CommonComonent from '../CommonComonent/CommonComonent';

const ECommerce = () => {
  return (
    <section className='e-commerce'>
      <div className='e-commerceContainer'>
        <h1 className='sectionHeading'>E-commerce Section</h1>
        <div className='row'>
          {fakeData.map(singleData => (
            <CommonComonent key={singleData.id} singleData={singleData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ECommerce;
