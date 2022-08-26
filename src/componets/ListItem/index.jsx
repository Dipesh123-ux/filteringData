import React from 'react';
import './styles.css';

const ListItem = ({
  item: { src, title, price, location, beds},
}) => (
  <div className='listItem-wrap'>
    <img src={src} alt='' />
    <header>
      <h4>{title}</h4>
      <span>{location}</span>
    </header>
    <footer>
      <p>
        <span>Beds : {beds}</span>
      </p>
      <p>
        <b>${price}</b>
      </p>
    </footer>
  </div>
);

export default ListItem;
