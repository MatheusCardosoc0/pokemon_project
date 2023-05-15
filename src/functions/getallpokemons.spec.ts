import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { GetAllPokemons } from './getAllPokemons';
import { usePokemonState } from '@/context/usePokemonsState';

jest.mock('@/context/usePokemonsState');
const mockedUsePokemonState = usePokemonState as jest.MockedFunction<
  typeof usePokemonState
>;

describe('GetAllPokemons', () => {
  const setLoadingMock = jest.fn();
  const setAllPokemonsMock = jest.fn();

  beforeEach(() => {
    mockedUsePokemonState.mockReturnValue({
      setLoading: setLoadingMock,
      setAllPokemons: setAllPokemonsMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should fetch and set all pokemons', async () => {
    const mockAdapter = new MockAdapter(axios);

    const response = {
      data: {
        results: [
          { url: 'https://pokeapi.co/api/v2/pokemon/1' },
          { url: 'https://pokeapi.co/api/v2/pokemon/2' },
        ],
      },
    };

    const pokemon1Data = { name: 'bulbasaur' };
    const pokemon2Data = { name: 'ivysaur' };

    mockAdapter.onGet('?limit=1281').reply(200, response);
    mockAdapter.onGet('https://pokeapi.co/api/v2/pokemon/1').reply(200, pokemon1Data);
    mockAdapter.onGet('https://pokeapi.co/api/v2/pokemon/2').reply(200, pokemon2Data);

    await GetAllPokemons();

    expect(setLoadingMock).toHaveBeenCalledTimes(2);
    expect(setLoadingMock).toHaveBeenCalledWith(true);
    expect(setLoadingMock).toHaveBeenCalledWith(false);

    expect(setAllPokemonsMock).toHaveBeenCalledTimes(1);
    expect(setAllPokemonsMock).toHaveBeenCalledWith([pokemon1Data, pokemon2Data]);
  });

  // Add more test cases as needed
});
