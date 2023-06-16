import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default function ImageGalleryItem({
  webformatURL,
  description,
  largeImageURL,
}) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={webformatURL}
        alt={description}
        onClick={toggleModal}
      />
      {showModal && (
        <Modal url={largeImageURL} alt={description} onClose={toggleModal} />
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
