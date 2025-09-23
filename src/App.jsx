import './App.css';
import characters from './data/characters.json';
import CharactersList from './components/CharactersList'; // Import du composant
import NumberOfCharacters from './components/NumberOfCharacters'

function App() {
  return (
    <>
      <h1>Marvel Characters</h1>
      <CharactersList characters={characters} />
      <NumberOfCharacters  characters={characters}/>
    </>
  );
}

export default App;