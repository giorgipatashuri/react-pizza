import React from 'react';
import { Link } from 'react-router-dom';
const CartEmpty = () => {
  return (
    <div className='content'>
      <div className='container container--cart'>
        <div className='cart cart--empty'>
          <h2>Cart Empty 😕</h2>
          <Link to='/' className='button button--black'>
            <span>Go Back</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
