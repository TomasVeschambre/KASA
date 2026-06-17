import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MenuRoulant from '../components/MenuRoulant/index';

describe('MenuRoulant', () => {
  test('affiche le titre correctement', () => {
    render(<MenuRoulant title="Mon Titre" content="Contenu" />);
    
    expect(screen.getByText('Mon Titre')).toBeInTheDocument();
  });

  test('change l\'état d\'ouverture au clic (useState)', () => {
    render(<MenuRoulant title="Cliquez-moi" content="Contenu test" />);
    
    const header = screen.getByText('Cliquez-moi');
    const content = screen.getByText('Contenu test');
    
    // État initial : fermé (isOpen = false)
    expect(content.parentElement).toHaveStyle({ maxHeight: '0' });
    
    // Premier clic : ouvre (isOpen = true)
    fireEvent.click(header);
    expect(content.parentElement).toHaveStyle({ maxHeight: '500px' });
    
    // Second clic : ferme (isOpen = false)
    fireEvent.click(header);
    expect(content.parentElement).toHaveStyle({ maxHeight: '0' });
  });
});

