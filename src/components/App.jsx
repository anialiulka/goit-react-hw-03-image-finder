import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class App extends Component {
  state = {
    searchTerm: '',
  };
  onSubmit = data => {
    this.setState({ searchTerm: data });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery>
          <ImageGalleryItem searchTerm={this.state.searchTerm} />
        </ImageGallery>
      </div>
    );
  }
}
