import { test, expect } from '@jest/globals'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AboutPage from './AboutPage'

test('renders AboutPage and sets document title', () => {
  render(<AboutPage />)
  expect(screen.getByRole('heading', { level: 2, name: 'About Us' })).toBeInTheDocument()
  expect(document.title).toBe('About Us - Marvel App')
})
