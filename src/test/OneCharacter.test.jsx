import { render, screen } from '@testing-library/react';
import OneCharacter from '../components/OneCharacter';
import { MemoryRouter as Router } from 'react-router-dom';

test('render backButton', () => {
    render(<Router><OneCharacter/></Router>);
    const backButton = screen.getByText(/back/i);
    expect(backButton).toBeInTheDocument();
});
