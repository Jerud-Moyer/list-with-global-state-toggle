import React from 'react';
import PropTypes from 'prop-types';
import { useCharacters } from '../../hooks/characters';
import CharacterItem from './CharacterItem';
import Header from '../header/Header';
import styles from './CharacterList.css';
import { useThemeType } from '../../hooks/themes';

const CharacterList = ({ page }) => {
  const { loading, characters } = useCharacters(page);
  if(loading) return <h1>Loading.1.2.3</h1>;

  const characterElements = characters.map(character => (
    <li key={character.id}>
     
      <CharacterItem {...character} />
      
    </li>
  ));

  const theme = useThemeType();
  
  return (
    <div className={styles.[theme]}>
      <Header />
      <ul data-testid="characters" className={styles.CharacterList}>
        {characterElements}
      </ul>
    </div>
  );
};

CharacterList.propTypes = {
  page: PropTypes.number
};

export default CharacterList;
