import { screen, render } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });
        render(<GifGrid category={category}/>);
        screen.debug();
        expect(screen.getByText('cargando....'));
        expect(screen.getByText(category));
    });

    test('Debe de mostrar items cuando se cargan las imagenes desde useFetchGif', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'One Piece',
                url: 'https://localhost/One_Piece.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
    });

});