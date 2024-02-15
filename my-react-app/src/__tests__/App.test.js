// App.test.js
import { render } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  const { getByText } = render(<App/>);
  const linkElement = getByText(/Welcome to My App/i);
  expect(linkElement).toBeInTheDocument();
});

