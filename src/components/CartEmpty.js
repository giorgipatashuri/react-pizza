import React from 'react';
import { Link } from 'react-router-dom';
const CartEmpty = () => {
  return (
    <div class='content'>
      <div class='container container--cart'>
        <div class='cart cart--empty'>
          <h2>
            Cart Empty <icon>😕</icon>
          </h2>
          <img src='assets/img/empty-cart.png' alt='Empty cart' />
          <Link to='/react-pizza' class='button button--black'>
            <span>Go Back</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
