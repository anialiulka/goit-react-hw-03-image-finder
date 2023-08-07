import { Component } from 'react';
import css from './Searchbar.module.css';
import { BiSearchAlt } from '@react-icons/all-files/bi/BiSearchAlt';

export class Searchbar extends Component {
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.props.onSubmit}>
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
          />
        </form>
      </header>
    );
  }
}
