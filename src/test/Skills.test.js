import { render, screen } from '@testing-library/react';
import Skills from '../components/Skills';

describe('Skills component', () => {

    test('la caja de texto se encuentra en el documento', () =>{
        render(<Skills />);
        const heading = screen.getByRole('heading', { name: "HTML"})
        expect(heading).toBeInTheDocument();
    })
    test('la caja de texto se encuentra en el documento', () =>{
        render(<Skills />);
        const heading = screen.getByRole('heading', { name: 'Skills'})
        expect(heading).toBeInTheDocument();
    })
})