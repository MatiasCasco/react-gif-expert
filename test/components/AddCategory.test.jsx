import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory.jsx';
describe('Pruebas en <AddCategory/>', () => {
/*
* // TODO: Indica una tarea pendiente. Por ejemplo,
*     cuando implementas una función rápida con un
*     valor de retorno predeterminado y agregas un
*     comentario TODO para describir lo que debe hacer esa función1.
*
*  // FIXME: FIXME: Se utiliza para señalar áreas del código que
*      necesitan correcciones o mejoras. Si encuentras una parte del
*      código que no es eficiente pero no tienes tiempo para
*      abordarla en ese momento, puedes agregar un comentario FIXME
*
*  // XXX: Similar a FIXME, pero se usa para indicar problemas
*       complejos o casos raros que aún no se han resuelto.
*       Por ejemplo, si el código falla en circunstancias específicas
*       pero no puedes identificar el problema exacto, puedes marcarlo
*       con XXX
* */
    const value = 'Saitama';

    test('Debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={ () => {} } />);

        const input = screen.getByRole('textbox');
        screen.debug();
        // Evalua que por defecto sea vacio
        expect(input.value).toBe('');
        fireEvent.input(input, { target: { value } });
        screen.debug();
        // Evalua cuando se carga un valor en el input
        expect(input.value).toBe(value);
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'One Piece';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value:  inputValue } });
        fireEvent.submit( form );
        // screen.debug();
        expect( input.value ).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar el onNewCategory si el input esta vacio', () => {
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');

        fireEvent.submit( form );
        screen.debug();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });

});