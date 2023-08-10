import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images, showModal }) => {
  return images.map(({ webformatURL, largeImageURL, id }) => (
    <li className={css.galleryItem} key={id}>
      <img
        src={webformatURL}
        alt=""
        className={css.image}
        onClick={() => showModal(largeImageURL)}
      />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
};
