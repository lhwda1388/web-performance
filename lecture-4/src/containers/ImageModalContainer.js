import React from 'react';
import { shallowEqual } from 'react-redux';
import { useSelector } from 'react-redux';
import ImageModal from '../components/ImageModal';

function ImageModalContainer() {
  const { modalVisible, bgColor, src, alt, id } = useSelector(
    state => ({
      modalVisible: state.imageModal.modalVisible,
      bgColor: state.imageModal.bgColor,
      src: state.imageModal.src,
      alt: state.imageModal.alt,
      id: state.imageModal.id,
    }),
    shallowEqual
  );
  // const modalVisible = useSelector(state => state.imageModal.modalVisible);

  // const bgColor = useSelector(state => state.imageModal.bgColor);

  // const src = useSelector(state => state.imageModal.src);

  // const alt = useSelector(state => state.imageModal.alt);

  console.log('ImageModalContainer rendered');
  return (
    <ImageModal
      modalVisible={modalVisible}
      bgColor={bgColor}
      src={src}
      alt={alt}
      id={id}
    />
  );
}

export default ImageModalContainer;
