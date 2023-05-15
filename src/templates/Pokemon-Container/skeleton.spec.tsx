import { render, screen } from '@testing-library/react';
import PokemonContainerTemplate from '.';



test('renders Skeleton component when loading is true', () => {
  jest.mock('@/hooks/useGetPokemons', () => ({
    __esModule: true,
    useGetPokemons: jest.fn(() => ({
      pokemons: [],
      loading: true,
      isFilter: false,
      filterPokemonsByElement: jest.fn(),
    })),
  }));

  const {getAllByRole} = render(<PokemonContainerTemplate />);

  const skeletonElement = getAllByRole('button')

  expect(skeletonElement).toHaveLength(10)
});

test('does not render Skeleton component when loading is false', () => {
  jest.mock('@/hooks/useGetPokemons', () => ({
    __esModule: true,
    useGetPokemons: jest.fn(() => ({
      pokemons: [],
      loading: false,
      isFilter: false,
      filterPokemonsByElement: jest.fn(),
    })),
  }));

  const view = render(<PokemonContainerTemplate />);
  const skeletonElements = screen.queryAllByTestId('skeleton');

  expect(skeletonElements).toHaveLength(0);
});


