import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';
import { ThemeProvider } from '../../context/ThemeContext';

describe('CharacterList component', () => {
  afterEach(() => cleanup());

  it('renders Character', () => {
    const { asFragment } = render(<ThemeProvider>
      <Header/>
    </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
