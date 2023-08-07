import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchTerm: '',
    isShowModal: false,
    modalImage: '',
  };
  onSubmit = data => {
    this.setState({ searchTerm: data });
  };

  showModal = url => {
    this.setState({ isShowModal: true });
    this.setState({ modalImage: url });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery>
          <ImageGalleryItem
            searchTerm={this.state.searchTerm}
            showModal={this.showModal}
          />
        </ImageGallery>

        {this.state.isShowModal && (
          <Modal image={this.state.modalImage} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}
