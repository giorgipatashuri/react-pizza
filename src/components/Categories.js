import React, { useState } from 'react';

const Categories = ({ value, onClickCategory }) => {
  const [activeIndex, setAgctiveIndex] = useState(0);
  const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'exclusives'];
  return (
    <div className='categories'>
      <ul>
        {/* <li onClick={() => setactiveIndex(0)} className={activeIndex === 0 ? 'active' : ''}>
          Все
        </li> */}
        {categories.map((cat, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={value === index ? 'active' : ''}>
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
