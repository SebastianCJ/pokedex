import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

test("Should bounce on hover", async () => {
  renderPokemon();
  const pokemonCard = screen.getByLabelText("pokemon-info-card");

  userEvent.hover(pokemonCard);
  screen.debug(pokemonCard, 10000);
  await waitFor(() => {
    expect(screen.getByLabelText("pokemon-info-card")).toHaveStyle(
      "box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5"
    );
  });
});
