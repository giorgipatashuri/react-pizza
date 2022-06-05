import React, { useState, useEffect } from 'react';
import Categories from '../Categories';
import Sort from '../Sort';
import PizzaBlock from '../PizzaBlock';

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [sort, setSort] = useState({ name: 'popularity', sortCategory: 'rating' });
  const [isDesc, setIsDesc] = useState(true);
  console.log(isDesc);
  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    fetch(
      `https://628e18fe368687f3e7104afe.mockapi.io//items?${category}&sortBy=${
        sort.sortCategory
      }&order=${isDesc ? 'desc' : 'asc'}`,
    )
      .then((res) => res.json())
      .then((item) => setItems(item));
  }, [categoryId, sort, isDesc]);
  return (
    <>
      <div className='content__top'>
        <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
        <Sort value={sort} onChangeSort={setSort} isDesc={isDesc} setIsDesc={setIsDesc} />
      </div>
      <h2 className='content__title'>All Pizza's</h2>
      <div className='content__items'>
        {items
          .filter((object) => object.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((obj) => (
            <PizzaBlock {...obj} />
          ))}
      </div>
    </>
  );
};

export default Home;
