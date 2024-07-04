import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem/>', () => {

    const title = 'Google';
    const url = 'https://www.google.com';

    test('Debe de hacer match con el snapshot', () => {
        const { asFragment, container } = render(<GifItem title={title} url={url} />);
        expect(asFragment()).toMatchSnapshot();
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con la url y alt indicado', () => {
        render(<GifItem title={title} url={url} />);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(src);
        expect(alt).toBe(alt);
    });

    test('Debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});
