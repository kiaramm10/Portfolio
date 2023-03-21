import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';

describe('Contact component', () => {

    test('la caja de texto se encuentra en el documento', () =>{
        render(<Contact />);
        const heading = screen.getByRole('heading', { name: "What's Next?"})
        expect(heading).toBeInTheDocument();
    })
    test('la caja de texto se encuentra en el documento', () =>{
        render(<Contact />);
        const heading = screen.getByRole('heading', { name: 'Get in Touch'})
        expect(heading).toBeInTheDocument();
    })
    test('la caja de texto se encuentra en el documento', () =>{
        render(<Contact />);
        const link = screen.getByRole('link', { name: 'Say Hello!'})
        expect(link).toBeInTheDocument();
    })
})