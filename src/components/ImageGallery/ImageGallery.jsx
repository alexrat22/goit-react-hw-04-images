import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images }) {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            description={image.tags}
            largeImageURL={image.largeImageURL}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};
