import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

// Import the user component if you want
import App from '/home/damner/code/src/App'

describe('Test runner suite', () => {
	// Sample test - each "test" block will be linked to individual challenge
	test('App should mount correctly', async () => {
		const { container } = render(<App />)
		expect(container.querySelector('h1').textContent.toLowerCase()).toBe('hello codedamn!')
	})
})