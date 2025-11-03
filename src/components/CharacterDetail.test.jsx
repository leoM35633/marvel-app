import { describe, expect, test } from '@jest/globals'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CharacterDetail from './CharacterDetail'

// ... tests for CharacterDetail ...
describe('CharacterDetail component', () => {
  test('renders character details with image and description', () => {
    const character = {
      id: '100',
      name: 'Test Hero',
      description: 'A hero description',
      modified: '2020-01-01',
      thumbnail: { path: 'http://example.com/img', extension: 'jpg' },
    };

    render(<CharacterDetail character={character} />);

    // heading
    expect(screen.getByRole('heading', { level: 3, name: 'Test Hero' })).toBeInTheDocument();
    // description
    expect(screen.getByText(/A hero description/)).toBeInTheDocument();
    // image with constructed src
    const img = screen.getByRole('img', { name: 'Test Hero' });
    expect(img).toHaveAttribute('src', 'http://example.com/img.jpg');
  });

  test('renders fallback description when none provided', () => {
    const character = { id: '101', name: 'NoDesc', modified: '2020-01-01' };
    render(<CharacterDetail character={character} />);
    expect(screen.getByText('Aucune description.')).toBeInTheDocument();
  });
});
