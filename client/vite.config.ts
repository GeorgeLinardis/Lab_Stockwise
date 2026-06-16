import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {
    // Simulate a browser environment so React components can render.
    // jsdom implements window, document, etc. in Node.
    environment: 'jsdom',

    // Runs before every test file. Used to register @testing-library/jest-dom
    // matchers (toBeInTheDocument, toHaveTextContent, etc.).
    setupFiles: ['./src/setupTests.ts'],

    // Makes describe/it/expect available globally without importing them.
    globals: true,
  },
})
