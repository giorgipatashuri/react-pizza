import React, { FC } from 'react';

interface CategoriesProps {
  value: number;
  onClickCategory: (id: number) => void;
}

const Categories: FC<CategoriesProps> = ({ value, onClickCategory }) => {
  const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'exclusives'];
  return (
    <div className='categories'>
      <ul>
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
