import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, largeImageURL } = this.props.image;

    return (
      <li className={css.galleryItem}>
        <img
          src={webformatURL}
          alt=""
          className={css.image}
          onClick={() => this.props.showModal(largeImageURL)}
        />
      </li>
    );
  }
}
