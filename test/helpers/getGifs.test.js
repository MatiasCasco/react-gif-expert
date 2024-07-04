import { getGifs } from '../../src/helpers/GetGifs';
describe('Pruebas en getGifs()', () => {

    test('Debe de retornar un arreglo de gifs', async () => {

        const gifs = await getGifs('One Punch');
        // console.log(gifs);
        expect(gifs.length).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String),
            });
    });

});