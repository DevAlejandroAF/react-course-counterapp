import { render, screen } from "@testing-library/react";
import App from "../../../src/components/app/App";

describe('Pruebas en <App />', () => {
  const title = 'Hello World';
  const subTitle = "There's no subtitle"
  test('Debe de mostrar el título en un H1', () => {
    const { container } = render(<App title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el mensaje "Hello World"', () => {
    render(<App title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    // screen.debug();
  })

  test('Debe de mostrar el título en un h1', () => {
    render(<App title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
  })

  test('Debe de mostrar el subtitulo enviado por props', () => {
    render(<App title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(2);
  })

});

