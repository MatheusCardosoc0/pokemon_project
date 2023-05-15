import { logRoles, render, screen } from '@testing-library/react';
import PokemonContainerTemplate from '.';
import { pokemonsExamples } from '@/constants/pokemonsExamples';



jest.mock('@/hooks/useGetPokemons', () => ({
  __esModule: true,
  useGetPokemons: jest.fn(() => ({
    pokemons: pokemonsExamples,
    loading: false,
    isFilter: false,
    filterPokemonsByElement: jest.fn(),
  })),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

test('render PokemoCard component', () => {
  
  const view = render(<PokemonContainerTemplate />);
  const nameCard = view.getByRole('button', {name: 'Bulbasaur'})

  expect(nameCard).toBeInTheDocument
});
