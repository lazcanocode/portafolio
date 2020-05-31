import React from 'react';

const Card = ({ title, date, description }) => {
  return (
    <div className='Card'>
      <h2 className='Card__title'>{title}</h2>
      <p className='Card__date'>{date}</p>
      <h4 className='Card__description'>{description}</h4>
    </div>
  );
};

export default Card;
