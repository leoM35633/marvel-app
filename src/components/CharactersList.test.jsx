import { expect, test } from '@jest/globals'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import CharactersList from './CharactersList'

// ... tests for CharactersList ...
test('renders list of characters with links', () => {
  const characters = [
    { id: '100', name: 'Beast' },
    { id: '101', name: 'Thor' },
  ];

  // Render inside a router so <Link> works
  render(
    <MemoryRouter>
      <CharactersList characters={characters} />
    </MemoryRouter>
  );

  // vérifie les noms
  expect(screen.getByText('Beast')).toBeInTheDocument();
  expect(screen.getByText('Thor')).toBeInTheDocument();

  // vérifie le href du lien pour Beast
  const beastLink = screen.getByRole('link', { name: 'Beast' });
  expect(beastLink).toHaveAttribute('href', '/character/100');
});
