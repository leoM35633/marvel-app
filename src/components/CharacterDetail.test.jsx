import { describe, expect, test } from '@jest/globals'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CharacterDetail from './CharacterDetail'

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
    // image(s) should be present when thumbnail exists
    expect(screen.queryAllByRole('img')).toHaveLength(1);
    // image with constructed src - use queryByRole to get image by character name
    const img = screen.queryByRole('img', { name: character.name });
    expect(img).not.toBeNull();
    expect(img).toHaveAttribute('src', 'http://example.com/img.jpg');
  });

  test('renders fallback description and no image when none provided', () => {
    const character = { id: '101', name: 'NoDesc', modified: '2020-01-01' };
    render(<CharacterDetail character={character} />);
    // fallback description
    expect(screen.getByText('Aucune description.')).toBeInTheDocument();
    // no image element for this character should be rendered when thumbnail is absent
    const img = screen.queryByRole('img', { name: character.name });
    expect(img).toBeNull();
    // additionally ensure there are no images globally for this render
    expect(screen.queryAllByRole('img')).toHaveLength(0);
  });

  test('renders "No character" when no character prop is provided', () => {
    render(<CharacterDetail />);
    expect(screen.getByText('No character')).toBeInTheDocument();
  });
});
