import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
const CommonComonent = ({ singleData }) => {
  const handleCros = e => {
    e.currentTarget.remove();
  };
  return (
    <div className='col-md-6 halfColumn' key={singleData.id}>
      <h3 className='title'>{singleData.title} </h3>
      <p className='details'>{singleData.details} </p>
      <ul>
        {singleData.item.map(itemData => (
          <li key={itemData.id} onClick={e => handleCros(e)}>
            <CancelIcon
              style={{
                marginRight: '1rem',
                fontSize: '3rem',
                color: 'lightgray',
              }}
            />
            {itemData.details}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommonComonent;
