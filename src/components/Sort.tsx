import React, { FC } from 'react';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsDesc } from '../redux/slices/filterSlice';
interface Isort {
  name: string;
  sortCategory: string;
}
type M = MouseEvent & {
  path: Node[];
};
interface sortProps {
  value: Isort;
  onChangeSort: (value: Isort) => void;
}
const Sort: FC<sortProps> = ({ value, onChangeSort }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const Desc = useSelector((state: any) => state.filterSlice.isDesc);
  const list: Isort[] = [
    { name: 'popularity', sortCategory: 'rating' },
    { name: 'by price', sortCategory: 'price' },
    { name: 'alphabet', sortCategory: 'title' },
  ];
  const selectSort = (props: Isort) => {
    onChangeSort(props);
    setIsVisible(false);
  };
  const setDesc = () => {
    dispatch(setIsDesc(!Desc));
  };
  useEffect(() => {
    const clickEvent = (event: MouseEvent) => {
      const _event = event as M;
      if (ref.current && !_event.path.includes(ref.current)) {
        setIsVisible(false);
      }
    };
    document.body.addEventListener('click', clickEvent);

    return () => {
      document.body.removeEventListener('click', clickEvent);
    };
  }, []);
  return (
    <div ref={ref} className='sort'>
      <div className='sort__label'>
        <div style={{ cursor: 'pointer' }} onClick={setDesc}>
          <svg
            width='10'
            height='6'
            viewBox='0 0 10 6'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
              fill='#2C2C2C'
            />
          </svg>
          <b>Sort By:</b>
        </div>

        <span onClick={() => setIsVisible(!isVisible)}>{value.name}</span>
      </div>
      {isVisible ? (
        <div className='sort__popup'>
          <ul>
            {list.map((obj, i) => (
              <li
                className={value.sortCategory === obj.sortCategory ? 'active' : ''}
                key={i}
                onClick={() => selectSort(obj)}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Sort;
