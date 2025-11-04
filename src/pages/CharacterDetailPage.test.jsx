import { describe, test, expect } from '@jest/globals'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { createRoutesStub } from 'react-router'
import CharacterDetailPage from './CharacterDetailPage'

describe('CharacterDetailPage', () => {
  test('renders detail page with character provided by loader', async () => {
    const character = {
      id: '100',
      name: 'Test Hero',
      description: 'A hero description',
      modified: '2020-01-01',
      thumbnail: { path: 'http://example.com/img', extension: 'jpg' },
    }

    const Stub = createRoutesStub([
      {
        path: '/character/:id',
        Component: CharacterDetailPage,
        HydrateFallback: () => null,
        loader: () => ({ character }),
      },
    ])

    render(<Stub initialEntries={['/character/100']} />)

    // page heading (h2)
    expect(await screen.findByRole('heading', { level: 2, name: 'Détail du personnage' })).toBeInTheDocument()
    // vérifie le titre de la page
    expect(document.title).toBe('Détail du personnage - Marvel App')
    // character name from CharacterDetail (h3)
    expect(screen.getByRole('heading', { level: 3, name: 'Test Hero' })).toBeInTheDocument()
    // description
    expect(screen.getByText(/A hero description/)).toBeInTheDocument()
    // image with constructed src
    const img = screen.getByRole('img', { name: 'Test Hero' })
    expect(img).toHaveAttribute('src', 'http://example.com/img.jpg')
  })

  test('renders fallback description when none provided', async () => {
    const character = { id: '101', name: 'NoDesc', modified: '2020-01-01' }

    const Stub = createRoutesStub([
      {
        path: '/character/:id',
        Component: CharacterDetailPage,
        HydrateFallback: () => null,
        loader: () => ({ character }),
      },
    ])

    render(<Stub initialEntries={['/character/101']} />)

    expect(await screen.findByText('Aucune description.')).toBeInTheDocument()
    // vérifie le h2 de la page est présent
    expect(screen.getByRole('heading', { level: 2, name: 'Détail du personnage' })).toBeInTheDocument()
    // vérifie le titre de la page
    expect(document.title).toBe('Détail du personnage')
  })
})
