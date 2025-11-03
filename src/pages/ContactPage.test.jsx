import { test, expect } from '@jest/globals'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ContactPage from './ContactPage'

test('renders ContactPage and sets document title', () => {
  render(<ContactPage />)
  expect(screen.getByRole('heading', { level: 2, name: /Contact Us/i })).toBeInTheDocument()
  expect(document.title).toBe('Contact - Marvel App')
})
