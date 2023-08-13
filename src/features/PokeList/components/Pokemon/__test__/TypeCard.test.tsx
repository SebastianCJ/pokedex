import { render, screen } from "@testing-library/react";
import TypeCard from "../TypeCard";
import ColorTypes from "../../../../../utils/ColorTypes";

const type = "Poison";
const renderTypeCard = () => {
  return render(<TypeCard type={type} />);
};

test("it shows the pokemon's type", () => {
  renderTypeCard();
  expect(screen.getByText(/Poison/i)).toBeInTheDocument();
});

test("it displays the right backgroundcolor for its type", () => {
  renderTypeCard();
  expect(screen.getByLabelText(/type-container/i)).toHaveStyle(
    `background-color: ${ColorTypes[type.toLowerCase()]}`
  );
});
