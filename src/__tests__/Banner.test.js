import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from '../components/Banner/index';

describe('Banner', () => {
  test('affiche la bannière', () => {
    render(<Banner picture="test.jpg" title="Test Bannière" />);
    expect(screen.getByAltText('Test Bannière')).toBeInTheDocument();
  });
});