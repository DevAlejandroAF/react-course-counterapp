describe('Pruebas en <Democomponent />', () => { 
  test('Esta prueba no debe fallar', () => {
    const message = 'Hola mundo';
    const message2 = message.trim();

    expect( message ).toBe( message2 );
  })
})