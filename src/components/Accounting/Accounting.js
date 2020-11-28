import React from 'react';
import fakeData from '../../fakeData/fakeData';
import CommonComonent from '../CommonComonent/CommonComonent';

const Accounting = () => {
  return (
    <section className='accounting'>
      <div className='accountingContainer'>
        <h1 className='sectionHeading'>Accounting & Finance Section</h1>
        <div className='row'>
          {fakeData.map(singleData => (
            <CommonComonent key={singleData.id} singleData={singleData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accounting;
