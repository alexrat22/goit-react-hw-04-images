import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { webformatURL, description, largeImageURL } = this.props;
    return (
      <li className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItemImage}
          src={webformatURL}
          alt={description}
          onClick={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal
            url={largeImageURL}
            alt={description}
            onClose={this.toggleModal}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
