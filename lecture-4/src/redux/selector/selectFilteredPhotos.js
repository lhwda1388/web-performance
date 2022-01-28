import { createSelector } from 'reselect';

const selectFilteredPhotos = createSelector(
  [state => state.photos.data, state => state.category.category],
  (allPhotos, category) =>
    category === 'all'
      ? allPhotos
      : allPhotos.filter(photo => photo.category === category)
);

export default selectFilteredPhotos;
