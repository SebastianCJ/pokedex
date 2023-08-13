import { render, screen, fireEvent } from "@testing-library/react";
import PokeBtn from "../PokeBtn";

const onClick = jest.fn();

test("renders with the right name", () => {
  const name = "Click me!";
  render(<PokeBtn onClick={onClick} name={name} />);

  const Btn = screen.getByRole("button", { name: /click me!/i });
  expect(Btn).toBeInTheDocument();
});

test("it calls the onclick method of button", () => {
  const name = "Click me!";
  render(<PokeBtn onClick={onClick} name={name} />);

  const Btn = screen.getByRole("button", { name: /click me!/i });
  fireEvent.click(Btn);

  expect(onClick).toHaveBeenCalledTimes(1);
});
