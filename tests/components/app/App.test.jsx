import { render } from "@testing-library/react";
import App from "../../../src/components/app/App";

describe('Pruebas en <App />', () => {
  //  test('Debe de hacer match con el snapshot', () => {
  //    const title = 'Hello World';
  //    const { container } = render(<App title={title} />);
  //    expect(container).toMatchSnapshot();
  //  });

  test('Debe de mostrar el título en un H1', () => {
    const title = 'Hello World';
    const { container, getByText, getByTestId } = render(<App title={title} />);
    expect(getByText(title)).toBeTruthy();
    //    const h1 = container.querySelector('h1');
    //    expect(h1.innerHTML).toContain(title);
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('Debe de mostrar el subtitulo enviado por props', () => {
    const title = 'Hello World';
    const subTitle = "There's no subtitle"
    const { getAllByText } = render(<App title={title} subTitle={subTitle} />);
    expect(getAllByText(subTitle).length).toBe(2);
  });
});

