import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { searchImages } from 'components/GetImages/GetImages';

export class ImageGalleryItem extends Component {
  state = {
    images: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.setState({ isLoading: true });
      searchImages(this.props.searchTerm)
        .then(response => response.json())
        .then(images => this.setState({ images: images.hits }))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    const images = this.state.images;
    if (!images) {
      return;
    } else
      return images.map(({ id, webformatURL }) => (
        <li className={css.galleryItem} key={id}>
          <img src={webformatURL} alt="" className={css.image} />
        </li>
      ));
  }
}
