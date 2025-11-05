import { test, expect } from '@jest/globals'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NotFoundPage from './NotFoundPage'

test('renders NotFoundPage, sets document title and displays h2', () => {
  render(<NotFoundPage />)
  expect(screen.getByRole('heading', { level: 2, name: '404 - Page Not Found' })).toBeInTheDocument()
  expect(document.title).toBe('404 - Page Not Found')
})