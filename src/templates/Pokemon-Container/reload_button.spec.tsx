import { logRoles, render } from "@testing-library/react"
import PokemonContainerTemplate from '.'

jest.mock('@/hooks/useGetPokemons', () => ({
  __esModule: true,
  useGetPokemons: jest.fn(() => ({
    pokemons: [],
    loading: false,
    isFilter: true,
    filterPokemonsByElement: jest.fn(),
  })),
}));

test('Render load button if pokemon array length is smaller than 20', () => {
  const view = render(<PokemonContainerTemplate />)

  const nameButton = view.getByRole('button', {name: 'reload_button'})

  expect(nameButton).toBeInTheDocument()
})