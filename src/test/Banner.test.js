import { render, screen } from '@testing-library/react';
import Banner from '../components/Banner';

describe('Banner component', () => {

    test('texto encontrado', () =>{
        render(<Banner />);
        const heading = screen.getByRole('heading', { name: 'Hi There,'})
        expect(heading).toBeInTheDocument();
    })
    test('texto encontrado', () =>{
        render(<Banner />);
        const heading = screen.getByRole('heading', { name: "I'm Kiara Malasquez"})
        expect(heading).toBeInTheDocument();
    })
    test('la caja de texto se encuentra en el documento', () =>{
        render(<Banner />);
        const img = screen.getByRole('img', { name: 'm'})
        expect(img).toBeInTheDocument();
    })
    test('la caja de texto se encuentra en el documento', () =>{
        render(<Banner />);
        const link = screen.getByRole('link', { name: 'Start'})
        expect(link).toBeInTheDocument();
    })
    test('la caja de texto se encuentra en el documento', () =>{
        render(<Banner />);
        const button = screen.getByRole('button', { name: 'Start'})
        expect(button).toBeInTheDocument();
    })
})