import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';

describe('CharacterList component', () => {
  afterEach(() => cleanup());

  it('renders Character', () => {
    const { asFragment } = render(
      <Header/>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
