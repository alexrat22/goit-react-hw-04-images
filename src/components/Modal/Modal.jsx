import PropTypes from 'prop-types';
import css from './Modal.module.css';

export default function Modal({ onClose, url, alt }) {
  const handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      onClose();
      window.removeEventListener('keydown', handleKeyDown);
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  const onOverlayClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return (
    <div className={css.Overlay} onClick={onOverlayClick}>
      <div className={css.Modal}>
        <img className={css.LargeUrl} src={url} alt={alt} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
