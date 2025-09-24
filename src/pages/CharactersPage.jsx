import CharactersList from "../components/CharactersList";
import NumberOfCharacters from "../components/NumberOfCharacters";

import characters from '../data/characters.json';

function CharactersPage() {
  document.title = "List of character"
  return (
    <>
      <h1>Marvel Characters</h1>
      <CharactersList characters={characters} />
      <NumberOfCharacters  characters={characters}/>

    </>
  );
}

export default CharactersPage;