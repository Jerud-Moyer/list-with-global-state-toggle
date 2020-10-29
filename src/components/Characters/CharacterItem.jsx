import React from 'react';
import PropTypes from 'prop-types';
import styles from './CharacterItem.css';

const CharacterItem = ({ name, imageUrl }) => {
  return (
    <figure className={styles.CharacterItem}>
      <img src= {imageUrl} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default CharacterItem;
