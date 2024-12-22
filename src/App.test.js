import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders Header, Main, and Footer components', () => {
  render(
    <BrowserRouter> {/* Necesario para las pruebas */}
      <App />
    </BrowserRouter>
  );

  // Verificar que los componentes Header, Main y Footer se renderizan
  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});
