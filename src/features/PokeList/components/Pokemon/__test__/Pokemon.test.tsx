import { render, screen } from "@testing-library/react";
import Pokemon from "../Pokemon";

const renderPokemon = () => {
  const pokemon = {
    name: "Bulbasaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    id: "#1",
    types: ["Grass", "Poison"],
  };

  return render(<Pokemon pokemon={pokemon} />);
};

test("it shows the pokemon's name", () => {
  renderPokemon();
  expect(screen.getByText(/Bulbasaur/i)).toBeInTheDocument();
});

test("it shows the pokemon's image", () => {
  renderPokemon();
  const img = screen.getByRole("img");
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute(
    "src",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
  );
  expect(img).toHaveAttribute("alt", "Pokemon Sprite");
});

test("it shows the pokemon's number", () => {
  renderPokemon();
  expect(screen.getByText(/#1/i)).toBeInTheDocument();
});

test("it shows the pokemon's type", () => {
  renderPokemon();
  expect(screen.getByText(/Grass/i)).toBeInTheDocument();
  expect(screen.getByText(/Poison/i)).toBeInTheDocument();
});
