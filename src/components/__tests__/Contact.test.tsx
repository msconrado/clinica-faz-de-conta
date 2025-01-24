import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact Component', () => {
  it('renders contact information correctly', () => {
    render(<Contact />);
    
    // Verifica se os títulos principais estão presentes
    expect(screen.getByText('ENTRE EM CONTATO')).toBeInTheDocument();
    
    // Verifica se as informações de contato estão presentes
    expect(screen.getByText('(31) 99530-0370')).toBeInTheDocument();
    expect(screen.getByText('clinicafazdeconta@gmail.com')).toBeInTheDocument();
    
    // Verifica se o endereço está presente
    const address = screen.getByText(/Rua Safira, Nº 370/);
    expect(address).toBeInTheDocument();
  });
});