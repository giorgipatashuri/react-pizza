import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../Categories';
import Sort from '../Sort';
import PizzaBlock from '../PizzaBlock';
import { searchContext } from '../../App';
import { setCategoryId } from '../../redux/slices/filterSlice';
import { setSort } from '../../redux/slices/filterSlice';
import { RootState } from '../../redux/store';
export interface Ipizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}
const Home = () => {
  const { searchValue } = useContext(searchContext);
  const [items, setItems] = useState<Ipizza[]>([]);
  const categoryId = useSelector((state: RootState) => state.filterSlice.categoryId);
  const sort = useSelector((state: RootState) => state.filterSlice.sort);
  const isDesc = useSelector((state: RootState) => state.filterSlice.isDesc);
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
  const onClickCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };
  const onClickSort = (props: { name: string; sortCategory: string }) => {
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
