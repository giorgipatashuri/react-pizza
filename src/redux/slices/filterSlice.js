import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sort: { name: 'popularity', sortCategory: 'rating' },
  isDesc: true,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setIsDesc(state, action) {
      state.isDesc = action.payload;
    },
  },
});
export const { setCategoryId, setSort, setIsDesc } = filterSlice.actions;
export default filterSlice.reducer;
