//Action creator
export const setSortBy = typeSort => ({
  type: 'SET_SORT_BY',
  payload: typeSort,
});

export const setCategory = catIndex => ({
  type: 'SET_CATEGORY',
  payload: catIndex,
});
