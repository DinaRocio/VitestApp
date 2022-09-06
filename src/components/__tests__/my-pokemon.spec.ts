import { render, screen, fireEvent } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import MyPokemon from "../my-pokemon.vue";

describe("my-pokemon", () => {
  it("render span correctly", async () => {
    //arrange
    render(MyPokemon);

    const pokemon = await screen.findByText("GetPokemon");
    await fireEvent.click(pokemon);
    const value = await screen.findByText("bulbasaur");

    //asert
    expect(value.innerHTML).toBe("bulbasaur");
  });
});
