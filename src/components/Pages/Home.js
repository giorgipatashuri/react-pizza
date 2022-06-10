import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../Categories';
import Sort from '../Sort';
import PizzaBlock from '../PizzaBlock';
import { setCategoryId } from '../../redux/slices/filterSlice';
import { setSort } from '../../redux/slices/filterSlice';

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const categoryId = useSelector((state) => state.filterSlice.categoryId);
  const sort = useSelector((state) => state.filterSlice.sort);
  const isDesc = useSelector((state) => state.filterSlice.isDesc);
  const dispatch = useDispatch();
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
  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const onClickSort = (props) => {
    dispatch(setSort(props));
  };
  return (
    <>
      <div className='content__top'>
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort value={sort} onChangeSort={onClickSort} />
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
