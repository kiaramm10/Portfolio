import { render, screen } from '@testing-library/react';
import AboutMe from '../components/Aboutme';

describe('AboutMe component', () => {

    test('la caja de texto se encuentra en el documento', () =>{
        render(<AboutMe />);
        const heading = screen.getByRole('heading', { name: 'About Me'})
        expect(heading).toBeInTheDocument();
    })
    test('la caja de texto se encuentra en el documento', () =>{
        render(<AboutMe />);
        const img = screen.getByRole('img', { name: 'Foto Kiara'})
        expect(img).toBeInTheDocument();
    })
})