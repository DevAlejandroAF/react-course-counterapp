import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas de 06-deses-obj', () => {
  test('usContext debe de retornar un objeto', () => {
    const testSuperHero = {
      nombre: 'Peter',
      edad: 20,
      clave: 'SpiderMan',
    }

    const superHero = usContext(testSuperHero)
    expect(superHero).toEqual({
      nombreClave: testSuperHero.clave,
      anios: testSuperHero.edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232
      }
    });
  });
});
