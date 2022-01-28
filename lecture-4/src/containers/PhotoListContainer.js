import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from '../components/PhotoList';
import { fetchPhotos } from '../redux/photos';
import selectFilteredPhotos from '.././redux/selector/selectFilteredPhotos';

function PhotoListContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  // const { photos, loading } = useSelector(
  //   state => ({
  //     photos:
  //       state.category.category === 'all'
  //         ? state.photos.data
  //         : state.photos.data.filter(
  //             photo => photo.category === state.category.category
  //           ),
  //     loading: state.photos.loading,
  //   }),
  //   shallowEqual
  // );

  // const { allPhotos, category, loading } = useSelector(
  //   state => ({
  //     category: state.category.category,
  //     allPhotos: state.photos.data,
  //     loading: state.photos.loading,
  //   }),
  //   shallowEqual
  // );

  // const photos =
  //   category === 'all'
  //     ? allPhotos
  //     : allPhotos.filter(photo => photo.category === category);

  const photos = useSelector(selectFilteredPhotos);
  const loading = useSelector(state => state.photos.loading);

  console.log('PhotoListContainer rendered');

  if (loading === 'error') {
    return <span>Error!</span>;
  }

  if (loading !== 'done') {
    return <span>loading...</span>;
  }

  return <PhotoList photos={photos} />;
}

export default PhotoListContainer;
