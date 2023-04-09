import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App/>);
})

test('renders logo', () => {
  //render(<App/>);
  const logo = screen.getByRole('img', {name: 'Logotipo Rick and Morty'});
  expect(logo).toBeInTheDocument();
});

test('renders title', () => {
  //render(<App/>);
  const title = screen.getByText(/listA de persOnajes/i);
  expect(title).toBeInTheDocument();
});
