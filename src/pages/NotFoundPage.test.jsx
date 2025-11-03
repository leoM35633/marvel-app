import { test, expect } from '@jest/globals'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NotFoundPage from './NotFoundPage'

test('renders NotFoundPage and sets document title', () => {
  render(<NotFoundPage />)
  expect(screen.getByRole('heading', { level: 2, name: '404 - Page Not Found' })).toBeInTheDocument()
  expect(document.title).toBe('404 - Page Not Found')
})
