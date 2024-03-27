import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Puebas en 02-template-string', () => {
  test('getSaludo debe de retornar "Hola Alejandro"', () => {
    const name = 'Alejandro';
    const message = getSaludo(name);
    expect(message).toBe(`Hola ${name}`);
  });
});
