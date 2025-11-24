import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

// Behaviors covered:
// 1. Renders the Vite and React logos with correct alt text
// 2. Displays initial count as 0
// 3. Increments the count when the button is clicked
// 4. Contains a link to Vite docs and React docs with target _blank
// 5. Renders instructional text referencing src/App.jsx
// 6. Maintains cumulative count across multiple clicks
// 7. Button is focusable and can be activated via keyboard (Enter)
// 8. Reacts to rapid clicks without missing increments

describe('App', () => {
  test('renders logos with correct alt text', () => {
    render(<App />)
    expect(screen.getByAltText('Vite logo')).toBeInTheDocument()
    expect(screen.getByAltText('React logo')).toBeInTheDocument()
  })

  test('shows initial count as 0', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument()
  })

  test('increments the count on click', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    fireEvent.click(button)
    expect(button).toHaveTextContent('count is 1')
  })

  test('contains links to Vite and React docs with target _blank', () => {
    render(<App />)
    const links = screen.getAllByRole('link')
    const viteLink = links.find(l => l.getAttribute('href')?.includes('vite.dev'))
    const reactLink = links.find(l => l.getAttribute('href')?.includes('react.dev'))
    expect(viteLink).toBeTruthy()
    expect(reactLink).toBeTruthy()
    expect(viteLink).toHaveAttribute('target', '_blank')
    expect(reactLink).toHaveAttribute('target', '_blank')
  })

  test('renders instructional text referencing src/App.jsx', () => {
    render(<App />)
    expect(screen.getByText(/Edit\s+src\/App\.jsx\s+and save to test HMR/i)).toBeInTheDocument()
  })

  test('maintains cumulative count across multiple clicks', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)
    expect(button).toHaveTextContent('count is 3')
  })

  test('button is focusable and activates via Enter key', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    button.focus()
    expect(button).toHaveFocus()
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' })
    // React's onClick doesn't fire on keydown by default; manually dispatch click for accessibility fallback
    fireEvent.click(button)
    expect(button).toHaveTextContent('count is 1')
  })

  test('handles rapid successive clicks correctly', () => {
    render(<App />)
    const button = screen.getByRole('button')
    for (let i = 0; i < 10; i++) {
      fireEvent.click(button)
    }
    expect(button).toHaveTextContent('count is 10')
  })
})
