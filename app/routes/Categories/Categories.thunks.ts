import PokemonService from '../../../src/services/pokemon.service';

export const populatePokemonDB =
  (count, Storage) => async (dispatch, getState) => {
    const storageKeys = [
      'abilities',
      'generations',
      'regions',
      'types',
      'versions',
    ];

    const state = getState().storage;

    const mustPopulateKeys: boolean = storageKeys.some((storageKey) => {
      return !(storageKey in state);
    });

    if (mustPopulateKeys) {
      Promise.all([
        PokemonService.getPokemonAbilities(),
        PokemonService.getPokemonGenerations(),
        PokemonService.getPokemonRegions(),
        PokemonService.getPokemonTypes(),
        PokemonService.getPokemonVersions(),
      ]).then((result) => {
        result.forEach(({results}, index) => {
          Storage.writeToStorage(storageKeys[index], results);
        });
      });
    }

    console.log(count, 'count');
    console.log(state?.pokemon?.length, 'length');

    if (
      !('pokemon' in state) ||
      (state?.pokemon?.length ?? count - 1 < count)
    ) {
      PokemonService.getAllPokemon({limit: count}).then(({results}) => {
        Promise.all(
          results.map((pokemonInfo) => {
            return PokemonService.getPokemonById(pokemonInfo.name).then(
              (pokemon) => {
                Storage.writeToStorage(
                  `pokemon.${pokemonInfo.name}`,
                  pokemon,
                  true,
                );
              },
            );
          }),
        );
      });
    }
  };

export default {
  populatePokemonDB,
};
