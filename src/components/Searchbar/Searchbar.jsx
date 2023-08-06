import { Component } from 'react';
import css from './Searchbar.module.css';
import { BiSearchAlt } from '@react-icons/all-files/bi/BiSearchAlt';

export class Searchbar extends Component {
  state = { searchWord: '' };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchWord);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <BiSearchAlt className={css.icon} size={25} />
            <span className={css.buttonlabel}>Search</span>
          </button>

          <input
            name="searchWord"
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.searchWord}
          />
        </form>
      </header>
    );
  }
}
