import './App.css';
import characters from './data/characters.json';

function App() {
  return (
    <>
      <h1>Hello World from React with JSX</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id} id={`idPers${character.id}`}>
            {character.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;