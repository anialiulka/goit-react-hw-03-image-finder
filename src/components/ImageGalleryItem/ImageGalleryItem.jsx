import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { searchImages } from 'components/GetImages/GetImages';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

export class ImageGalleryItem extends Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
    totalImages: null,
    page: 1,
  };

  componentDidUpdate(prevProps) {
    if (this.props.searchTerm.trim() === '') {
      alert('Please, write a search word');
      return;
    }
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.setState({ isLoading: true, images: null });

      searchImages(this.props.searchTerm, this.props.page)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Nothing found for ${this.props.searchTerm}`)
          );
        })
        .then(images => {
          if (Array.isArray(images.hits) && images.hits.length === 0) {
            alert('Nothing found');
          } else {
            this.setState({
              images: images.hits,
              totalImages: images.totalHits,
            });
            if (images.totalHits / 12 >= this.state.page) {
              const pageUpdate = this.state.page + 1;
              this.setState({ page: pageUpdate });
            }
          }
        })
        .catch(error => {
          console.log(error);
          this.setState({ error });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    const { images, isLoading, error, page } = this.state;

    if (!images) {
      return null;
    }
    return (
      <>
        {error && <h1>There are no pictures for your request</h1>}
        {isLoading && <Loader />}
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <li className={css.galleryItem} key={id}>
            <img
              src={webformatURL}
              alt=""
              className={css.image}
              onClick={() => this.props.showModal(largeImageURL)}
            />
          </li>
        ))}
        {page > 1 && <Button />}
      </>
    );
  }
}
